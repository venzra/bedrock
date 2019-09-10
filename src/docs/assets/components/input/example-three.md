```code
this.intermediateForm = this.form.group({
    email: [ undefined, [ Validators.required, Validators.email ] ],
    password: [ undefined, [ Validators.required ] ],
});
```

```code
<form [formGroup]="intermediateForm">
    <rock-input
        label="Email address"
        name="email"
        type="text"
        formControlName="email"
        [required]="true"
    >
        <rock-error [control]="intermediateForm.get('email')"></rock-error>
    </rock-input>

    <rock-input
        label="Password"
        name="password"
        type="password"
        formControlName="password"
        [required]="true"
    >
        <rock-error [control]="intermediateForm.get('password')"></rock-error>
    </rock-input>
</form>
```
