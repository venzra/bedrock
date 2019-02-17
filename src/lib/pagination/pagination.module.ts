import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';

import {
    faAngleDoubleLeft,
    faAngleDoubleRight,
    faAngleLeft,
    faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

import { RockPaginationComponent } from './pagination.component';

@NgModule({
    declarations: [
        RockPaginationComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        RockPaginationComponent,
    ],
})
export class RockPaginationModule {
    constructor() {
        library.add(
            faAngleDoubleLeft,
            faAngleDoubleRight,
            faAngleLeft,
            faAngleRight,
        );
    }
}
