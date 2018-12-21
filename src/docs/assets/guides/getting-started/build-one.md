```code
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import {
    RockCardModule,
    RockButtonModule, 
    RockInputModule,
} from '@venzra/bedrock';

import { ExampleComponent } from './example.component';

@NgModule({
    declarations: [
        ExampleComponent,
    ],
    imports: [
        ReactiveFormsModule,
        RockCardModule,
        RockButtonModule,
        RockInputModule,
    ],
})
export class ModuleName { }
```
