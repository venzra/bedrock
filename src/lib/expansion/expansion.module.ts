import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RockExpansionComponent } from './expansion.component';
import { RockExpansionPanelComponent } from './expansion-panel.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faCaretRight,
    faChevronDown,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        RockExpansionComponent,
        RockExpansionPanelComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule,
    ],
    exports: [
        RockExpansionComponent,
        RockExpansionPanelComponent,
    ],
})
export class RockExpansionModule {
    constructor() {
        library.add(
            faCaretRight,
            faChevronDown,
        );
    }
}
