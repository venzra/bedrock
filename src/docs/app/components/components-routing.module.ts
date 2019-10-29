import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { LandingComponent } from './landing.component';

import { AlertComponent } from './alert/alert.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ImageComponent } from './image/image.component';
import { InputComponent } from './input/input.component';
import { PaginationComponent } from './pagination/pagination.component';
import { SelectComponent } from './select/select.component';

const routes: Routes = [
    {
        path: '',
        component: ComponentsComponent,
        children: [
            {
                path: 'alert',
                component: AlertComponent,
            },
            {
                path: 'autocomplete',
                component: AutocompleteComponent,
            },
            {
                path: 'button',
                component: ButtonComponent,
            },
            {
                path: 'card',
                component: CardComponent,
            },
            {
                path: 'checkbox',
                component: CheckboxComponent,
            },
            {
                path: 'datepicker',
                component: DatepickerComponent,
            },
            {
                path: 'expansion',
                component: ExpansionComponent,
            },
            {
                path: 'image',
                component: ImageComponent,
            },
            {
                path: 'input',
                component: InputComponent,
            },
            {
                path: 'pagination',
                component: PaginationComponent,
            },
            {
                path: 'select',
                component: SelectComponent,
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
