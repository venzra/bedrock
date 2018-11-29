import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
            .get('/assets/markdown.md', { responseType: 'text' })
            .subscribe((content) => this.markdownContent = content);
    }

}
