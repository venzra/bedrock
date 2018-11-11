import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { RockCardModule } from '@bedrock';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowDown,
    faArrowLeft,
    faArrowRight,
    faArrowUp,
    faEnvelope,
    faSpinner,
    faSquare,
} from '@fortawesome/free-solid-svg-icons';

import {
    faAngular,
} from '@fortawesome/free-brands-svg-icons';

import { GuidesComponent } from './guides.component';
import { IconsComponent } from './icons/icons.component';
import { LandingComponent } from './landing.component';

import { GuidesRoutingModule } from './guides-routing.module';

@NgModule({
    declarations: [
        GuidesComponent,
        IconsComponent,
        LandingComponent,
    ],
    imports: [
        GuidesRoutingModule,
        ReactiveFormsModule,
        RockCardModule,
        FontAwesomeModule,
    ],
    exports: [
        GuidesComponent,
    ],
})
export class GuidesModule {
    constructor() {
        library.add(
            faArrowDown,
            faArrowLeft,
            faArrowRight,
            faArrowUp,
            faEnvelope,
            faSpinner,
            faSquare,
            faAngular,
        );
    }
}
