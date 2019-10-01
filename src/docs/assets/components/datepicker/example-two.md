```code
const eventDate = new Date();
eventDate.setDate(eventDate.getDate() + 7)
this.exampleTwo = this.form.group({
    expiryDate: [ { value: eventDate, disabled: true }, [ ] ],
});
```

```code
<form [formGroup]="exampleTwo">
    <rock-datepicker
        label="This will expire in 7 days"
        name="expiryDate"
        formControlName="expiryDate">
    </rock-datepicker>
</form>
```
