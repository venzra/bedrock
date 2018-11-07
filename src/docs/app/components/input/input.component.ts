import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './input.component.html',
})
export class InputComponent implements OnInit {

    public basicForm: FormGroup;
    public intermediateForm: FormGroup;
    public textForm: FormGroup;

    constructor(
        private form: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.basicForm = this.form.group({
            firstName: [ undefined, [] ],
            lastName: [ undefined, [] ],
        });

        this.intermediateForm = this.form.group({
            email: [ undefined, [ Validators.required, Validators.email ] ],
            password: [ undefined, [ Validators.required ] ],
        });

        this.textForm = this.form.group({
            alias: [ undefined, [ Validators.required ] ],
            feedback: [ undefined, [ Validators.required ] ],
        });
    }

}
