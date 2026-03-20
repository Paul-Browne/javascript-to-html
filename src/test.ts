import { html, head, body, title, h1, button, img } from '../dist/index.js';

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
console.log(result);