```code
this.exampleOne = this.form.group({
    startTime: [ undefined, [ ] ],
});
```

```code
<form [formGroup]="exampleOne">
    <rock-time-picker
        label="What time will it start?"
        name="startTime"
        formControlName="startTime">
    </rock-time-picker>
</form>
```
