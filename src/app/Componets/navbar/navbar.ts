import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { UerrAuth } from '../../service/uerr-auth';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule, RouterLink, RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
filterByName!:string
UerrAuth = inject(UerrAuth)
isUserLogged:boolean = false
userAuth = inject(UerrAuth)
  loginUser(){
    this.userAuth.logIn("Mohamed", "Mohamed@#$5588")
    this.isUserLogged = this.userAuth.IsUserLoggedIn
  }
  logoutUser(){
    this.userAuth.logOut()
    this.isUserLogged = this.userAuth.IsUserLoggedIn
  }
  isUserLogedProp:boolean = false
  userLogedInNav:boolean= false
constructor(private userauth:UerrAuth){
  this.userLogedInNav = this.UerrAuth.IsUserLoggedIn
  // this.isUserLogged = this.userAuth.IsUserLoggedIn
  // call the subject(predefined)
  this.UerrAuth.userLogedMethod().subscribe((data) => {
    this.userLogedInNav = data
  })
  // this.isUserLogged=this.UerrAuth.UserLoggedIn
  // this.UerrAuth.userLoggedMethod().subscribe((data) => {
  //   this.isUserLogged=data
  // })
}
}
