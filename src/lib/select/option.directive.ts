import { Directive, ElementRef, Input } from '@angular/core';

let uniqueId = 0;

@Directive({
    selector: '[rockOption]',
})
export class RockOptionDirective {

    @Input()
    public id = `rock-option-${++uniqueId}`;

    @Input()
    public value: any;

    constructor(
        private element: ElementRef<HTMLElement>,
    ) { }

    public getContent(): string {
        return (this.element.nativeElement.textContent || '').trim();
    }

}
