import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RockInputComponent } from './input.component';
import { RockInputDirective } from './input.directive';
import { RockInputErrorComponent } from './input-error.component';
import { RockTextAreaDirective } from './textarea.directive';

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
