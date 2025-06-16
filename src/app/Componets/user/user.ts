import { Component, inject } from '@angular/core';
import { AddUser } from '../../service/add-user';
 import { Iuser } from './../../Models/iuser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-user',
  imports: [FormsModule, CommonModule],

templateUrl: './user.html',
  styleUrl: './user.css'
})
export class User {
user = inject(AddUser);
AddUser:Iuser = {} as Iuser 
addUser(){
  this.user.addUser(this.AddUser).subscribe((data) => {
    console.log(data)
  })
}
}
