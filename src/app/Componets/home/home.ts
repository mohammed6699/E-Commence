import { Component, inject } from '@angular/core';
import { Store } from '../../Models/store';
import { Products } from "../products/products";
import { Notfound } from "../notfound/notfound";
import { UerrAuth } from '../../service/uerr-auth';

@Component({
  selector: 'app-home',
  imports: [Products],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
// isUserLogged:boolean = false
// userAuth = inject(UerrAuth)
//   loginUser(){
//     this.userAuth.logIn("Mohamed", "Mohamed@#$5588")
//     this.isUserLogged = this.userAuth.IsUserLoggedIn
//   }
//   logoutUser(){
//     this.userAuth.logOut()
//     this.isUserLogged = this.userAuth.IsUserLoggedIn
//   }
//   isUserLogedProp:boolean = false
//   userLogedInNav:boolean= false
// constructor(private userauth:UerrAuth){
//     this.userLogedInNav = this.UerrAuth.IsUserLoggedIn
//     this.isUserLogged = this.userAuth.IsUserLoggedIn

// }
  storeProperty:Store = new Store("Samsung Store", "https://www.t4trade.com/wp-content/uploads/2025/01/samsung-electronicts-stock-performance.png",
    ['Cairo', 'Sohag', 'Alex'], "Mohamed")
}
