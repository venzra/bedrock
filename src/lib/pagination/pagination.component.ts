import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';

import { PaginationEvent } from './pagination-event';

@Component({
    selector: 'rock-pagination',
    templateUrl: './pagination.component.html',
    styleUrls: [ './pagination.component.scss' ],
})
export class RockPaginationComponent implements AfterViewInit {

    public pageCount: number;

    @Input()
    public records: number;

    @Input()
    public skip: number;

    @Input()
    public limit = 20;

    @Input()
    public choices = 5;

    @Input()
    public size: 'small' | 'normal' | 'large' = 'normal';

    @Input()
    public controls = true;

    @Input()
    public icons = true;

    @Output()
    private change: EventEmitter<PaginationEvent> = new EventEmitter();

    public ngAfterViewInit(): void {
        this.pageCount = Math.ceil(this.records / this.limit);
    }

    public currentPage() {
        return Math.floor(this.skip / this.limit) + 1;
    }

    public changePage(page) {
        if (page >= 1 && page <= this.pageCount && page !== this.currentPage()) {
            const event: PaginationEvent = {
                skip: this.skip,
                limit: this.limit,
                currentPage: this.currentPage(),
                totalRecords: this.records,
                selectedPage: page,
                selectedSkip: (page - 1) * this.limit,
            };
            this.change.emit(event);
        }
    }

    public pages(): Array<number> {
        let pageList = [];

        const currentPage = this.currentPage();

        let start = Math.ceil(currentPage - (this.choices / 2));

        if (start <= 0) {
            start = 1;
        }

        const end = start + this.choices > this.pageCount ? this.pageCount : start + this.choices;

        for (let i = 0; i < this.choices; i++) {
            if (start + i <= end) {
                pageList = [ ...pageList, start + i ];
            }
        }

        while (pageList.length < this.choices && pageList[ 0 ] > 1) {
            pageList = [ pageList[ 0 ] - 1, ...pageList ];
        }

        return pageList;
    }

}
