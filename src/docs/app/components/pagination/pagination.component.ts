import { Component } from '@angular/core';

import { PaginationEvent } from '@bedrock';

@Component({
    templateUrl: './pagination.component.html',
})
export class PaginationComponent {

    public p1 = {
        records: 200,
        skip: 0,
    };

    public p2 = {
        records: 200,
        skip: 0,
        limit: 20,
        choices: 5,
        controls: false,
        icons: false,
    };

    public p3 = {
        records: 200,
        skip: 0,
        limit: 20,
        choices: 5,
        controls: true,
        icons: false,
    };

    public updatePage(event: PaginationEvent, paginator) {
        paginator.skip = event.selectedSkip;
    }

}
