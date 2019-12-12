import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    templateUrl: './time-picker.component.html',
})
export class TimePickerComponent implements OnInit {

    public exampleOne: FormGroup;
    public exampleTwo: FormGroup;
    public exampleThree: FormGroup;

    constructor(
        private form: FormBuilder,
    ) { }

    public ngOnInit(): void {
        this.exampleOne = this.form.group({
            startTime: [ undefined, [ ] ],
        });

        const endTime = new Date();
        endTime.setHours(19);
        endTime.setMinutes(13);
        this.exampleTwo = this.form.group({
            endTime: [ endTime, [ ] ],
        });

        const savedTime = new Date();
        savedTime.setHours(11);
        savedTime.setMinutes(47);
        this.exampleThree = this.form.group({
            savedTime: [ { value: savedTime, disabled: true }, [ ] ],
        });
    }

}
