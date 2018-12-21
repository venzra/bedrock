import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';

import { HomeRoutingModule } from './home-routing.module';
import { CodeModule } from '../../components/code/code.module';

@NgModule({
    declarations: [
        HomeComponent,
    ],
    imports: [
        HomeRoutingModule,
        CodeModule,
    ],
})
export class HomeModule {
}
