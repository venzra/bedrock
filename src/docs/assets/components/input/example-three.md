```code
this.intermediateForm = this.form.group({
    email: [ undefined, [ Validators.required, Validators.email ] ],
    password: [ undefined, [ Validators.required ] ],
});
```

```code
<form [formGroup]="intermediateForm">
    <rock-input label="Email address">
        <input rockInput id="email" type="text" formControlName="email">
        <rock-input-error></rock-input-error>
    </rock-input>
    
    <rock-input label="Password">
        <input rockInput id="password" type="password" formControlName="password">
        <rock-input-error></rock-input-error>
    </rock-input>
</form>
```
