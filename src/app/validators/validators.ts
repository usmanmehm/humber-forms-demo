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




export function postalCodeValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null =>  {

        const regex1 = /[A-Z]\d[A-Z]\s\d[A-Z]\d/g;
        const regex2 = /[A-Z]\d[A-Z]\d[A-Z]\d/g
        if (control.get('country')?.value === 'canada' || !control.get('country')?.value) {
            if (control.get('postalCode')?.value.match(regex1) || control.get('postalCode')?.value.match(regex2)) {
                return null;
            }

            return { invalidCadPostalCode: true};
        } else if (control.get('country')?.value === 'US') {
            if (control.get('postalCode')?.value.match(/\d\d\d\d\d/g) && control.get('postalCode')?.value.length === 5) {
                return null;
            }

            return { invalidUSPostalCode: true };
        }

        return null;
    }
}