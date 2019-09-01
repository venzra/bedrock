```code
constructor(
    private forms: FormBuilder,
) { }

public ngOnInit(): void {
    this.changeForm = this.forms.group({
        country: [ undefined, [] ],
    });
}

public setCountry(event: Option) {
    this.selection = event;
}
```

```code
<form [formGroup]="changeForm">
    <rock-select (selectionChange)="setCountry($event)" formControlName="country">
        <div rockOption *ngFor="let country of countries" [value]="country.value">{{ country.name }}</div>
    </rock-select>
</form>

<p>Selection: <span *ngIf="!selection">n/a</span><span *ngIf="selection">{{ selection.getContent() }} ({{ selection.value }})</span></p>
```
