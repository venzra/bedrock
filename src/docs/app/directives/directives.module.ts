import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { RockCardModule, RockMarkdownModule } from '@bedrock';

import { CodeModule } from '../../components/code/code.module';

import { DirectivesComponent } from './directives.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { LandingComponent } from './landing.component';

import { DirectivesRoutingModule } from './directives-routing.module';

@NgModule({
    declarations: [
        DirectivesComponent,
        MarkdownComponent,
        LandingComponent,
    ],
    imports: [
        HttpClientModule,
        DirectivesRoutingModule,
        ReactiveFormsModule,
        CodeModule,
        RockCardModule,
        RockMarkdownModule,
    ],
    exports: [
        DirectivesComponent,
    ],
})
export class DirectivesModule {
}
