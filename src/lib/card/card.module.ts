import { NgModule } from '@angular/core';

import { RockCardComponent } from './card.component';

@NgModule({
    declarations: [
        RockCardComponent,
    ],
    exports: [
        RockCardComponent,
    ],
})
export class RockCardModule {
}
