```code
import { PaginationEvent } from '@bedrock';

public p2 = {
    records: 200,
    skip: 0,
    limit: 20,
    choices: 5,
    controls: false,
    icons: false
};

public updatePage(event: PaginationEvent, paginator) {
    paginator.skip = event.selectedSkip;
}
```

```code
<rock-pagination
    [records]="p2.records"
    [skip]="p2.skip"
    [limit]="p2.limit"
    [choices]="p2.choices"
    [controls]="p2.controls"
    [icons]="p2.icons"
    (change)="updatePage($event, p2)"
></rock-pagination>
```
