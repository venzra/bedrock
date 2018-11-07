import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockButtonModule, RockCardModule, RockExpansionModule, RockInputModule } from '@bedrock';

import { ComponentsComponent } from './components.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        ButtonComponent,
        CardComponent,
        ExpansionComponent,
        InputComponent,
        LandingComponent,
    ],
    imports: [
        ComponentsRoutingModule,
        ReactiveFormsModule,
        RockButtonModule,
        RockCardModule,
        RockExpansionModule,
        RockInputModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
