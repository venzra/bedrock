import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
    RockAlertModule,
    RockButtonModule,
    RockCardModule,
    RockExpansionModule,
    RockInputModule,
    RockMarkdownModule,
} from '@bedrock';

import { CodeModule } from '../../components/code/code.module';

import { ComponentsComponent } from './components.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        AlertComponent,
        ButtonComponent,
        CardComponent,
        ExpansionComponent,
        InputComponent,
        LandingComponent,
    ],
    imports: [
        ComponentsRoutingModule,
        ReactiveFormsModule,
        CodeModule,
        RockAlertModule,
        RockButtonModule,
        RockCardModule,
        RockExpansionModule,
        RockInputModule,
        RockMarkdownModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
