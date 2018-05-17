import { Injectable } from '@angular/core';
import {HttpHeaders, HttpClient, HttpResponse} from '@angular/common/http';


import { User} from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {tap,catchError} from 'rxjs/operators';

const headers = new HttpHeaders({'Content-Type':'application/json'});

@Injectable()
export class UserServiceService {
  
  fms:any
  res:Response;
  private UserUrl:string="http://localhost:9002/user";

  constructor(private httpClient:HttpClient) { }
  getUsers(): Observable<HttpResponse<User[]>> {
    return this.httpClient.get<User[]>(this.UserUrl, { observe: 'response' }).pipe(tap(hi => console.log('Users fetched!!'))
      , catchError(this.handleError<HttpResponse<User[]>>('getUsers')));
  }

  addUser(user:User) :Observable<HttpResponse<any>>{
    return  this.httpClient.post<any>(this.UserUrl,user,{observe:'response'})
    .pipe(tap(hi=>console.log(hi)),
  catchError(this.handleError<HttpResponse<any>>('addUser')));
  }

  updateUser(user:User):Observable<HttpResponse<any>>{
    return this.httpClient.put<any>(this.UserUrl,user,{observe:'response'})
    .pipe(tap(_=>console.log('record Update')),
    catchError(this.handleError<HttpResponse<any>>('updateUser')))
  }
  getUser(id:number):Observable<HttpResponse<User>>{
   const url = `${this.UserUrl}/${id}`;
    return this.httpClient.get<User>(url,{observe:'response'})
    .pipe(tap(hi=>console.log(hi)),
    catchError(this.handleError<HttpResponse<User>>('getDetails of user'+id)));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      switch (error.status) {
        case 500:
          this.fms.show("Try again after some time", { cssClass: 'show error' });
          break;
        case 404:
          this.fms.show("Resource not found", { cssClass: 'show error' });
          break;
        case 403:
          this.fms.show("Resource not available", { cssClass: 'show error' });
          break;
        case 401:
          this.fms.show("Resource only available to authorised", { cssClass: 'show error' });
          break;
        case 400:
          this.fms.show(error.error, { cssClass: 'show error' });
          break;
      }
      return of(result as T);
    }
  }

}
