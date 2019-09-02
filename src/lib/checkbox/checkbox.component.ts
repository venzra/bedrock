import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    HostListener,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

import { RockInputControl } from '../core/forms/input.control';

@Component({
    selector: 'rock-checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: [ './checkbox.component.scss' ],
    animations: [
        trigger('check', [
            state('on', style({
                transform: 'scale(1)',
                opacity: '1',
            })),
            state('off', style({
                transform: 'scale(0)',
                opacity: '0',
            })),
            transition('off => on, on => off', [
                animate('100ms linear'),
            ]),
        ]),
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockCheckboxComponent implements AfterViewInit {

    public isChecked = false;
    public isDisabled = false;

    @ContentChild(RockInputControl, { static: false })
    private input: RockInputControl;

    constructor(
        private changeDetector: ChangeDetectorRef,
    ) { }

    public ngAfterViewInit(): void {
        if (this.input && this.input.ngControl) {
            this.isDisabled = coerceBooleanProperty(this.input.ngControl.disabled);
            this.isChecked = coerceBooleanProperty(this.input.ngControl.value);

            this.input.ngControl.valueChanges.subscribe((value) => {
                this.isChecked = coerceBooleanProperty(value);
                this.changeDetector.detectChanges();
            });
        }
        this.changeDetector.detectChanges();
    }

    @HostListener('click')
    public toggle(): void {
        if (!this.isDisabled) {
            this.isChecked = !this.isChecked;
            this.input.ngControl.reset(this.isChecked);
        }
    }

}
