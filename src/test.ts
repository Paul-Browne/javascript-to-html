import { html, head, body, title, h1, button, img, div, p, input } from '../dist/index.js';

const result = html({
        lang: 'en',
        class: 'container'
    },
    head(
        title('Hello, world!')
    ),
    body(
        h1({ class: 'title' }, 'Hello, world!'),
        img({ src: 'https://via.placeholder.com/150', alt: 'Placeholder', width: 150, height: 150 }),
        button({ 
            onclick: `console.log("Hello, world!")`
        }, 'Click me'),
    )
);

console.log(result.length == 289 ? 'Pass' : 'Fail');
console.log(result.includes("&#34;") ? 'Pass' : 'Fail');

const arrayResult = div(
    { class: 'some-class' },
    h1('some headline'),
    [p('some paragraph'), p('another paragraph')]
);

console.log(
    arrayResult === '<div class="some-class"><h1>some headline</h1><p>some paragraph</p><p>another paragraph</p></div>'
        ? 'Pass'
        : 'Fail'
);

const nestedArrayResult = div([p('a'), [p('b'), p('c')]]);

console.log(
    nestedArrayResult === '<div><p>a</p><p>b</p><p>c</p></div>'
        ? 'Pass'
        : 'Fail'
);

// Nullish attributes are dropped, not stringified.
const check = (label, actual, expected) =>
    console.log(actual === expected ? 'Pass' : `Fail (${label}): ${actual}`);

check('undefined attr', div({ class: undefined }, 'x'), '<div>x</div>');
check('null attr', div({ class: null }, 'x'), '<div>x</div>');
check(
    'conditional attr',
    div({ class: false ? 'is-active' : undefined, id: 'a' }, 'x'),
    '<div id="a">x</div>',
);

// ...but an explicitly empty or zero value is meaningful and kept.
check('empty string attr', div({ class: '' }, 'x'), '<div class="">x</div>');
check('zero attr', div({ tabindex: 0 }, 'x'), '<div tabindex="0">x</div>');

// Booleans keep their existing behaviour: true renders bare, false is dropped.
check('true attr', input({ disabled: true }), '<input disabled>');
check('false attr', input({ disabled: false }), '<input>');

console.log(result);