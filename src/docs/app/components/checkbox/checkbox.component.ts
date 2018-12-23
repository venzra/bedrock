import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './checkbox.component.html',
})
export class CheckboxComponent implements OnInit {

    public exampleOne: FormGroup;
    public exampleTwo: FormGroup;

    constructor(
        private form: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.exampleOne = this.form.group({
            first: [ undefined, [] ],
            second: [ true, [] ],
        });

        this.exampleTwo = this.form.group({
            first: [ undefined, [] ],
            second: [ true, [] ],
        });
    }

}
