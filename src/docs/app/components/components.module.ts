import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {
    RockAlertModule,
    RockAutocompleteModule,
    RockButtonModule,
    RockCardModule,
    RockCheckboxModule,
    RockDatepickerModule,
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
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
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
        AutocompleteComponent,
        ButtonComponent,
        CardComponent,
        CheckboxComponent,
        DatepickerComponent,
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
        RockAutocompleteModule,
        RockButtonModule,
        RockCardModule,
        RockCheckboxModule,
        RockDatepickerModule,
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
