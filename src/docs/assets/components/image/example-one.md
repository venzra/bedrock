```code
this.basicForm = this.forms.group({
    exampleImage: [ undefined, [] ],
});
```

```code
<form [formGroup]="basicForm">
    <rock-image-input
        label="Example image"
        type="image"
        formControlName="exampleImage">
    </rock-image-input>
</form>
```
