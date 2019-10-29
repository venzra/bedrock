import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    AfterContentInit,
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    forwardRef,
    HostListener,
    Input,
    OnDestroy,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { RockInputDirective } from '../core/directives/input.directive';
import { RockErrorComponent } from '../error/error.component';

let uniqueId = 0;

@Component({
    selector: 'rock-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: [ './datepicker.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockDatepickerComponent),
        },
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockDatepickerComponent implements AfterContentInit, AfterViewInit, ControlValueAccessor, OnDestroy {

    public isOpen = false;
    public hasError = false;
    public isDisabled = false;
    public isRequired = false;
    public currentValue: Date;
    public displayValue: Date;

    private minimumValue: Date;
    private maximumValue: Date;

    private destroyed = new Subject();

    @Input()
    public id = `rock-datepicker-${ ++uniqueId }`;

    @Input()
    public label: string;

    @Input()
    public name: string;

    @Input()
    set required(required: boolean) {
        this.isRequired = coerceBooleanProperty(required);
    }
    get required(): boolean {
        return true;
    }

    @Input()
    set minimum(date: Date) {
        if (!date) { return; }
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        this.minimumValue = new Date(year, month, day, 0, 0, 0);
    }
    get minimum(): Date {
        return this.minimumValue;
    }

    @Input()
    set maximum(date: Date) {
        if (!date) { return; }
        const day = date.getDate();
        const month = date.getMonth();
        const year = date.getFullYear();
        this.maximumValue = new Date(year, month, day, 0, 0, 0);
    }
    get maximum(): Date {
        return this.maximumValue;
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
        private changes: ChangeDetectorRef,
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

    public showToday(event: MouseEvent): void {
        event.stopPropagation();
        this.displayValue = new Date();
    }

    public showMonth(change: number, event: MouseEvent): void {
        event.stopPropagation();
        this.displayValue = new Date(this.displayValue.getFullYear(), this.displayValue.getMonth() + change);
    }

    public getDayOffset(): number {
        const temp = new Date(this.displayValue.getFullYear(), this.displayValue.getMonth(), 1);
        const dayOfWeek = temp.getDay() - 1;
        return dayOfWeek < 0 ? 6 : dayOfWeek;
    }

    public getDaysInMonth(): Array<number> {
        const temp = new Date(this.displayValue.getFullYear(), this.displayValue.getMonth() + 1, 0);
        return new Array(temp.getDate());
    }

    public outsideRange(day): boolean {
        const month = this.displayValue.getMonth();
        const year = this.displayValue.getFullYear();
        const comparisonDate = new Date(year, month, day, 0, 0, 0);

        if (this.minimum && comparisonDate < this.minimum) {
            return true;
        }

        if (this.maximum && comparisonDate > this.maximum) {
            return true;
        }

        return false;
    }

    public setSelection(change: number): void {
        this.value = new Date(this.displayValue.getFullYear(), this.displayValue.getMonth(), change);
        this.toggleOpen();
    }

    public isSelected(day: number): boolean {
        if (!this.currentValue) {
            return false;
        }
        const currentYear = this.currentValue.getFullYear() === this.displayValue.getFullYear();
        const currentMonth = this.currentValue.getMonth() === this.displayValue.getMonth();
        const currentDay = this.currentValue.getDate() === day;
        return currentYear && currentMonth && currentDay;
    }

    public isToday(day: number): boolean {
        const today = new Date();
        const currentYear = today.getFullYear() === this.displayValue.getFullYear();
        const currentMonth = today.getMonth() === this.displayValue.getMonth();
        const currentDay = today.getDate() === day;
        return currentYear && currentMonth && currentDay;
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
        this.currentValue = this.displayValue = value;

        if (!this.displayValue) {
            this.displayValue = new Date();
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
