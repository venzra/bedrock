import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import hljs from 'highlight.js/lib/highlight.js';
import typescript from 'highlight.js/lib/languages/typescript.js';

@Component({
    templateUrl: './markdown.component.html',
    styleUrls: ['./markdown.component.scss'],
})
export class MarkdownComponent implements OnInit {

    public markdownContent;

    constructor(
        private http: HttpClient,
    ) { }

    public ngOnInit(): void {
        this.http
            .get('/assets/directives/markdown/markdown.md', { responseType: 'text' })
            .subscribe((content) => this.markdownContent = content);
    }

    public highlight(text: string, lang: string): string {
        hljs.registerLanguage('typescript', typescript);
        return hljs.highlight(lang || 'typescript', text).value;
    }

}
