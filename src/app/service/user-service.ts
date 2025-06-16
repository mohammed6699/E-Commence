import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iusers } from '../Models/iusers';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpHeader={}
  constructor(
    private http:HttpClient,
  ) {
    this.httpHeader={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        // 'Authorization':''
      })
    }
   }
  addNewUser(newUser:Iusers):Observable<Iusers>{
    return this.http.post<Iusers>(`${environment.baseUrl}users`,newUser,this.httpHeader)
  }
}
