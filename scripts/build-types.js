import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { TAG_NAMES, VOID_TAGS } from '../src/tags.js';
import { GLOBAL_OVERRIDES, TAG_OVERRIDES } from '../src/attributes.manual.js';

const GENERATED_PATH = 'data/attributes.generated.json';
const OUTPUT_PATH = 'dist/index.d.ts';

function typeNameForTag(tag) {
  if (tag === 'a') return 'AAttributes';
  return `${tag[0].toUpperCase()}${tag.slice(1)}Attributes`;
}

function mergeAttributeMaps(base = {}, override = {}) {
  return {
    ...base,
    ...override,
  };
}

function escapeJsDoc(text) {
  return String(text)
    .replace(/\*\//g, '*\\/')
    .replace(/\r?\n/g, ' ');
}

function renderTypeBody(attributes) {
  const lines = [];

  for (const [name, meta] of Object.entries(attributes)) {
    const description = meta?.description ?? '';
    const type = meta?.type ?? 'string';

    if (description) {
      lines.push(`  /** ${escapeJsDoc(description)} */`);
    }

    lines.push(`  ${JSON.stringify(name)}?: ${type};`);
  }

  return lines.join('\n');
}

function renderSharedTypes() {
  return [
    'export type HtmlText = string | number | boolean | null | undefined;',
    'export type HtmlChild = HtmlText;',
    'export type HtmlChildren = HtmlChild[];',
    'export type ParentArgs<T> = [attrs?: T, ...children: HtmlChildren] | HtmlChildren;',
    '',
  ].join('\n');
}

function renderGlobalAttributesType(globalAttributes) {
  return [
    renderSharedTypes(),
    'export type GlobalAttributes = {',
    renderTypeBody(globalAttributes),
    '  [key: string]: string | number | boolean | undefined;',
    '};',
  ].join('\n');
}

function renderTagAttributeTypes(finalTagAttributes) {
  const lines = [];

  for (const tag of TAG_NAMES) {
    if (tag === 'fragment') continue;

    const attrs = finalTagAttributes[tag];
    if (!attrs || Object.keys(attrs).length === 0) continue;

    lines.push(`export type ${typeNameForTag(tag)} = GlobalAttributes & {`);
    lines.push(renderTypeBody(attrs));
    lines.push('};');
    lines.push('');
  }

  return lines.join('\n');
}

function attributesTypeForTag(tag, finalTagAttributes) {
  const attrs = finalTagAttributes[tag];
  return attrs && Object.keys(attrs).length > 0
    ? typeNameForTag(tag)
    : 'GlobalAttributes';
}

function renderTagDeclaration(tag, finalTagAttributes) {
  if (tag === 'fragment') {
    return 'export function fragment(...children: HtmlChildren): string;';
  }

  const attrsType = attributesTypeForTag(tag, finalTagAttributes);

  if (VOID_TAGS.includes(tag)) {
    return `export function ${tag}(attrs?: ${attrsType}): string;`;
  }

  return `export function ${tag}(...args: ParentArgs<${attrsType}>): string;`;
}

function buildFinalTagAttributes(generatedTagAttributes) {
  const out = {};

  for (const tag of TAG_NAMES) {
    if (tag === 'fragment') continue;

    out[tag] = mergeAttributeMaps(
      generatedTagAttributes[tag] ?? {},
      TAG_OVERRIDES[tag] ?? {},
    );
  }

  return out;
}

async function main() {
  const generatedRaw = await readFile(GENERATED_PATH, 'utf8');
  const generatedTagAttributes = JSON.parse(generatedRaw);

  const globalAttributes = mergeAttributeMaps({}, GLOBAL_OVERRIDES);
  const finalTagAttributes = buildFinalTagAttributes(generatedTagAttributes);

  const output = [
    '// AUTO-GENERATED — DO NOT EDIT',
    '',
    renderGlobalAttributesType(globalAttributes),
    '',
    renderTagAttributeTypes(finalTagAttributes),
    '',
    ...TAG_NAMES.map((tag) => renderTagDeclaration(tag, finalTagAttributes)),
    '',
  ].join('\n');

  await mkdir('dist', { recursive: true });
  await writeFile(OUTPUT_PATH, output, 'utf8');

  console.log(`Built ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});