import { Component } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { Footer } from '../footer/footer';
import { Home } from '../home/home';
import { ProductComponent } from '../product-component/product-component';

@Component({
  selector: 'app-main-component',
  imports: [Navbar, RouterModule, Footer,  RouterOutlet],
  templateUrl: './main-component.html',
  styleUrl: './main-component.css'
})
export class MainComponent {

}
