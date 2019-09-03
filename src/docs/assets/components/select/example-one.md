```code
public countries = [ {
    name: 'Argentina',
    value: 'ARG',
}, {
    .....
}, {
    name: 'United Kingdom',
    value: 'GBR',
}, {
    name: 'United States',
    value: 'USA',
} ];

constructor(
    private forms: FormBuilder,
) { }

public ngOnInit(): void {
    this.basicForm = this.forms.group({
        country: [ undefined, [] ],
    });
}
```

```code
<form [formGroup]="basicForm">
    <rock-select type="select" formControlName="country">
        <div rockOption *ngFor="let country of countries" [value]="country.value">{{ country.name }}</div>
    </rock-select>
</form>
```
