import { AfterViewInit, Component, ContentChild, Input, ViewEncapsulation } from '@angular/core';

import { RockInputControl } from './input.control';
import { RockInputErrorControl } from './input-error.control';

@Component({
    selector: 'rock-input, [rock-input]',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class RockInputComponent implements AfterViewInit {

    @ContentChild(RockInputControl)
    private input: RockInputControl;

    @ContentChild(RockInputErrorControl)
    private errorText: RockInputErrorControl;

    @Input()
    public label: string;

    @Input()
    set name(value: string) { }
    get name(): string {
        return this.input.id;
    }

    ngAfterViewInit(): void {
        if (!this.input) {
            return;
        }

        this.input.ngControl.statusChanges.subscribe((state) => {
            if (state === 'INVALID') {
                this.errorText.triggerError(this.input.ngControl.errors);
            } else {
                this.errorText.setValid();
            }
        });
    }
}
