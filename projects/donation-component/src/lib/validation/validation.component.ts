import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, AbstractControlDirective, AbstractControl, FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'lib-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.scss']
})
export class ValidationComponent implements OnInit {

  private static readonly errorMessages = {
    required: message => message,
    minlength: message => message,
    maxlength: message => message,
    email: message => message,
    pattern: message => message,
    min: message => message,
    mustMatch: message => message
  };

  message: string;
  @Input()
  private control: AbstractControlDirective | AbstractControl;
  @Input()
  public RequiredMessage: string;
  @Input()
  public MinMaxMessage: string;
  @Input()
  public EmailMessage: string;
  @Input()
  public PatternMessage: string;
  @Input()
  public MinMessage: string;
  @Input()
  public MaxMessage: string;
  @Input()
  public ConfirmMessage: string;

  ngOnInit(): void {

  }

  showErrors(): boolean {
    if (this.control && this.control.errors) {
      return this.control.touched && this.control.dirty;
    } else {
      return false;
    }
  }

  errors(): string[] {
    return Object.keys(this.control.errors).map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: {}) {
    switch (type) {
      case 'email': {
        this.message = this.EmailMessage;
        break;
      }
      case 'required': {
        this.message = this.RequiredMessage;
        break;
      }
      case 'pattern': {
        this.message = this.PatternMessage;
        break;
      }
      case 'min': {
        this.message = this.MinMessage;
        break;
      }
      case 'minlength': {
        this.message = this.MinMessage;
        break;
      }
      case 'maxlength': {
        this.message = this.MaxMessage;
        break;
      }
      case 'mustMatch': {
        this.message = this.ConfirmMessage;
        console.log(this.message);
      }
    }
    return ValidationComponent.errorMessages[type](this.message);
  }

}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    // return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    return false;
  }
}

export function mustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors.mustMatch) {
      // return if another validator has already found an error on the matchingControl
      return;
    }

    // set error on matchingControl if validation fails
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };
}
