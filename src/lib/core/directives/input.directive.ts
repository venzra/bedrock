import { Directive, HostListener } from '@angular/core';

import { Subject } from 'rxjs';

@Directive({
    selector: 'input[rockInput], textarea[rockInput]',
    exportAs: 'rockInput',
})
export class RockInputDirective {

    public changes: Subject<boolean> = new Subject<boolean>();

    @HostListener('blur')
    public triggerBlur(): void {
        this.changes.next(true);
    }

}
