import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
    selector: '[rockMarkdown]',
    exportAs: 'markdown'
})
export class RockMarkdownDirective implements OnChanges {

    private $original: string;

    private marked = (<any> window).marked;

    @Input() rockMarkdown: string;

    @Input() headers: 'none' | 'simple' | 'full' = 'full';

    constructor(
        protected element: ElementRef
    ) { }

    ngOnChanges(): void {
        this.marked.setOptions({
            gfm: true,
            sanitize: true
        });

        if (!this.$original) {
            this.$original = this.element.nativeElement.innerHTML;
        }

        if (this.rockMarkdown) {
            this.element.nativeElement.innerHTML = this.marked(this.rockMarkdown, { renderer: this.bedrockRender() });
        } else {
            this.element.nativeElement.innerHTML = this.$original;
        }
    }

    bedrockRender() {
        const renderer = new this.marked.Renderer();

        switch (this.headers) {
            case 'none':
                renderer.heading = (text) => `<p>${text}</p>`;
                break;
            case 'simple':
                renderer.heading = (text) => `<h3>${text}</h3>`;
        }

        renderer.link = (href, title, text) => {
            return `<a href="${href}" target="_blank" ${title ? `title="${title}"` : ''}>${text}</a>`;
        };

        return renderer;
    }

}
