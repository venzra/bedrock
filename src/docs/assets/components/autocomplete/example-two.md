```code
<form [formGroup]="exampleTwo">
    <rock-autocomplete label="Example Two" type="text" name="fieldOne" formControlName="fieldOne" [search]="findResult.bind(this)" [selection]="chooseResult.bind(this)" [required]="true">
        <rock-error [control]="exampleTwo.get('fieldOne')"></rock-error>
    </rock-autocomplete>
</form>
```
