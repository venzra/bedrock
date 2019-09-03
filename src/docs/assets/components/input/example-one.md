```code
this.basicForm = this.form.group({
    firstName: [ undefined, [] ],
    lastName: [ undefined, [] ],
});
```

```code
<form [formGroup]="basicForm">
    <rock-input
        label="First name"
        name="firstName"
        type="text"
        formControlName="firstName">
    </rock-input>

    <rock-input
        label="Last name"
        name="lastName"
        type="text"
        formControlName="lastName">
    </rock-input>
</form>
```
