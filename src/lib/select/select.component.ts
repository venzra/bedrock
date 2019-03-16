import {
    AfterViewInit,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChildren,
    EventEmitter,
    forwardRef,
    HostListener,
    Input,
    Output,
    QueryList,
    ViewEncapsulation,
} from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';

import { Option } from './option';

import { RockOptionDirective } from './option.directive';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

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
export class RockSelectComponent implements AfterViewInit, ControlValueAccessor {

    public isOpen = false;
    public isDisabled = false;
    public selection: Option;

    private value: string;
    private hasChange: (value: any) => void = () => {};
    private isTouched = () => {};

    @Input()
    public placeholder = 'Please choose an option';

    @Output()
    public change: EventEmitter<Option> = new EventEmitter();

    @ContentChildren(RockOptionDirective)
    public options: QueryList<RockOptionDirective>;

    @HostListener('click')
    public toggleOpen() {
        if (!this.isDisabled) {
            this.isOpen = !this.isOpen;
        } else {
            this.isOpen = false;
        }
    }

    constructor(
        private changeDetection: ChangeDetectorRef,
    ) { }

    public ngAfterViewInit(): void {
        const optionList = this.options.toArray();
        if (this.value && optionList.length) {
            this.selection = optionList.find((option) => option.value === this.value);
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
        this.change.emit(this.selection);
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

}
