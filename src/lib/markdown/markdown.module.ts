import { NgModule } from '@angular/core';

import { RockMarkdownDirective } from './markdown.directive';

@NgModule({
    declarations: [
        RockMarkdownDirective,
    ],
    exports: [
        RockMarkdownDirective,
    ],
})
export class RockMarkdownModule {
}
