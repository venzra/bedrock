```code
this.disabledForm = this.form.group({
    forename: [ { value: 'John', disabled: true }, [] ],
    surname: [ { value: 'Smith', disabled: true }, [] ],
});
```

```code
<form [formGroup]="disabledForm">
    <rock-input
        label="First name"
        name="forename"
        type="text"
        formControlName="forename">
    </rock-input>

    <rock-input
        label="Last name"
        name="surname"
        type="text"
        formControlName="surname">
    </rock-input>
</form>
```
