import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function usernameValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    const startsWithLetter = /^[A-Za-z].*/.test(value);
    const minLengthValid = value && value.length >= 4;

    if (!startsWithLetter) {
      return { startsWithLetter: true };
    }

    if (!minLengthValid) {
      return { minLengthValid: true };
    }

    return null;
  };
}