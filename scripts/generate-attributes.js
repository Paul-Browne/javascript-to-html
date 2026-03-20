import ts from 'typescript';
import { writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import {
  TAG_ATTRIBUTE_NAMES,
  NAME_MAP,
} from '../src/attribute-names.js';

const require = createRequire(import.meta.url);
const DOM_LIB_PATH = require.resolve('typescript/lib/lib.dom.d.ts');
const OUTPUT_PATH = 'data/attributes.generated.json';

const program = ts.createProgram({
  rootNames: [DOM_LIB_PATH],
  options: {
    target: ts.ScriptTarget.ES2022,
  },
});

const checker = program.getTypeChecker();
const source = program.getSourceFile(DOM_LIB_PATH);

if (!source) {
  throw new Error('Could not load lib.dom.d.ts');
}

function normalizeName(name) {
  return NAME_MAP[name] ?? name;
}

function getTypeString(type) {
  if (type.isUnion()) {
    const parts = [];
    let hasString = false;
    let hasNumber = false;
    let hasBoolean = false;

    for (const member of type.types) {
      if (member.flags & ts.TypeFlags.Undefined || member.flags & ts.TypeFlags.Null) {
        continue;
      }

      if (member.flags & ts.TypeFlags.StringLiteral) {
        parts.push(JSON.stringify(member.value));
        continue;
      }

      if (member.flags & ts.TypeFlags.NumberLiteral) {
        parts.push(String(member.value));
        continue;
      }

      if (member.flags & ts.TypeFlags.BooleanLiteral) {
        parts.push(member.intrinsicName === 'true' ? 'true' : 'false');
        continue;
      }

      if (member.flags & ts.TypeFlags.StringLike) {
        hasString = true;
        continue;
      }

      if (member.flags & ts.TypeFlags.NumberLike) {
        hasNumber = true;
        continue;
      }

      if (member.flags & ts.TypeFlags.BooleanLike) {
        hasBoolean = true;
        continue;
      }
    }

    const unique = [...new Set(parts)];

    if (unique.length > 0) {
      if (hasString) unique.push('(string & {})');
      if (hasNumber) unique.push('number | string');
      if (hasBoolean) unique.push('boolean');
      return unique.join(' | ');
    }

    if (hasBoolean) return 'boolean';
    if (hasNumber) return 'number | string';
    if (hasString) return 'string';
  }

  if (type.flags & ts.TypeFlags.BooleanLike) return 'boolean';
  if (type.flags & ts.TypeFlags.NumberLike) return 'number | string';
  return 'string';
}

function findHTMLElementTagNameMap() {
  let found = null;

  ts.forEachChild(source, (node) => {
    if (
      ts.isInterfaceDeclaration(node) &&
      node.name.text === 'HTMLElementTagNameMap'
    ) {
      found = node;
    }
  });

  return found;
}

function getTagTypeMap() {
  const iface = findHTMLElementTagNameMap();
  if (!iface) {
    throw new Error('HTMLElementTagNameMap not found');
  }

  const map = new Map();

  for (const member of iface.members) {
    if (!ts.isPropertySignature(member) || !member.type || !member.name) {
      continue;
    }

    const tag = member.name.getText(source).replace(/['"]/g, '');
    const tagType = checker.getTypeFromTypeNode(member.type);

    map.set(tag, tagType);
  }

  return map;
}

function extractAllowedProps(type, allowedNames) {
  const props = new Map(type.getProperties().map((prop) => [prop.getName(), prop]));
  const out = {};

  for (const rawName of allowedNames) {
    const prop = props.get(rawName);
    if (!prop) continue;

    const decl = prop.valueDeclaration ?? prop.declarations?.[0];
    if (!decl) continue;

    const propType = checker.getTypeOfSymbolAtLocation(prop, decl);
    const finalName = normalizeName(rawName);

    out[finalName] = {
      type: rawName.startsWith('on') ? 'string' : getTypeString(propType),
      description: '',
    };
  }

  return out;
}

async function main() {
  const tagTypeMap = getTagTypeMap();
  const out = {};

  for (const [tag, type] of tagTypeMap.entries()) {
    const allowed = TAG_ATTRIBUTE_NAMES[tag] ?? [];

    if (allowed.length === 0) continue;

    out[tag] = extractAllowedProps(type, allowed);
  }

  await writeFile(OUTPUT_PATH, JSON.stringify(out, null, 2), 'utf8');
  console.log(`Built ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});