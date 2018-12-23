```code
this.exampleForm = this.form.group({
    first: [ { value: undefined, disabled: true }, [] ],
    second: [ { value: true, disabled: true }, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox>
        <input rockInput type="checkbox" formControlName="first"> This is disabled
    </rock-checkbox>
    
    <rock-checkbox>
        <input rockInput type="checkbox" formControlName="second"> This is disabled and checked
    </rock-checkbox>
</form>
```
