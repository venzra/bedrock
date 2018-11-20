import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'rock-alert-message, [rock-alert-message]',
    templateUrl: './alert-message.component.html',
    styleUrls: [ './alert-message.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class RockAlertMessageComponent {

    private severityValue: 'error' | 'warning' = 'warning';

    public icon: string | null;

    @HostBinding('class')
    @Input()
    get severity(): 'error' | 'warning' {
        const styleBind = [ 'rock-alert-message', this.severityValue ].filter(Boolean);
        this.icon = this.severityValue;
        return <any> styleBind.join(' ');
    }
    set severity(severity: 'error' | 'warning') {
        this.severityValue = severity;
    }

}
