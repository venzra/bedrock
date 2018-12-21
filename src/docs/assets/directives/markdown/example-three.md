Step 1. Include *highlight.js* as a dependency in your project.

```code
npm i highlight.js
```

Step 2. Create a highlight function in your component using *highlight.js*.

```code
import hljs from 'highlight.js/lib/highlight.js';

// Note: You need to import any languages you wish to be able to highlight
import typescript from 'highlight.js/lib/languages/typescript';

@Component({
    ...component config
})
export class Component {

    ...any standard component code

    /**
     * @param {string} text - contained in the code block from the markdown.
     * @param {string} lang - the language referenced by the code block
     *                        in this example we default to typescript.
     * @return {string} the formatted text content to display.
     */
    public highlight(text, lang = 'typescript'): string {
        // Register each language you have imported to make the highlighting available
        hljs.registerLanguage('typescript', typescript);
        return hljs.highlight(lang, text).value;
    }

}
```

Step 3. Setup your preferred CSS styling in your `src/styles.scss` file, available from the imported *highlight.js* library.

```code
@import '~highlight.js/styles/github.css';
```

Step 4. Use the markdown renderer and associate your highlighting function to be used.

```code
<div [rockMarkdown]="markdownContent" [highlight]="highlight"></div>
```
