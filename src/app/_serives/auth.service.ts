import { Injectable, Output, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { throwError, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
  }

  private static loginUrl: string = environment.userServiceBaseUrl + 'signin';
  private static changePasswordUrl: string = environment.userServiceBaseUrl + 'change-password';
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  public isAuthenticated(): boolean {
    return sessionStorage.getItem('token') ? true : false;
  }

  public login(dataToSend: { usernameOrEmail: string, password: string }) {
    return this.http.post(AuthService.loginUrl, dataToSend).pipe(map(res => {
      const response = JSON.parse(JSON.stringify(res));

      if (response.data && response.data.jwt) {
        sessionStorage.setItem('token', JSON.stringify(response.data.jwt));

        if (response.data && response.data['user']) {

          sessionStorage.setItem('user', JSON.stringify(response.data['user'].firstName));
          this.getLoggedInName.emit(response.data['user'].firstName + ' ' + response.data['user'].lastName);
          if (this.isAuthenticated()) {
            this.router.navigate(['/dashboard']);
            this.loggedIn.next(true);
          }

        }
      }
      return response;
    }),
      catchError(this.handleError)
    );
  }

  get isLoggedIn() {

    console.log(this.isAuthenticated);

    // if(this.isAuthenticated())
    // {

    this.loggedIn.next(true);
    // }

    return this.loggedIn.asObservable();
  }

  public getUser() {
    return sessionStorage.getItem('user') ? JSON.parse(sessionStorage.getItem('user')) : null;
  }

  // private getUserFromService() {
  //   const token = JSON.parse(sessionStorage.getItem('token'));
  //   const Authorization = token.token_type + ' ' + token.access_token;
  //   const headers = new HttpHeaders({
  //     Authorization
  //   });
  //   return this.http.get(AuthService.getUserUrl, { headers }).pipe(map(res => {
  //         const response = JSON.parse(JSON.stringify(res));
  //         return response;
  //   }));
  // }
  public changePassword(dataToSend) {
    const token = JSON.parse(sessionStorage.getItem('token'));
    const Authorization = token.token_type + ' ' + token.access_token;
    const headers = new HttpHeaders({
      Authorization
    });
    return this.http.put(AuthService.changePasswordUrl, dataToSend, { headers }).pipe(map(res => {
      return JSON.parse(JSON.stringify(res));
    }));


  }

  public logout() {
    sessionStorage.clear();
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public handleError(error) {
    // check if user session is expired
    if (error.status === 401 || error.status === 403) {
      return this.router.navigate(['/login']);
    }
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }


}