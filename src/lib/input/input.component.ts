import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { AfterContentInit, Component, ContentChild, forwardRef, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { RockErrorComponent } from '../error/error.component';

let uniqueId = 0;

@Component({
    selector: 'rock-input',
    templateUrl: './input.component.html',
    styleUrls: [ './input.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockInputComponent),
        },
    ],
    encapsulation: ViewEncapsulation.None,
})
export class RockInputComponent implements AfterContentInit, ControlValueAccessor {

    public hasError = false;
    public isDisabled = false;
    public isRequired = false;
    public currentValue: string;

    @Input()
    public id = `rock-input-${ ++uniqueId }`;

    @Input()
    public label: string;

    @Input()
    public type: 'text' | 'textarea';

    @Input()
    public name: string;

    @Input()
    set required(required: boolean) {
        this.isRequired = coerceBooleanProperty(required);
    }
    get required(): boolean {
        return true;
    }

    @ContentChild(RockErrorComponent, { static: false })
    private error: RockErrorComponent;

    private hasChange: (value: string) => void = () => { };
    private isTouched = () => { };

    set value(value: string) {
        this.currentValue = value;
        this.hasChange(this.currentValue);
        this.isTouched();
    }

    get value(): string {
        return this.currentValue;
    }

    public ngAfterContentInit(): void {
        if (this.error) {
            this.error.changes.subscribe((change) => this.hasError = !!change);
        }
    }

    public registerOnChange(fn: (value: string) => void): void {
        this.hasChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: string): void {
        this.currentValue = value;
    }

}
