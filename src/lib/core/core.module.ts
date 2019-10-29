import { NgModule } from '@angular/core';

import { RockInputDirective } from './directives/input.directive';
import { RockOverlayDirective } from './directives/overlay.directive';
import { RockPickerDirective } from './directives/picker.directive';

@NgModule({
    declarations: [
        RockInputDirective,
        RockOverlayDirective,
        RockPickerDirective,
    ],
    exports: [
        RockInputDirective,
        RockOverlayDirective,
        RockPickerDirective,
    ],
})
export class RockCoreModule {
}
