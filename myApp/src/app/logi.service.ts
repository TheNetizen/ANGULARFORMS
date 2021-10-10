import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LogiService {
  urllogin="http://localhost:3000/login"
  constructor(private http:HttpClient) { }
  login(data:any):Observable<any>{
   return this.http.post<any>(this.urllogin,data)
  }
}
