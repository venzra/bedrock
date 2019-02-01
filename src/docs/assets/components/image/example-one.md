```code
this.basicForm = this.forms.group({
    exampleImage: [ undefined, [] ],
});
```

```code
<form [formGroup]="basicForm">
    <rock-image-input label="Example image">
        <input rockImage formControlName="exampleImage">
    </rock-image-input>
</form>
```
