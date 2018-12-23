import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faSquare,
} from '@fortawesome/free-regular-svg-icons';

import {
    faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

import { RockCheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [
        RockCheckboxComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        RockCheckboxComponent,
    ],
})
export class RockCheckboxModule {
    constructor() {
        library.add(
            faSquare,
            faCheckSquare,
        );
    }
}
