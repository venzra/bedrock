import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterContentInit, Component, Input, OnDestroy } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
    selector: 'rock-error',
    templateUrl: './error.component.html',
    styleUrls: [ './error.component.scss' ],
    animations: [
        trigger('transitionMessage', [
            state('enter', style({
                opacity: 1,
                transform: 'translateY(0%)',
            })),
            state('hidden', style({
                opacity: 0,
                transform: 'translateY(-30%)',
            })),
            transition('hidden => enter', [
                animate('300ms'),
            ]),
        ]),
    ],
})
export class RockErrorComponent implements AfterContentInit, OnDestroy {

    public changes: ReplaySubject<{ [ key: string ]: boolean }> = new ReplaySubject<{ [ key: string ]: boolean }>(1);

    private destroyed = new Subject();

    @Input()
    public control: AbstractControl;

    public ngAfterContentInit(): void {
        console.log(this.control);
        this.control.valueChanges
            .pipe(takeUntil(this.destroyed))
            .subscribe(() => this.changes.next(this.control.errors));
    }

    public ngOnDestroy(): void {
        this.destroyed.next();
        this.destroyed.complete();
    }

}
