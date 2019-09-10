import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RockInputComponent } from './input.component';
import { RockInputDirective } from './input.directive';

@NgModule({
    declarations: [
        RockInputComponent,
        RockInputDirective,
    ],
    imports: [
        CommonModule,
        FormsModule,
    ],
    exports: [
        RockInputComponent,
    ],
})
export class RockInputModule {
}
