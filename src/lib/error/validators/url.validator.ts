import { AbstractControl } from '@angular/forms';

export function UrlValidator(control: AbstractControl) {
    if (control.value && !/^https?:\/\//.test(control.value)) {
        return { url: true };
    }
    return null;
}
