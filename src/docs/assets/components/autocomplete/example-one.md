```code
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
```

```code
<form [formGroup]="exampleOne">
    <rock-autocomplete label="Example One" type="text" name="fieldOne" formControlName="fieldOne" [search]="findResult.bind(this)" [selection]="chooseResult.bind(this)"></rock-autocomplete>
</form>
```
