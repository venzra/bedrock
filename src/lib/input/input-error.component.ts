import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { RockInputErrorControl } from './input-error.control';

@Component({
    selector: 'rock-input-error',
    templateUrl: './input-error.component.html',
    styleUrls: [ './input-error.component.scss' ],
    providers: [ { provide: RockInputErrorControl, useExisting: RockInputErrorComponent } ],
    animations: [
        trigger('transitionMessage', [
            state('enter', style({
                opacity: 1,
                transform: 'translateY(0%)',
            })),
            state('hidden', style({
                opacity: 0,
                transform: 'translateY(-30%)',
            })),
            transition('hidden => enter', [
                animate('300ms'),
            ]),
        ]),
    ],
})
export class RockInputErrorComponent implements RockInputErrorControl {

    public error: { [key: string]: boolean } = { valid: true };

    public triggerError(error: { [key: string]: boolean }): void {
        this.error = error;
    }

    public setValid(): void {
        this.error = { valid: true };
    }

}
