import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fas,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import {
    far,
    faCalendarAlt,
} from '@fortawesome/free-regular-svg-icons';

import { RockCoreModule } from '../core/core.module';
import { RockDatePickerComponent } from './date-picker.component';

@NgModule({
    declarations: [
        RockDatePickerComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        RockCoreModule,
    ],
    exports: [
        RockDatePickerComponent,
    ],
})
export class RockDatePickerModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(far, fas);
        library.addIcons(
            faCalendarAlt,
            faChevronLeft,
            faChevronRight,
        );
    }
}
