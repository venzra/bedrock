import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockButtonModule, RockInputModule } from '@bedrock';

import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        ButtonComponent,
        InputComponent,
        LandingComponent
    ],
    imports: [
        ComponentsRoutingModule,
        ReactiveFormsModule,
        RockButtonModule,
        RockInputModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
