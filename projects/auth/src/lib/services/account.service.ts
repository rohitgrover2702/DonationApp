import { Injectable } from '@angular/core';
// import { ApiService } from 'Projects/core/src/Projects';
import { ApiService } from 'projects/core/src/lib/domain/services/api-service/api.service';
import { Constants } from '../config/constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private apiService: ApiService) { }

  authenticate(data) {
    return this.apiService.post(Constants.login, data, null).pipe(map(res => {
      return res;
    }));
  }

  register(data) {
    return this.apiService.post(Constants.register, data, null).pipe(map(res => {
      return res;
    }));
  }

  activate(data) {
    return this.apiService.post(Constants.activate, data, null).pipe(map(res => {
      return res;
    }));
  }

  resetPassword(data) {
    return this.apiService.post(Constants.resetPassword, data, null).pipe(map(res => {
      return res;
    }));
  }

  changePassword(data) {
    return this.apiService.post(Constants.changePassword, data, null).pipe(map(res => {
      return res;
    }));

  }
}
