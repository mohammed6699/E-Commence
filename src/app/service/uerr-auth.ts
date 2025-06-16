import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UerrAuth {
   // create the subject(behavior subject)
  propSub:BehaviorSubject<boolean>
  constructor(
    private http:HttpClient
    
  ) { 
    this.propSub = new BehaviorSubject<boolean>(false)
  }
  
  logIn(userName: string, password: string){
    // call api
    let admin = "admin"
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Ilp5YWRAZ21haWwuY29tIiwiaWQiOiI2ODMxN2ZiYTBhN2IwODU5YjAwMGQ4ZjIiLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE3NDg5ODAyODAsImV4cCI6MTc0ODk4MDg4MH0.mXV0zhxe7UOJDQBf4KHzi7Xt51O_IO85SGJUYjdU2ro";
    localStorage.setItem("token", token);
    localStorage.setItem("isAdmin", admin)
    this.propSub.next(true)
  }
  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem('isAdmin')
    this.propSub.next(false)
  }
  // as I need to make it here as a methid and call it as prop
  get IsUserLoggedIn():boolean{
    return (localStorage.getItem('token'))?true:false
  }
 userLogedMethod(){
  // check status
  return this.propSub
 }
 get IsUserAdmin():boolean{
  return (localStorage.getItem('isAdmin'))?true:false 
 }
}

