import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { LandingComponent } from './landing.component';

import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { InputComponent } from './input/input.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {
                path: 'button',
                component: ButtonComponent,
            },
            {
                path: 'card',
                component: CardComponent,
            },
            {
                path: 'expansion',
                component: ExpansionComponent,
            },
            {
                path: 'input',
                component: InputComponent,
            },
            {
                path: '',
                component: LandingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ],
})
export class ComponentsRoutingModule {
}
