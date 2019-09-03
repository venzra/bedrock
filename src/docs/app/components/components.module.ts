import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    RockAlertModule,
    RockButtonModule,
    RockCardModule,
    RockCheckboxModule,
    RockErrorModule,
    RockExpansionModule,
    RockInputModule,
    RockImageInputModule,
    RockMarkdownModule,
    RockPaginationModule,
    RockSelectModule,
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
import { PaginationComponent } from './pagination/pagination.component';
import { SelectComponent } from './select/select.component';

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
        PaginationComponent,
        SelectComponent,
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
        RockErrorModule,
        RockExpansionModule,
        RockImageInputModule,
        RockInputModule,
        RockMarkdownModule,
        RockPaginationModule,
        RockSelectModule,
    ],
    exports: [
        ComponentsComponent,
    ],
})
export class ComponentsModule {
}
