import { Directive, Input, Self, Optional } from '@angular/core';
import { NgControl } from '@angular/forms';

import { RockInputControl } from './input.control';

@Directive({
    selector: 'textarea[rockInput]',
    providers: [{ provide: RockInputControl, useExisting: RockTextAreaDirective }]
})
export class RockTextAreaDirective implements RockInputControl {

    @Input()
    public id: string;

    @Input()
    public required: boolean;

    constructor(
        @Optional() @Self() public ngControl: NgControl
    ) { }

}
