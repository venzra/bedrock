import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements OnInit {

    public exampleOne: FormGroup;
    public exampleTwo: FormGroup;
    public exampleThree: FormGroup;
    public exampleFour: FormGroup;

    public lessonStart: Date;
    public lessonEnd: Date;

    constructor(
        private form: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.exampleOne = this.form.group({
            birthDate: [ undefined, [ ] ],
        });

        const eventDate = new Date();
        eventDate.setDate(eventDate.getDate() + 7);
        this.exampleTwo = this.form.group({
            expiryDate: [ { value: eventDate, disabled: true }, [ ] ],
        });

        this.exampleThree = this.form.group({
            startDate: [ undefined, [ Validators.required ] ],
        });

        this.lessonStart = new Date();
        this.lessonEnd = new Date();
        this.lessonEnd.setMonth(eventDate.getMonth() + 2);
        this.exampleFour = this.form.group({
            lessonDate: [ undefined, [ ] ],
        });
    }

}
