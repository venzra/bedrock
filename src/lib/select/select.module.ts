import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fas,
    faCaretUp,
} from '@fortawesome/free-solid-svg-icons';

import { RockSelectComponent } from './select.component';
import { RockOptionDirective } from './option.directive';

@NgModule({
    declarations: [
        RockSelectComponent,
        RockOptionDirective,
    ],
    imports: [
        CommonModule,
        ScrollingModule,
        FontAwesomeModule,
    ],
    exports: [
        RockSelectComponent,
        RockOptionDirective,
    ],
})
export class RockSelectModule {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
        library.addIcons(
            faCaretUp,
        );
    }
}
