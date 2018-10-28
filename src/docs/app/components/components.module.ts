import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockInputModule } from '@bedrock';

import { ComponentsComponent } from './components.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        InputComponent,
        LandingComponent
    ],
    imports: [
        ComponentsRoutingModule,
        ReactiveFormsModule,
        RockInputModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
