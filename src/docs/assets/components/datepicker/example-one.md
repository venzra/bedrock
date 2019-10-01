```code
this.exampleOne = this.form.group({
    birthDate: [ undefined, [ ] ],
});
```

```code
<form [formGroup]="exampleOne">
    <rock-datepicker
        label="When where you born?"
        name="birthDate"
        formControlName="birthDate">
    </rock-datepicker>
</form>
```
