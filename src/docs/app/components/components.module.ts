import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    RockAlertModule,
    RockButtonModule,
    RockCardModule,
    RockCheckboxModule,
    RockExpansionModule,
    RockInputModule,
    RockImageInputModule,
    RockMarkdownModule,
} from '@bedrock';

import { CodeModule } from '../../components/code/code.module';

import { ComponentsComponent } from './components.component';
import { AlertComponent } from './alert/alert.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { ExpansionComponent } from './expansion/expansion.component';
import { ImageComponent } from './image/image.component';
import { InputComponent } from './input/input.component';
import { LandingComponent } from './landing.component';

import { ComponentsRoutingModule } from './components-routing.module';

@NgModule({
    declarations: [
        ComponentsComponent,
        AlertComponent,
        ButtonComponent,
        CardComponent,
        CheckboxComponent,
        ExpansionComponent,
        ImageComponent,
        InputComponent,
        LandingComponent,
    ],
    imports: [
        CommonModule,
        ComponentsRoutingModule,
        ReactiveFormsModule,
        CodeModule,
        RockAlertModule,
        RockButtonModule,
        RockCardModule,
        RockCheckboxModule,
        RockExpansionModule,
        RockImageInputModule,
        RockInputModule,
        RockMarkdownModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
