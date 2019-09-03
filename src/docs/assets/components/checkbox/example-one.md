```code
this.exampleForm = this.form.group({
    first: [ undefined, [] ],
    second: [ true, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox
        label="This is not yet checked"
        type="checkbox"
        formControlName="first">
    </rock-checkbox>
    
    <rock-checkbox
        label="This has been checked"
        type="checkbox"
        formControlName="second">
    </rock-checkbox>
</form>
```
