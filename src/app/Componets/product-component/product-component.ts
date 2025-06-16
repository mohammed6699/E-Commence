import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Products } from "../products/products";
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-product-component',
  imports: [FormsModule, Products],
  templateUrl: './product-component.html',
  styleUrl: './product-component.css'
})
export class ProductComponent {
  // filterByName:string=''
  // filterByName:string|undefined
  // filterByName:string|null=null
  filterByName!:string // non null assertion
  // addtoCartParent wait for method from interface
  // create array to save object in
  productInParent:IProduct[] = []
  addToCartInParent(product:IProduct){
    
    // let arr = this.productInParent.push(product)
    // console.log("event parent", this.productInParent.push(product));
    let obj = this.productInParent.find(prdObj=>prdObj.id == product.id)
    if(obj){
      obj.productQuantity++
    }else{
      this.productInParent.push({...product,productQuantity:1})
    }
    console.log(this.productInParent)
  }
  deleteProduct(product:IProduct){
    let obj = this.productInParent.find(prdObj=>prdObj.id == product.id)
    if(obj){
      obj.productQuantity--
  } else if(product.productQuantity == 0){
    alert('there is no products to delete')
    return
  }
  }
}
