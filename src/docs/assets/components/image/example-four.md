```code
this.disabledForm = this.forms.group({
    exampleImage: [ { value: '.../example.png', disabled: true }, [] ],
});
```

```code
<form [formGroup]="disabledForm">
    <rock-image-input label="Disabled image input">
        <input rockImage formControlName="exampleImage">
    </rock-image-input>
</form>
```
