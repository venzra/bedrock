```code
const savedTime = new Date();
savedTime.setHours(11);
savedTime.setMinutes(47);
this.exampleThree = this.form.group({
    savedTime: [ { value: savedTime, disabled: true }, [ ] ],
});
```

```code
<form [formGroup]="exampleThree">
    <rock-time-picker
        label="The time is set to..."
        name="savedTime"
        formControlName="savedTime">
    </rock-time-picker>
</form>
```
