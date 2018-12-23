import {
    AfterViewInit,
    ChangeDetectionStrategy, ChangeDetectorRef,
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
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockInputComponent implements AfterViewInit {

    public isDisabled = false;

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

    constructor(
        private changeDetector: ChangeDetectorRef,
    ) { }

    ngAfterViewInit(): void {
        this.isDisabled = coerceBooleanProperty(this.input.ngControl.disabled);
        this.changeDetector.detectChanges();

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
