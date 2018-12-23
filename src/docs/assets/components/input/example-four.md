```code
this.textForm = this.form.group({
    alias: [ undefined, [ Validators.required ] ],
    feedback: [ undefined, [ Validators.required ] ],
});
```

```code
<form [formGroup]="textForm">
    <rock-input label="Your name">
        <input rockInput id="alias" type="text" formControlName="alias">
        <rock-input-error></rock-input-error>
    </rock-input>
    
    <rock-input label="Feedback">
        <textarea rockInput id="feedback" rows="8" formControlName="feedback"></textarea>
        <rock-input-error></rock-input-error>
    </rock-input>
</form>
```
