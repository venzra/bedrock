import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RockInputDirective } from '../core/forms/input.directive';
import { RockTextAreaDirective } from '../core/forms/textarea.directive';
import { RockInputComponent } from './input.component';
import { RockInputErrorComponent } from './input-error.component';

@NgModule({
    declarations: [
        RockInputComponent,
        RockInputDirective,
        RockInputErrorComponent,
        RockTextAreaDirective,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RockInputComponent,
        RockInputDirective,
        RockInputErrorComponent,
        RockTextAreaDirective,
    ],
})
export class RockInputModule {
}
