```code
this.exampleForm = this.form.group({
    first: [ undefined, [] ],
    second: [ true, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox>
        <input rockInput type="checkbox" formControlName="first"> This is not yet checked
    </rock-checkbox>
    
    <rock-checkbox>
        <input rockInput type="checkbox" formControlName="second"> This has been checked
    </rock-checkbox>
</form>
```
