```code
this.basicForm = this.form.group({
    firstName: [ undefined, [] ],
    lastName: [ undefined, [] ],
});
```

```code
<form [formGroup]="basicForm">
    <rock-input label="First name">
        <input rockInput id="firstName" type="text" formControlName="firstName">
    </rock-input>
    
    <rock-input label="Last name">
        <input rockInput id="lastName" type="text" formControlName="lastName">
    </rock-input>
</form>
```
