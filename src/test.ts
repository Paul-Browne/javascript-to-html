import { html, head, body, title, h1, button, img, div, p } from '../dist/index.js';

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

console.log(result);