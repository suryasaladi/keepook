import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import {throwError} from 'rxjs';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/catch';


@Injectable()
export class HttpService {
  
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  downloadPost(url: string, data: any, options: any, headers?: any) {
    let opts:Object = {}
    opts["responseType"] = 'arraybuffer'
    if (headers) {
      opts = this.setHeaders(opts["headers"], headers);
    }

    return this.http.post(url, data, opts).catch((err) => {
      return this.handleError(err)
    });
  }

  post(url: string, data: any, options: any, headers?: any) {
    let opts:Object = {}
    opts["headers"] = this.getRequestOptionArgs(options);
    
    if (headers) {
      opts = this.setHeaders(opts["headers"], headers);
    }
  
    console.log('opy', opts);
    
    return this.http.post(url, data, opts).catch((err) => {
      return this.handleError(err)
    });
  }

  put(url: string, data: any, options: any, headers?: any) {
    let opts:Object = {}
    opts["headers"] = this.getRequestOptionArgs(options);

    if (headers) {
      opts = this.setHeaders(opts, headers);
    }

    return this.http.put(url, data, opts).catch((err) => {
      return this.handleError(err)
    });
  }

  get(url: string, options?: any, headers?: any) {
    let opts:Object = {}

    opts["headers"] = this.getRequestOptionArgs(options);

    if (headers) {
      opts = this.setHeaders(opts, headers);
    }

    return this.http.get(url, opts).catch((err) => {
      return this.handleError(err)
    });
  }

  delete(url: string, options: any)  {
    return this.http.delete(url, {"headers":this.getRequestOptionArgs(options)});
  }

  setHeaders(options: any, headers: any) {
    if (!options || typeof headers !== 'object') {
      return options;
    }

    for (const key in headers) {
      if (headers.hasOwnProperty(key)) {
        if (options["headers"].has(key)) {
          options["headers"] = options["headers"].delete(key);
        } else{
          options["headers"] = options["headers"].set(key, headers[key]);
        }
      }
    }

    return options;
  }

  private getRequestOptionArgs(options?: HttpHeaders) {

    if (options == null) {
      options = new HttpHeaders();
    }
    options = options.set('content-type', "application/json");
    const userToken = sessionStorage.getItem('token') ? JSON.parse(sessionStorage.getItem('token')): null;
    console.log(userToken);
    
    if(userToken){
      options = options.set('Authorization',  'Bearer' + ' ' + userToken);
    }
    
    return options;
  }

  //TODO catch error with handleError in each rest api call

  public handleError(error) {
    // check if user session is expired
    if ( error.status === 401 || error.status === 403) {
      sessionStorage.clear();
      return  this.router.navigate(['/login']);
    }
    return throwError(error);
  }

}