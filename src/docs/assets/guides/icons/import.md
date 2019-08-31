```code
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import {
    fas,
    faArrowUp,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
        FontAwesomeModule,
    ],
})
export class ModuleName {
    constructor(library: FaIconLibrary) {
        library.addIconPacks(fas);
        library.addIcons(
            faArrowUp,
            faArrowDown,
        );
    }
}
```
