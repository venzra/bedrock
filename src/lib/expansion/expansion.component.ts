import { Component, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'rock-expansion, [rock-expansion]',
    templateUrl: './expansion.component.html',
    styleUrls: ['./expansion.component.scss'],
    animations: [
        trigger('arrow', [
            state('open', style({
                transform: 'rotate(90deg)'
            })),
            state('closed', style({
                transform: 'rotate(0deg)'
            })),
            transition('open <=> closed', [
                animate('200ms cubic-bezier(0.4,0.0,0.2,1)'),
            ]),
        ]),
        trigger('fade', [
            state('open', style({
                height: '*',
                visibility: 'visible',
            })),
            state('closed', style({
                height: '0px',
                visibility: 'hidden',
            })),
            transition('open => closed', [
                animate('0ms'),
            ]),
            transition('closed => open', [
                animate('250ms cubic-bezier(0.4,0.0,0.2,1)'),
            ]),
        ]),
    ],
})
export class RockExpansionComponent {

    public collapsed = true;

    @Input()
    public label: string;

    public toggle(): void {
        this.collapsed = !this.collapsed;
    }

}
