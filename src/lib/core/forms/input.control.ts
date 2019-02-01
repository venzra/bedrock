import { NgControl } from '@angular/forms';

export abstract class RockInputControl {

    public type?: string;

    readonly id: string;

    readonly ngControl?: NgControl;
}
