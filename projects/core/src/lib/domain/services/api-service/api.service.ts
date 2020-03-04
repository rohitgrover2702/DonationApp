import { Injectable, Inject } from '@angular/core';
import { HttpHandler, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ErrorHandlerService } from '../error-handler/error-handler.service';
import { CORE_CONFIG, CoreConfig } from '../../../config/core-config';

@Injectable({
  providedIn: 'root'
})
export class ApiService extends HttpClient {

  constructor(private httpHandler: HttpHandler, private errorHandler: ErrorHandlerService, private httpClient: HttpClient,
              @Inject(CORE_CONFIG) private config: CoreConfig) {
    super(httpHandler);
  }

  get<T>(url: string, options?: {}): Observable<T> {
    // return super.get<T>(this.config.baseUrl + url).pipe(catchError(this.handleError));
    return this.httpClient.get<T>(`${this.config.baseUrl + url}`).pipe(catchError(this.handleError));
  }
  post<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.post<T>(`${this.config.baseUrl + url}`, params).pipe(catchError(this.handleError));
  }
  put<T>(url: string, params: {}, options?: {}): Observable<T> {
    return super.put<T>(`${this.config.baseUrl + url}`, params).pipe(catchError(this.handleError));
  }

  delete<T>(url: string, options?: {}): Observable<T> {
    return super.delete<T>(`${this.config.baseUrl + url}`).pipe(catchError(this.handleError));
  }

  public handleError = (error: Response) => {
    // Do messaging and error handling here
    this.errorHandler.handleError(error.status);
    return observableThrowError(error);
  }
}
