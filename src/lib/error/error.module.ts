import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RockErrorComponent } from './error.component';

@NgModule({
    declarations: [
        RockErrorComponent,
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        RockErrorComponent,
    ],
})
export class RockErrorModule {
}
