import { Injectable } from '@angular/core';
import { StatusCode, StatusMessage } from '../../models/constants';
import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { NotificationService } from '../notification-service/notification.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor(private cookie: CookieService, private notificationservice: NotificationService, private router: Router) { }

  handleError(error) {
    switch (error) {
      case StatusCode.Unauthorized: {
        this.cookie.remove('userdetails');
        this.cookie.remove('token');
        localStorage.clear();
        this.router.navigate(['/']);

        break;
      }
      case StatusCode.BadRequest: {
        this.notificationservice.Warning({
          message: StatusMessage.BadRequest,
          title: ''
        });

        break;
      }
      case StatusCode.Forbidden: {
        this.notificationservice.Warning({
          message: StatusMessage.Forbidden,
          title: ''
        });
        this.removeCredentials();

        break;
      }
      case StatusCode.InteralServerError: {
        // this.notificationservice.Error({ message: StatusMessage.InteralServerError, title: '' });

        break;
      }
      case StatusCode.NotFound: {
        this.notificationservice.Warning({
          message: StatusMessage.NotFound,
          title: ''
        });

        break;
      }
      default: {
      }
    }
  }

  removeCredentials() {
    this.cookie.remove('userdetails');
    this.cookie.remove('token');
    localStorage.clear();
  }
}
