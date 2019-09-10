```code
this.textForm = this.form.group({
    alias: [ undefined, [ Validators.required ] ],
    feedback: [ undefined, [ Validators.required ] ],
});
```

```code
<form [formGroup]="textForm">
    <rock-input
        label="Your name"
        name="alias"
        type="text"
        formControlName="alias"
        [required]="true"
    >
        <rock-error [control]="textForm.get('alias')"></rock-error>
    </rock-input>

    <rock-input
        label="Feedback"
        name="feedback"
        type="textarea"
        formControlName="feedback"
        [required]="true"
    >
        <rock-error [control]="textForm.get('feedback')"></rock-error>
    </rock-input>
</form>
```
