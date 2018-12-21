import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { RockMarkdownModule } from '@bedrock';

import { CodeComponent } from './code.component';
import { CodeService } from './code.service';

@NgModule({
    declarations: [
        CodeComponent,
    ],
    imports: [
        HttpClientModule,
        RockMarkdownModule,
    ],
    exports: [
        CodeComponent,
    ],
    providers: [
        CodeService,
    ],
})
export class CodeModule {
}
