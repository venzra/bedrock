import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    },
    {
        path: 'components',
        loadChildren: () => import('./components/components.module').then(m => m.ComponentsModule),
    },
    {
        path: 'directives',
        loadChildren: () => import('./directives/directives.module').then(m => m.DirectivesModule),
    },
    {
        path: 'guides',
        loadChildren: () => import('./guides/guides.module').then(m => m.GuidesModule),
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
