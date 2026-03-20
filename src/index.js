import { VOID_TAGS, TAG_NAMES } from './tags.js';

const normalizeArgs = args => {
    const content = [];
    let attributes = {};

    for (const arg of args) {
        if (arg != null && typeof arg === 'object' && !Array.isArray(arg)) {
            attributes = { ...attributes, ...arg };
        } else {
            content.push(arg)
        }
    }

    return [content, attributes];
}

const renderAttributes = attributes => Object.keys(attributes).map(key => {
    const value = attributes[key];

    if (typeof value === 'boolean') {
        return value ? ` ${key}` : '';
    }

    return ` ${key}="${String(value).replace(/"/g, '&#34;')}"`;

}).join('');

const createTag = tagName => {
    if (tagName === 'fragment') {
        return (...args) => normalizeArgs(args)[0].join('');
    }

    return (...args) => {
        const [content, attributes] = normalizeArgs(args);
        const attrs = renderAttributes(attributes);
        return `<${tagName}${attrs}>${VOID_TAGS.includes(tagName) ? '' : `${content.join('')}</${tagName}>`}`;

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
    fragment
] = TAG_NAMES.map(createTag);