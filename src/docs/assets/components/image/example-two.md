```code
this.extendedForm = this.forms.group({
    exampleImage: [ undefined, [] ],
});
```

```code
<form [formGroup]="extendedForm">
    <rock-image-input label="Larger PNG image" [height]="500" [width]="500" format="image/png">
        <input rockImage formControlName="exampleImage">
    </rock-image-input>
</form>
```
