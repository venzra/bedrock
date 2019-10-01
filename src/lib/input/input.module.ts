import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { RockCoreModule } from '../core/core.module';

import { RockInputComponent } from './input.component';

@NgModule({
    declarations: [
        RockInputComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RockCoreModule,
    ],
    exports: [
        RockInputComponent,
    ],
})
export class RockInputModule {
}
