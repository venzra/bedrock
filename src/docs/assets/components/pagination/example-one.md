```code
import { PaginationEvent } from '@bedrock';

public p1 = {
    records: 200,
    skip: 0
};

public updatePage(event: PaginationEvent, paginator) {
    paginator.skip = event.selectedSkip;
}
```

```code
<rock-pagination
    [records]="p1.records"
    [skip]="p1.skip"
    (change)="updatePage($event, p1)">
</rock-pagination>
```
