import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'rock-alert-block, [rock-alert-block]',
    templateUrl: './alert-block.component.html',
    styleUrls: [ './alert-block.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class RockAlertBlockComponent {

    private severityValue: 'error' | 'warning' | 'info' | 'success' = 'warning';

    @HostBinding('class')
    @Input()
    get severity(): 'error' | 'warning' | 'info' | 'success' {
        const styleBind = [ 'rock-alert-block', this.severityValue ].filter(Boolean);
        return <any> styleBind.join(' ');
    }
    set severity(severity: 'error' | 'warning' | 'info' | 'success') {
        this.severityValue = severity;
    }

}
