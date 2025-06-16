import { Component, inject } from '@angular/core';
import { UserService } from '../../service/user-service';
import { Iusers } from '../../Models/iusers';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-templatedrivien',
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './sign-up-templatedrivien.html',
  styleUrl: './sign-up-templatedrivien.css'
})
export class SignUpTemplatedrivien {
  user = inject(UserService)
  userProp:Iusers = {} as Iusers
  addUser(){
    
    this.user.addNewUser(this.userProp).subscribe((data) => {
      console.log(data)
    })
}
}
