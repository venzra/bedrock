import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    AfterContentInit,
    AfterViewInit,
    Component,
    ContentChild,
    forwardRef,
    Input,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Observable, Subject } from 'rxjs';
import { debounceTime, delay, mergeMap, takeUntil, tap } from 'rxjs/operators';

import { RockInputDirective } from '../core/directives/input.directive';
import { RockOverlayDirective } from '../core/directives/overlay.directive';
import { RockErrorComponent } from '../error/error.component';
import { RockAutocompleteList } from './autocomplete-list';
import { RockAutocompleteValue } from './autocomplete-value';

let uniqueId = 0;

@Component({
    selector: 'rock-autocomplete',
    templateUrl: './autocomplete.component.html',
    styleUrls: [ './autocomplete.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockAutocompleteComponent),
        },
    ],
})
export class RockAutocompleteComponent implements OnInit, AfterContentInit, AfterViewInit, ControlValueAccessor, OnDestroy {

    public isOpen = false;
    public hasError = false;
    public isDisabled = false;
    public isRequired = false;
    public displayValue: string;
    public options: Array<RockAutocompleteList> = [];

    private inputListener: Subject<string> = new Subject<string>();
    private destroyed: Subject<boolean> = new Subject<boolean>();

    @Input()
    public id = `rock-autocomplete-${ ++uniqueId }`;

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
    private search: (searchValue: string) => Observable<Array<RockAutocompleteList>>;

    @Input()
    private selection: (placeId: string) => Observable<RockAutocompleteValue>;

    @ContentChild(RockErrorComponent, { static: false })
    private error: RockErrorComponent;

    @ViewChild(RockOverlayDirective, { static: false })
    private overlay: RockOverlayDirective;

    @ViewChild(RockInputDirective, { static: false })
    private input: RockInputDirective;

    private hasChange: (value: any) => void = () => {};
    private isTouched = () => {};

    public ngOnInit(): void {
        let text = '';
        this.inputListener
            .pipe(
                takeUntil(this.destroyed),
                debounceTime(500),
                tap((value) => text = value),
                mergeMap((value) => this.search(value)),
                tap(() => this.isOpen = text.length > 0),
            )
            .subscribe((res) => this.options = res);
    }

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

        this.input.hasFocus
            .pipe(
                takeUntil(this.destroyed)
            )
            .subscribe(() => this.isOpen = this.options.length > 0);

        this.overlay.triggerClose
            .pipe(
                takeUntil(this.destroyed),
                tap(() => this.input.clearFocus()),
            )
            .subscribe(() => this.isOpen = false);
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

    public loadOptions(value: string): void {
        this.inputListener.next(value);
    }

    public changeSelection(option: RockAutocompleteList): void {
        const hasDisabled: boolean = this.isDisabled;

        this.selection(option.id)
            .pipe(
                tap(() => {
                    this.displayValue = '';
                    this.isDisabled = true;
                }),
                delay(10),
                tap((result) => {
                    this.displayValue = result.display;
                    this.isDisabled = hasDisabled;
                }),
            )
            .subscribe((result) => {
                this.isOpen = false;
                this.options = [];
                this.hasChange(result.value);
            });
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

    public writeValue(value: RockAutocompleteValue): void {
        if (value) {
            this.displayValue = value.display;
        }
    }

}
