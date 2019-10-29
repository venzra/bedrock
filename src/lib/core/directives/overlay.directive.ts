import { Directive, HostListener } from '@angular/core';

import { Subject } from 'rxjs';

@Directive({
    selector: '[rockOverlay]',
    exportAs: 'rockOverlay',
})
export class RockOverlayDirective {

    public triggerClose: Subject<void> = new Subject<void>();

    @HostListener('click')
    @HostListener('document:keyup.escape')
    public closeOverlay(): void {
        this.triggerClose.next();
    }

}
