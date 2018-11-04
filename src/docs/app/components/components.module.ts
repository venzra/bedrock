import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockButtonModule, RockCardModule, RockInputModule } from '@bedrock';

import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        ButtonComponent,
        CardComponent,
        InputComponent,
        LandingComponent,
    ],
    imports: [
        ComponentsRoutingModule,
        ReactiveFormsModule,
        RockButtonModule,
        RockCardModule,
        RockInputModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
