import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DatePipe } from '@angular/common';
import {
    AfterContentInit, AfterViewInit,
    Component,
    ContentChild,
    forwardRef,
    HostListener,
    Input, OnDestroy,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RockErrorComponent } from '../error/error.component';
import { RockInputDirective } from '../core/directives/input.directive';

let uniqueId = 0;

@Component({
    selector: 'rock-time-picker',
    templateUrl: './time-picker.component.html',
    styleUrls: [ './time-picker.component.scss' ],
    providers: [
        DatePipe,
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockTimePickerComponent),
        },
    ],
})
export class RockTimePickerComponent implements AfterContentInit, AfterViewInit, ControlValueAccessor, OnDestroy {

    public cycle: 'am' | 'pm' = 'am';
    public isOpen = false;
    public hasError = false;
    public isDisabled = false;
    public isRequired = false;
    public currentValue: Date;
    public displayValue: Date = new Date();

    private destroyed = new Subject();

    @Input()
    public id = `rock-time-picker-${ ++uniqueId }`;

    @Input()
    public label: string;

    @Input()
    public name: string;

    @Input()
    set init(time: Date) {
        this.displayValue = new Date(1970, 1, 1, time.getHours(), time.getMinutes(), 0, 0);
    }
    get init(): Date {
        return this.displayValue;
    }

    get hourRange(): Array<number> {
        const period = this.datePipe.transform(this.displayValue, 'a').toLowerCase();
        if (period === 'am') {
            return [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];
        } else {
            return [ 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23 ];
        }
    }

    @Input()
    set required(required: boolean) {
        this.isRequired = coerceBooleanProperty(required);
    }
    get required(): boolean {
        return true;
    }

    set value(value: Date) {
        this.currentValue = value;
        this.hasChange(this.currentValue);
        this.isTouched();
    }
    get value(): Date {
        return this.currentValue;
    }

    @ContentChild(RockErrorComponent, { static: false })
    private error: RockErrorComponent;

    @ViewChild(RockInputDirective, { static: false })
    private input: RockInputDirective;

    private hasChange: (value: Date) => void = () => { };
    private isTouched = () => { };

    constructor(
        private datePipe: DatePipe,
    ) { }

    public ngAfterContentInit(): void {
        if (this.error) {
            this.hasError = !!this.error.control.errors;
            this.error.changes
                .pipe(takeUntil(this.destroyed))
                .subscribe((change) => this.hasError = !!change);
        }
    }

    public ngAfterViewInit(): void {
        this.input.changes
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => this.isTouched());
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public changePeriod(cycle: 'am' | 'pm'): void {
        this.cycle = cycle;
        let hours = this.displayValue.getHours();

        if (cycle === 'am' && hours >= 12) {
            hours -= 12;
        } else if (cycle === 'pm' && hours < 12) {
            hours += 12;
        }

        this.value = this.displayValue = new Date(1970, 1, 1, hours, this.displayValue.getMinutes(), 0, 0);
    }

    public setHours(hours: number): void {
        this.value = this.displayValue = new Date(1970, 1, 1, hours, this.displayValue.getMinutes(), 0, 0);
    }

    public setMinutes(minutes: number): void {
        this.value = this.displayValue = new Date(1970, 1, 1, this.displayValue.getHours(), minutes, 0, 0);
    }

    public checkTime(format: string, value: string | number): boolean {
        return this.datePipe.transform(this.displayValue, format).toLowerCase() === value.toString();
    }

    public registerOnChange(fn: (value: Date) => void): void {
        this.hasChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: Date): void {
        if (!value) {
            this.displayValue = new Date(1970, 1, 1, 0, 0, 0, 0);
        } else {
            const minutes = Math.round(value.getMinutes() / 5) * 5;
            this.currentValue = this.displayValue = new Date(0, 0, 0, value.getHours(), minutes, 0, 0);
        }
    }

    @HostListener('click')
    public toggleOpen(): void {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = false;
        }

        if (this.isOpen && this.currentValue) {
            this.displayValue = this.currentValue;
        } else {
            this.isTouched();
        }
    }

}
