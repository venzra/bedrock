import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components.component';
import { LandingComponent } from './landing.component';

import { InputComponent } from './input/input.component';

const routes: Routes = [{
    path: '',
    component: ComponentsComponent,
    children: [
        {
            path: 'input',
            component: InputComponent,
        },
        {
            path: '',
            component: LandingComponent,
        },
    ],
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ComponentsRoutingModule {
}
