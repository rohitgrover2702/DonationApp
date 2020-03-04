import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie';
import { IMembershipModel } from 'projects/viewmodels/imembership-model';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthResult, AuthStorageKeys } from '../../models/auth-result';

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  membershipModel: IMembershipModel;
  helper = new JwtHelperService();

  constructor(private cookie: CookieService, private router: Router) { }

  public getAuthResult(): AuthResult {
    const accessToken = localStorage.getItem(AuthStorageKeys.AccessToken);
    return {
      accessToken
    };
  }

  public isAuthenticated(): boolean {
    // const expiresAt = JSON.parse(localStorage.getItem(AuthStorageKeys.ExpiresAt));
    // return new Date().getTime() < expiresAt;
    const token = localStorage.getItem('access_token');
    return !this.helper.isTokenExpired(token);
  }

  public login(redirectUri?: string): void {
    this.setRedirectUri(redirectUri);
  }

  public setRedirectUri(redirectUri?: string) {
    if (redirectUri) {
      localStorage.setItem(AuthStorageKeys.RedirectUri, redirectUri);
    } else {
      localStorage.removeItem(AuthStorageKeys.RedirectUri);
    }
  }

  public setCookies(response: IMembershipModel) {
    this.membershipModel = response;
    this.cookie.putObject('userDetails', this.membershipModel);
    this.cookie.putObject('token', this.membershipModel.token);
  }

  setSession(authResult) {
    localStorage.setItem(AuthStorageKeys.AccessToken, authResult.token);
  }

  getCurrentUserObject(): IMembershipModel {
    const userDetails = this.cookie.getObject('userDetails');
    if (userDetails === undefined) {
      return {};
    } else {
      return userDetails;
    }
  }

  isLoggedIn(): boolean {
    return this.getToken() ? true : false;
  }

  getToken(): string {
    const token = this.cookie.get('token') ? this.cookie.get('token') : null;
    // const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
    return token;
  }

  getUserDetails(key: string) {
    const userDetails = this.cookie.getObject('userdetails');
    if (userDetails === undefined) {
      return '';
    } else {
      return userDetails[key];
    }
  }

  getCookieObject(key: string): IMembershipModel {
    const obj = this.cookie.getObject(key);
    if (obj === undefined) {
      return {};
    } else {
      return obj;
    }
  }

  getAllCookies(): {} {
    return this.cookie.getAll();
  }

  logout() {
    this.removeCredentials();
    this.router.navigate(['/auth/login']);
  }

  removeCredentials() {
    this.cookie.remove('userDetails');
    this.cookie.remove('token');
    this.cookie.remove('jengaOrigin');
    this.cookie.remove('mpesaOrigin');
    localStorage.clear();
  }

  setCookie(key: string, value: string) {
    this.cookie.put(key, value);
  }

  getCookie(key: string) {
    return this.cookie.get(key);
  }
}
