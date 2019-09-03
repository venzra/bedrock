```code
this.populatedForm = this.forms.group({
    exampleImage: [ '/assets/components/image/example.png', [] ],
});
```

```code
<form [formGroup]="populatedForm">
    <rock-image-input
        label="Example image (editable)"
        [height]="200"
        [width]="300"
        format="image/png"
        type="image"
        formControlName="exampleImage">
    </rock-image-input>
</form>
```
