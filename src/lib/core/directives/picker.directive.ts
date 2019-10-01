import { Directive, HostListener } from '@angular/core';

@Directive({
    selector: '[rockPicker]',
    exportAs: 'rockPicker',
})
export class RockPickerDirective {

    @HostListener('click', [ '$event' ])
    public preventClose(event: MouseEvent): void {
        event.preventDefault();
        event.stopPropagation();
    }

}
