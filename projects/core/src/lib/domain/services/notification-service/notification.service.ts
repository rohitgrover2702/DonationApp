import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private toastr: ToastrService, private translateService: TranslateService) {
    this.toastr.toastrConfig.closeButton = false;
    this.toastr.toastrConfig.autoDismiss = true;
    this.toastr.toastrConfig.tapToDismiss = true;
  }

  Success(body: { message?: string; title?: string }) {
    return this.toastr.success(this.TranslateMessage(body.message), body.title, {
      timeOut: 30000
    });
  }

  Error(body: { message?: string; title?: string }) {
    return this.toastr.error(this.TranslateMessage(body.message), body.title, {
      timeOut: 30000
    });
  }

  Warning(body: { message?: string; title?: string }) {
    return this.toastr.warning(this.TranslateMessage(body.message), body.title, {
      timeOut: 30000
    });
  }

  Info(body: { message?: string; title?: string }) {
    return this.toastr.info(this.TranslateMessage(body.message), body.title);
  }

  private TranslateMessage(message: string): string {
    let returnMsg = '';
    //  this.translateservice.setDefaultLang(this.cookie.get('language'));
    this.translateService.get(message).subscribe(
      res => {
        returnMsg = res;
      },
      err => { }
    );
    return returnMsg;
  }
  closeAllToaster() {
    this.toastr.clear();
  }
}
