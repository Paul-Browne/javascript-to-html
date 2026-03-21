import { VOID_TAGS, TAG_NAMES } from './tags.js';
  
function normalizeArgs(args) {
    const content = [];
    let attrs = {};

    for (const arg of args) {
        if (arg != null && typeof arg === 'object' && !Array.isArray(arg)) {
            attrs = { ...attrs, ...arg };
        } else {
            content.push(arg);
        }
    }

    return { content, attrs };
}

function renderAttributes(attributes) {
    return Object.keys(attributes)
        .map((key) => {
            const value = attributes[key];

            if (typeof value === 'boolean') {
                return value ? ` ${key}` : '';
            }

            return ` ${key}="${String(value).replace(/"/g, '&#34;')}"`;
        })
        .join('');
}

function renderContent(content) {
    return content.join('');
}

function createTag(tagName) {
    if (tagName === 'fragment') {
        return (...args) => renderContent(normalizeArgs(args).content);
    }

    return (...args) => {
        const { content, attrs } = normalizeArgs(args);
        const attributes = renderAttributes(attrs);
        const inner = renderContent(content);

        if (VOID_TAGS.includes(tagName)) {
        return `<${tagName}${attributes}>`;
        }

        return `<${tagName}${attributes}>${inner}</${tagName}>`;
    };
}

export const [
    img, area, base, br, col, embed, hr, input, link, meta, param, source,
    track, wbr, a, abbr, address, article, aside, audio, b, bdi, bdo,
    blockquote, body, button, canvas, caption, cite, code, colgroup, data,
    datalist, dd, del, details, dfn, dialog, div, dl, dt, em, fieldset,
    figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, head, header,
    html, i, iframe, ins, kbd, label, legend, li, main, map, mark, menu,
    meter, nav, noscript, object, ol, optgroup, option, output, p, picture,
    pre, progress, q, rp, rt, ruby, s, samp, script, section, select, slot,
    small, span, strong, style, sub, summary, sup, table, tbody, td,
    template, textarea, tfoot, th, thead, time, title, tr, u, ul, video,
    fragment,
] = TAG_NAMES.map(createTag);