# javascript-to-html

A library for easily creating HTML in JavaScript. Best used with the [vite plugin html pages](https://www.npmjs.com/package/vite-plugin-html-pages)

```bash
npm install javascript-to-html
```

[DOCS](https://ht.js.org)

```js
import { html, head, meta, link, title, body, h1, p, a, img, button } from "javascript-to-html"

export default () => html({ lang: "en" },
    head(
        meta({ charset: "UTF-8" }),
        meta({ name: "viewport", content: "width=device-width, initial-scale=1.0" }),
        title("Hello World"),
        link({ rel: "stylesheet", href: "style.css" })
    ),
    body(
        h1("Hello World"),
        p("This is a paragraph ",
            a({ href: "https://google.com" }, "Google")
        ),       
        img({
            src: "https://via.placeholder.com/150",
            alt: "Placeholder Image"
        }),
        button({ 
                onclick: "console.log('you clicked me!')"
            },
            "click me!!"
        )
    )
)
```

Becomes

```html
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Hello World</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <h1>Hello World</h1>
        <p>This is a paragraph <a href="https://google.com">Google</a></p>
        <img src="https://via.placeholder.com/150" alt="Placeholder Image">
        <button onclick="console.log('you clicked me!')">click me!!</button>
    </body>
</html>
```
