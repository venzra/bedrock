import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RockInputComponent } from './input.component';

@NgModule({
    declarations: [
        RockInputComponent,
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
