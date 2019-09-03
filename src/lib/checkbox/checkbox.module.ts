import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    far,
    faSquare,
} from '@fortawesome/free-regular-svg-icons';

import {
    fas,
    faCheckSquare,
} from '@fortawesome/free-solid-svg-icons';

import { RockCheckboxComponent } from './checkbox.component';

@NgModule({
    declarations: [
        RockCheckboxComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        FontAwesomeModule,
    ],
    exports: [
        RockCheckboxComponent,
    ],
})
export class RockCheckboxModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas, far);
        library.addIcons(
            faSquare,
            faCheckSquare,
        );
    }
}
