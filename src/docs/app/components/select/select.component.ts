import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Option } from '@bedrock/select/option';

@Component({
    templateUrl: './select.component.html',
})
export class SelectComponent implements OnInit {

    public basicForm: FormGroup;
    public disabledForm: FormGroup;
    public intermediateForm: FormGroup;
    public changeForm: FormGroup;

    public selection: Option;

    public countries = [ {
        name: 'Argentina',
        value: 'ARG',
    }, {
        name: 'Belgium',
        value: 'BEL',
    }, {
        name: 'France',
        value: 'FRA',
    }, {
        name: 'Germany',
        value: 'DEU',
    }, {
        name: 'Portugal',
        value: 'PRT',
    }, {
        name: 'Thailand',
        value: 'THA',
    }, {
        name: 'United Kingdom',
        value: 'GBR',
    }, {
        name: 'United States',
        value: 'USA',
    } ];

    constructor(
        private forms: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.basicForm = this.forms.group({
            country: [ undefined, [] ],
        });

        this.disabledForm = this.forms.group({
            country: [ { value: 'GBR', disabled: true }, [ Validators.required ] ],
        });

        this.intermediateForm = this.forms.group({
            country: ['DEU', [] ],
        });

        this.changeForm = this.forms.group({
            country: [ undefined, [] ],
        });
    }

    public setCountry(event: Option) {
        this.selection = event;
    }
}
