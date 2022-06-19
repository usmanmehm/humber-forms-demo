import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function firstNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
       if (control.value.includes(" ")) {
           return { hasSpace: true };
       } else if (control.value.match(/[\d]/g)) {
           return { includesNumbers: true }
       } else if (control.value.length > 15) {
           return { exceedsMaxValue: true }
       }

       // if all the other checks are false, then form is valid
       return null;
    };
  }

  export function parentalConsent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
       if (control.get('over18')?.value === 'no' &&
            !control.get('parentSignature')?.value) {
            return { parentSignatureRequired: true };
       }

       return null;
    };
  }
