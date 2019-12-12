```code
const endTime = new Date();
endTime.setHours(19);
endTime.setMinutes(13);
this.exampleTwo = this.form.group({
    endTime: [ endTime, [ ] ],
});
```

```code
<form [formGroup]="exampleTwo">
    <rock-time-picker
        label="What time will it end?"
        name="endTime"
        formControlName="endTime">
    </rock-time-picker>
</form>
```
