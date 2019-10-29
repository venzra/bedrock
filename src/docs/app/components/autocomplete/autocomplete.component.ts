import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { RockAutocompleteList, RockAutocompleteValue } from '@bedrock';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    templateUrl: './autocomplete.component.html',
})
export class AutocompleteComponent implements OnInit {

    public exampleOne: FormGroup;
    public exampleTwo: FormGroup;

    private options = [
        { id: 'first', text: 'Choice One' },
        { id: 'second', text: 'Choice Two' },
        { id: 'third', text: 'Choice Three' },
        { id: 'fourth', text: 'Choice Four' },
        { id: 'fifth', text: 'Choice Five' },
    ];

    constructor(
        private form: FormBuilder,
    ) { }

    ngOnInit(): void {
        this.exampleOne = this.form.group({
            fieldOne: [ undefined, [] ],
        });

        this.exampleTwo = this.form.group({
            fieldOne: [ undefined, [ Validators.required ] ],
        });
    }

    public findResult(value: string): Observable<Array<RockAutocompleteList>> {
        return of(this.options)
            .pipe(
                map((options) => options.filter((option) => RegExp(value, 'gi').test(option.text)))
            );
    }

    public chooseResult(choice: string): Observable<RockAutocompleteValue> {
        const val = this.options.find((opt) => opt.id === choice);
        return of({ display: val.text, value: val });
    }

}
