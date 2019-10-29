import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { RockCoreModule } from '../core/core.module';

import { RockAutocompleteComponent } from './autocomplete.component';

@NgModule({
    declarations: [
        RockAutocompleteComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        ScrollingModule,
        RockCoreModule,
    ],
    exports: [
        RockAutocompleteComponent,
    ],
})
export class RockAutocompleteModule {
}
