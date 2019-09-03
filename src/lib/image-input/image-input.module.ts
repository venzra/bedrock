import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ImageInputComponent } from './image-input.component';

@NgModule({
    declarations: [
        ImageInputComponent,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        ImageInputComponent,
    ],
})
export class RockImageInputModule {
}
