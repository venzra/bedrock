```code
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './example.component.html',
})
export class ExampleComponent implements OnInit {

    public loginForm: FormGroup;

    constructor (
        private form: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.loginForm = this.form.group({
            username: [ undefined, [ Validators.required ] ],
            password: [ undefined, [ Validators.required ] ],
        });
    }

    public performLogin(): void {
        console.log(this.loginForm.getRawValue());
    }
    
}
```
