```code
constructor(
    private forms: FormBuilder,
) { }

public ngOnInit(): void {
    this.intermediateForm = this.forms.group({
        country: ['DEU', [] ],
    });
}
```

```code
<form [formGroup]="intermediateForm">
    <rock-select label="Pick your favourite country" placeholder="Choose a country" type="select" formControlName="country">
        <div rockOption *ngFor="let country of countries" [value]="country.value">{{ country.name }}</div>
    </rock-select>
</form>
```
