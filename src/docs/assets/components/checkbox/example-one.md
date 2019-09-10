```code
this.exampleForm = this.form.group({
    first: [ undefined, [ Validators.required ] ],
    second: [ true, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox
        label="This is not yet checked"
        type="checkbox"
        formControlName="first"
        [required]="true">
    </rock-checkbox>
    
    <rock-checkbox
        label="This has been checked"
        type="checkbox"
        formControlName="second">
    </rock-checkbox>
</form>
```
