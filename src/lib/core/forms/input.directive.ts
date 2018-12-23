import { Directive, Input, Self, HostBinding, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { RockInputControl } from './input.control';

@Directive({
    selector: 'input[rockInput]',
    providers: [ { provide: RockInputControl, useExisting: RockInputDirective } ],
})
export class RockInputDirective implements RockInputControl {

    @Input()
    public id: string;

    @Input()
    @HostBinding()
    public type: string;

    @Input()
    public disabled: boolean;

    constructor(
        @Optional() @Self() public ngControl: NgControl,
    ) { }

}
