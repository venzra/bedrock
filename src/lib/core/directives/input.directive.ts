import { Directive, ElementRef, HostListener } from '@angular/core';

import { Subject } from 'rxjs';

@Directive({
    selector: 'input[rockInput], textarea[rockInput]',
    exportAs: 'rockInput',
})
export class RockInputDirective {

    public changes: Subject<void> = new Subject<void>();

    public hasFocus: Subject<void> = new Subject<void>();

    constructor(
        private element: ElementRef
    ) { }

    public clearFocus(): void {
        this.element.nativeElement.blur();
    }

    @HostListener('blur')
    public triggerBlur(): void {
        this.changes.next();
    }

    @HostListener('focus')
    public setFocus(): void {
        this.hasFocus.next();
    }

}
