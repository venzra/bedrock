```code
this.exampleThree = this.form.group({
    startDate: [ undefined, [ Validators.required ] ],
});
```

```code
<form [formGroup]="exampleThree">
    <rock-datepicker
        label="When does this event start?"
        name="startDate"
        formControlName="startDate">
        <rock-error [control]="exampleThree.get('startDate')"></rock-error>
    </rock-datepicker>
</form>
```
