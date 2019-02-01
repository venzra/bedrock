import { Directive, ElementRef, EventEmitter, HostBinding, Input, OnInit, Output, Self } from '@angular/core';
import { NgControl } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { RockInputControl } from '../core/forms/input.control';

let uniqueId = 0;

@Directive({
    selector: '[rockImage]',
    providers: [ { provide: RockInputControl, useExisting: ImageInputDirective } ],
})
export class ImageInputDirective implements OnInit, RockInputControl {

    protected isRequired: boolean;

    @Input()
    public id = `rock-image-${++uniqueId}`;

    @Input()
    get required() {
        return this.isRequired;
    }
    set required(value: any) {
        this.isRequired = coerceBooleanProperty(value);
    }

    @HostBinding()
    public accept = 'image/*';

    @Output()
    public event: EventEmitter<any>;

    constructor(
        protected element: ElementRef,
        @Self() public ngControl: NgControl,
    ) { }

    public ngOnInit(): void {
        this.element.nativeElement.style.display = 'none';
    }

}
