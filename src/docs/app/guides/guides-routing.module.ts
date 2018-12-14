import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuidesComponent } from './guides.component';
import { LandingComponent } from './landing.component';

import { GettingStartedComponent } from './getting-started/getting-started.component';
import { IconsComponent } from './icons/icons.component';

const routes: Routes = [
    {
        path: '',
        component: GuidesComponent,
        children: [
            {
                path: 'getting-started',
                component: GettingStartedComponent,
            },
            {
                path: 'icons',
                component: IconsComponent,
            },
            {
                path: '',
                component: LandingComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GuidesRoutingModule {
}
