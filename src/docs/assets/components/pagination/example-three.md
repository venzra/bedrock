```code
import { PaginationEvent } from '@bedrock';

public p3 = {
    records: 200,
    skip: 0,
    limit: 20,
    choices: 5,
    controls: true,
    icons: false
};

public updatePage(event: PaginationEvent, paginator) {
    paginator.skip = event.selectedSkip;
}
```

```code
<rock-pagination
    [records]="p3.records"
    [skip]="p3.skip"
    [limit]="p3.limit"
    [choices]="p3.choices"
    [controls]="p3.controls"
    [icons]="p3.icons"
    (pageChange)="updatePage($event, p3)">
</rock-pagination>
```
