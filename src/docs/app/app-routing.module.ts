import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule',
    },
    {
        path: 'components',
        loadChildren: './components/components.module#ComponentsModule',
    },
    {
        path: 'directives',
        loadChildren: './directives/directives.module#DirectivesModule',
    },
    {
        path: 'guides',
        loadChildren: './guides/guides.module#GuidesModule',
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})
export class AppRoutingModule {
}
