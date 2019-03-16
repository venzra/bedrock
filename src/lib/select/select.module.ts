import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
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
    constructor() {
        library.add(
            faCaretUp,
        );
    }
}
