import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './image.component.html',
})
export class ImageComponent implements OnInit {

    public basicForm: FormGroup;
    public extendedForm: FormGroup;
    public populatedForm: FormGroup;
    public disabledForm: FormGroup;

    constructor(
        private forms: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.basicForm = this.forms.group({
            exampleImage: [ undefined, [] ],
        });

        this.extendedForm = this.forms.group({
            exampleImage: [ undefined, [] ],
        });

        this.populatedForm = this.forms.group({
            exampleImage: [ '/assets/components/image/example.png', [] ],
        });

        this.disabledForm = this.forms.group({
            exampleImage: [ { value: '/assets/components/image/example.png', disabled: true }, [] ],
        });
    }

}
