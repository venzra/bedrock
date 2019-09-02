import {
    AfterContentInit,
    Component,
    ContentChild,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { RockInputControl } from '../core/forms/input.control';
import { RockInputErrorControl } from './input-error.control';

@Component({
    selector: 'rock-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class RockInputComponent implements AfterContentInit {

    public isDisabled = false;

    @ContentChild(RockInputControl, { static: false })
    private input: RockInputControl;

    @ContentChild(RockInputErrorControl, { static: false })
    private errorText: RockInputErrorControl;

    @Input()
    public label: string;

    @Input()
    set name(value: string) { }
    get name(): string {
        return this.input.id;
    }

    ngAfterContentInit(): void {
        if (!this.input || !this.input.ngControl) {
            return;
        }

        this.isDisabled = coerceBooleanProperty(this.input.ngControl.disabled);

        this.input.ngControl.statusChanges.subscribe((state) => {
            if (!this.errorText) {
                return;
            }

            if (state === 'INVALID') {
                this.errorText.triggerError(this.input.ngControl.errors);
            } else {
                this.errorText.setValid();
            }
        });
    }

}
