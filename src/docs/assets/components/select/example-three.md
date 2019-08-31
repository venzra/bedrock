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
    <rock-select placeholder="Choose a country" formControlName="country">
        <label>Pick your favourite country</label>
        <div rockOption *ngFor="let country of countries" [value]="country.value">{{ country.name }}</div>
    </rock-select>
</form>
```