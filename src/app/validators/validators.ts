import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";


export function nameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const areNumbersPresent = control.value.match(/\d/g);
        if (areNumbersPresent) {
            return { forbiddenCharacters: true };
        } else if (control.value.length > 15) {
            return { exceededMaxLength: true };
        } else if (control.value.includes(" ")) {
            return { spaces: true }
        } else if (!control.value) {
            return { empty: true }
        }

        return null; // means valid
    }
}

export function parentalConsent(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        if (control.get('over18')?.value === 'no'
            && !control.get('parentSignature')?.value) {
                return { requiresParentalConsent: true }
            }

        return null; // means valid
    }
}