import { NgModule } from '@angular/core';

import { RockInputDirective } from './directives/input.directive';
import { RockPickerDirective } from './directives/picker.directive';

@NgModule({
    declarations: [
        RockInputDirective,
        RockPickerDirective,
    ],
    exports: [
        RockInputDirective,
        RockPickerDirective,
    ],
})
export class RockCoreModule {
}
