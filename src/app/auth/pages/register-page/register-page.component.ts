import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import * as customValidators from 'src/app/shared/validators/validators';
import { ValidatorsService } from '../../../shared/services/validators.service';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';

@Component({
  templateUrl: './register-page.component.html'
})
export class RegisterPageComponent {

  public myForm: FormGroup = this.fb.group({
    name: ['', [ Validators.required, Validators.pattern(this.validatorServices.firstNameAndLastnamePattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorServices.emailPattern)], [ new EmailValidatorService()]],
    username: ['', [Validators.required, ]],
    password: ['', [Validators.required, Validators.minLength(6) ]],
    password2: ['', [Validators.required ]],
  }, {
    validators: [
      this.validatorServices.isFieldOneEqualFieldTwo('password', 'password2')
    ]
  });

  constructor(
    private fb: FormBuilder,
    private validatorServices: ValidatorsService
    ) {}

  isValidField( field: string ) {
    return this.validatorServices.isValidField( this.myForm, field);
  }

  onSubmit() {
    this.myForm.markAllAsTouched();
  }


}
