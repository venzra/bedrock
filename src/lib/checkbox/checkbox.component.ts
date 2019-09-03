import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    forwardRef,
    HostListener,
    Input,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { coerceBooleanProperty } from '@angular/cdk/coercion';

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
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockCheckboxComponent),
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockCheckboxComponent implements AfterContentInit, ControlValueAccessor {

    public isChecked = false;
    public isDisabled = false;

    @Input()
    public label: string;

    private hasChange: (value: boolean) => void = () => {};
    private isTouched = () => {};

    set value(value: boolean) {
        this.isChecked = value;
        this.hasChange(this.isChecked);
        this.isTouched();
        this.changeDetection.markForCheck();
    }
    get value(): boolean {
        return this.isChecked;
    }

    constructor(
        private changeDetection: ChangeDetectorRef,
    ) { }

    public ngAfterContentInit(): void {
        this.changeDetection.detectChanges();
    }

    public registerOnChange(fn: (value: boolean) => void): void {
        this.hasChange = fn;
        this.hasChange(this.isChecked);
        this.changeDetection.markForCheck();
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: boolean): void {
        this.isChecked = coerceBooleanProperty(value);
    }

    @HostListener('click')
    public toggle(): void {
        if (!this.isDisabled) {
            this.value = !this.value;
        }
    }

}
