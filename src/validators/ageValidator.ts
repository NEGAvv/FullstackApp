import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ageValidator(minAge: number, maxAge: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const age = control.value;
  
      if (age < minAge) {
        return { minAgeNotMet: { min: minAge, actual: age } };
      }
  
      if (age > maxAge) {
        return { maxAgeExceeded: { max: maxAge, actual: age } };
      }
  
      return null; 
    };
  }