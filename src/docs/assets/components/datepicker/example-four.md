```code
this.lessonStart = new Date();
this.lessonEnd = new Date();
this.lessonEnd.setMonth(eventDate.getMonth() + 2);
this.exampleFour = this.form.group({
    lessonDate: [ undefined, [ ] ],
});
```

```code
<form [formGroup]="exampleFour">
    <rock-datepicker
        label="Choose a date for your next lesson"
        name="lessonDate"
        [minimum]="lessonStart"
        [maximum]="lessonEnd"
        formControlName="lessonDate">
        <rock-error [control]="exampleFour.get('lessonDate')"></rock-error>
    </rock-datepicker>
</form>
```
