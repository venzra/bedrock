import { Component, HostBinding, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'rock-card, [rock-card]',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class RockCardComponent {

    @HostBinding('class.link')
    @Input()
    public routerLink: string;

}
