import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./Componets/navbar/navbar";
import { Footer } from "./Componets/footer/footer";
// import { Products } from "./Componets/products/products";
// import { ProductComponent } from "./Componets/product-component/product-component";
// import { Home } from './Componets/home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'E-Commence';
}
