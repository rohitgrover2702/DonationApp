import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'projects/core/src/lib/domain/services/notification-service/notification.service';
import { constMessage } from '../../config/constants';
import { ResponseModel } from 'projects/viewmodels/response-model';
// import { MembershipService } from 'Projects/core/src/Projects';
import { MembershipService } from 'projects/core/src/lib/domain/services/membership-service/membership.service';
import { AccountService } from '../../services/account.service';
import { from } from 'rxjs';

@Component({
  selector: 'lib-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  responseModel: ResponseModel = {};
  // matcher: ErrorStateMatcher;

  constructor(private router: Router, private fb: FormBuilder, private notificationService: NotificationService,
    private membershipService: MembershipService, private accountService: AccountService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.rForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern]],
      password: [null, Validators.required]
    });
    // this.matcher = new MyErrorStateMatcher();
  }

  get email() {
    return this.rForm.get('email');
  }

  get password() {
    return this.rForm.get('password');
  }

  Login() {
    if (this.rForm.valid) {
      const data = {
        email: this.rForm.value.email,
        password: this.rForm.value.password
      };
      // this.loaderService.start();
      this.accountService.authenticate(data).subscribe(res => {
        // this.loaderService.stop();
        this.responseModel = res;
        switch (this.responseModel.status) {
          case 1:
            this.notificationService.Success({ message: constMessage.User_Login, title: '' });
            this.membershipService.setCookies(this.responseModel.responseData);
            this.membershipService.setSession(this.responseModel.responseData);
            this.router.navigate(['/dashboard/home']);
            break;
          case 2:
            this.notificationService.Error({ message: this.responseModel.message, title: '' });
            break;
          default:
            this.notificationService.Warning({ message: this.responseModel.message, title: '' });
            break;
        }
      });
    } else {
      this.validateAllFields(this.rForm);
    }
  }

  validateAllFields(formGroup: FormGroup) {
    Object.keys(this.rForm.controls).map(controlName => {
      this.rForm.get(controlName).markAsTouched({ onlySelf: true });
    });

    Object.keys(this.rForm.controls).map(controlName => {
      this.rForm.get(controlName).markAsDirty({ onlySelf: true });
    });
  }

}
