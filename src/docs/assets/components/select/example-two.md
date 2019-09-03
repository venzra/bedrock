```code
constructor(
    private forms: FormBuilder,
) { }

public ngOnInit(): void {
    this.disabledForm = this.forms.group({
        country: [ { value: 'GBR', disabled: true }, [ Validators.required ] ],
    });
}
```

```code
<form [formGroup]="disabledForm">
    <rock-select type="select" formControlName="country">
        <div rockOption *ngFor="let country of countries" [value]="country.value">{{ country.name }}</div>
    </rock-select>
</form>
```
