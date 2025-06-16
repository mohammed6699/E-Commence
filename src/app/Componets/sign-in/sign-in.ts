// import { Component, inject } from '@angular/core';
// import { UerrAuth } from './../../service/uerr-auth';
// import { Iuser } from '../../Models/iuser';

// @Component({
//   selector: 'app-sign-in',
//   imports: [],
// templateUrl: './sign-in.html',
//   styleUrl: './sign-in.css'
// })
// export class SignIn {
  // fname!: string;
  // password!: string;
  // email!: string;
  // phone!: number;
  // address!: string

// loginUser(){
  // this.UerrAuth.loginUser(user: Iuser)
//   const user: Iuser = {
//     fname: this.fname,
//     password: this.password,
//     email: this.email,
//     phone: this.phone,
//     address: this.address
//   };
//   this.UerrAuth.loginUser(user)
//     if(this.UerrAuth.UserLoggedIn()){
//       console.log('User logged in successful')
//     }else{
//       console.log('logged in fail')
//     }
  
// }
// UerrAuth = inject(UerrAuth)
// isUserLogged:boolean = false
// constructor(){
//   this.isUserLogged=this.UerrAuth.UserLoggedIn
// }
// loginUser(){
//   this.UerrAuth.loginUser('Mohamed', 'AHH!@#587')
//   this.isUserLogged=this.UerrAuth.UserLoggedIn
// }
// logoutUser(){
//   this.UerrAuth.logoutUser()
//   this.isUserLogged=this.UerrAuth.UserLoggedIn
// }
// }
