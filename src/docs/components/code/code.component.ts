import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

import { CodeService } from './code.service';

@Component({
    selector: 'docs-code',
    templateUrl: './code.component.html',
    styleUrls: ['./code.component.scss'],
    encapsulation: ViewEncapsulation.ShadowDom,
})
export class CodeComponent implements OnInit {

    public markdownContent: string;

    @Input()
    public content: string;

    constructor(
        private codeService: CodeService,
    ) { }

    public ngOnInit(): void {
        this.codeService
            .loadAsset(`/assets/${this.content}`)
            .subscribe((content) => this.markdownContent = content);
    }

    public highlight(text, lang) {
        switch (lang) {
            case 'code':
                const lines = text.split('\n');
                const formatted = lines.map((line) => {
                    const escaped = line
                        .replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;');
                    return `<span>${escaped}</span>`;
                });
                return formatted.join('\n');
            default:
                return text;
        }
    }

}
