import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectivesComponent } from './directives.component';
import { LandingComponent } from './landing.component';

import { MarkdownComponent } from './markdown/markdown.component';

const routes: Routes = [
    {
        path: '',
        component: DirectivesComponent,
        children: [
            {
                path: 'markdown',
                component: MarkdownComponent,
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
export class DirectivesRoutingModule {
}
