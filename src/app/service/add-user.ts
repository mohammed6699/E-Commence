import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iuser } from '../Models/iuser';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AddUser {
  httpHeaders={}
  constructor(
    private http:HttpClient
  ) {
    this.httpHeaders={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    }
   }
   addUser(newUser:Iuser):Observable<Iuser>{
    return this.http.post<Iuser>(`${environment.baseUrl}User`, newUser, this.httpHeaders)
   }
}
