import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ImageInputComponent } from './image-input.component';
import { ImageInputDirective } from './image-input.directive';

@NgModule({
    declarations: [
        ImageInputComponent,
        ImageInputDirective,
    ],
    imports: [
        CommonModule,
        HttpClientModule,
    ],
    exports: [
        ImageInputComponent,
        ImageInputDirective,
    ],
})
export class RockImageInputModule {
}
