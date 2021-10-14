import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient, HttpErrorResponse} from '@angular/common/http'
import {User} from './user'
import {catchError} from 'rxjs/operators'
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LogiService {
  
  url=''
  constructor(private http:HttpClient) { }
  // with error handler 
  enroll(user: User){
        return  this.http.post<any>(this.url,user).pipe(catchError(this.errorHandler))
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error)

  }
}


