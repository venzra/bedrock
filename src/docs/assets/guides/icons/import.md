```code
import { library } from '@fortawesome/fontawesome-svg-core';
import {
    faArrowUp,
    faArrowDown,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
    imports: [
        FontAwesomeModule,
    ],
})
export class ModuleName {
    constructor() {
        library.add(
            faArrowUp,
            faArrowDown,
        );
    }
}
```
