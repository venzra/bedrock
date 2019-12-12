```code
this.exampleOne = this.form.group({
    birthDate: [ undefined, [ ] ],
});
```

```code
<form [formGroup]="exampleOne">
    <rock-date-picker
        label="When where you born?"
        name="birthDate"
        formControlName="birthDate">
    </rock-date-picker>
</form>
```
