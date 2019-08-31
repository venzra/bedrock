import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fas,
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
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
        library.addIcons(
            faAngleDoubleLeft,
            faAngleDoubleRight,
            faAngleLeft,
            faAngleRight,
        );
    }
}
