import { animate, state, style, transition, trigger } from '@angular/animations';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
    AfterContentInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ContentChildren,
    EventEmitter,
    forwardRef,
    HostListener,
    Input,
    Output,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { Option } from './option';
import { RockOptionDirective } from './option.directive';

import { RockErrorComponent } from '../error/error.component';

@Component({
    selector: 'rock-select',
    templateUrl: './select.component.html',
    styleUrls: [ './select.component.scss' ],
    animations: [
        trigger('arrow', [
            state('open', style({
                transform: 'rotate(180deg)',
            })),
            state('closed', style({
                transform: 'rotate(0deg)',
            })),
            transition('open <=> closed', [
                animate('200ms cubic-bezier(0.4,0.0,0.2,1)'),
            ]),
        ]),
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: forwardRef(() => RockSelectComponent),
        },
    ],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RockSelectComponent implements AfterContentInit, ControlValueAccessor {

    public isOpen = false;
    public hasError = false;
    public isDisabled = false;
    public isRequired = false;
    public selection: Option;

    @ContentChild(RockErrorComponent, { static: false })
    private error: RockErrorComponent;

    @ContentChildren(RockOptionDirective)
    public options: QueryList<RockOptionDirective>;

    @Input()
    public label: string;

    @Input()
    public placeholder = 'Please choose an option';

    @Input()
    set required(required: boolean) {
        this.isRequired = coerceBooleanProperty(required);
    }
    get required(): boolean {
        return true;
    }

    @Output()
    public selectionChange: EventEmitter<Option> = new EventEmitter();

    private value: string;
    private hasChange: (value: any) => void = () => {};
    private isTouched = () => {};

    constructor(
        private changeDetection: ChangeDetectorRef,
    ) { }

    public ngAfterContentInit(): void {
        const optionList = this.options.toArray();
        if (this.value && optionList.length) {
            this.selection = optionList.find((option) => option.value === this.value);
        }

        if (this.error) {
            this.error.changes.subscribe((change) => this.hasError = !!change);
        }

        this.changeDetection.detectChanges();
    }

    public isSelected(option: Option): boolean {
        if (this.selection) {
            return this.selection.id === option.id;
        }
        return false;
    }

    public getSelection(): string {
        if (this.selection) {
            return this.selection.getContent();
        }
        return this.placeholder;
    }

    public changeSelection(choice: Option): void {
        this.selection = choice;
        this.hasChange(this.selection.value);
        this.isTouched();
        this.selectionChange.emit(this.selection);
        this.changeDetection.markForCheck();
    }

    public registerOnChange(fn: (value: any) => void): void {
        this.hasChange = fn;
    }

    public registerOnTouched(fn: () => {}): void {
        this.isTouched = fn;
    }

    public setDisabledState(isDisabled: boolean): void {
        this.isDisabled = isDisabled;
    }

    public writeValue(value: string): void {
        if (value) {
            this.value = value;
        }
    }

    @HostListener('click')
    public toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                this.isTouched();
            }
        } else {
            this.isOpen = false;
        }

        if (!this.isOpen) {
            this.isTouched();
        }
    }

}
