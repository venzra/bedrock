import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RockAlertBlockComponent } from './alert-block.component';
import { RockAlertMessageComponent } from './alert-message.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faExclamationTriangle,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    declarations: [
        RockAlertBlockComponent,
        RockAlertMessageComponent,
    ],
    imports: [
        CommonModule,
        FontAwesomeModule
    ],
    exports: [
        RockAlertBlockComponent,
        RockAlertMessageComponent,
    ],
})
export class RockAlertModule {
    constructor() {
        library.add(
            faExclamationTriangle,
        );
    }
}
