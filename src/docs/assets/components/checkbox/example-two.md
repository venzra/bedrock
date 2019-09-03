```code
this.exampleForm = this.form.group({
    first: [ { value: undefined, disabled: true }, [] ],
    second: [ { value: true, disabled: true }, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox label="This is disabled" type="checkbox" formControlName="first"></rock-checkbox>
    <rock-checkbox label="This is disabled and checked" type="checkbox" formControlName="second"></rock-checkbox>
</form>
```
