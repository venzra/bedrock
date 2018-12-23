```code
this.exampleForm = this.form.group({
    first: [ undefined, [] ],
    second: [ true, [] ],
});
```

```code
<form [formGroup]="exampleForm">
    <rock-checkbox>
        <input rockInput type="checkbox" [disabled]="true" formControlName="first"> This is disabled
    </rock-checkbox>
    
    <rock-checkbox>
        <input rockInput type="checkbox" [disabled]="true" formControlName="second"> This is disabled and checked
    </rock-checkbox>
</form>
```
