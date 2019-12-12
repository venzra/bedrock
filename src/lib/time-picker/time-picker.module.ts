import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    far,
    faClock,
} from '@fortawesome/free-regular-svg-icons';

import { RockCoreModule } from '../core/core.module';
import { RockTimePickerComponent } from './time-picker.component';

@NgModule({
    declarations: [
        RockTimePickerComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
        FormsModule,
        RockCoreModule
    ],
    exports: [
        RockTimePickerComponent,
    ],
})
export class RockTimePickerModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(far);
        library.addIcons(
            faClock,
        );
    }
}
