import { Directive } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ValidatorFn,
} from '@angular/forms';

@Directive({
  selector: '[appFirstlettervalidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useClass: FirstlettervalidatorDirective,
      multi: true,
    },
  ],
})
export class FirstlettervalidatorDirective implements Validator {
  validator: ValidatorFn;
  constructor() {
    this.validator = this.firstLetterValidator();
  }
  validate(control: FormControl): ValidationErrors | null {
    return this.validator(control);
  }

  firstLetterValidator(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value) {
        let firstl = control.value.charAt(0);
        let isValid = /^[A-Z]$/.test(firstl);
        if (isValid) {
          return null;
        } else {
          return {
            firstlettervalidator: { valid: false },
          };
        }
      } else {
        return null;
      }
    };
  }
}
