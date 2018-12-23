import { NgControl } from '@angular/forms';

export abstract class RockInputControl {

    public type?: string;

    public disabled: boolean;

    readonly id: string;

    readonly ngControl?: NgControl;
}
