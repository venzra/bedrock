import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, Input, HostBinding, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'rock-button, button[rock-button], button[rock-raised-button], button[rock-stroked-button]',
    templateUrl: './button.component.html',
    styleUrls: [ './button.component.scss' ],
    encapsulation: ViewEncapsulation.None,
})
export class RockButtonComponent {

    private $disabled = false;

    @HostBinding('class.rock-button')
    true;

    @HostBinding('attr.disabled')
    @Input()
    set disabled(value: string) {
        this.$disabled = coerceBooleanProperty(value);
    }
    get disabled(): string | null {
        return this.$disabled ? 'disabled' : null;
    }

}
