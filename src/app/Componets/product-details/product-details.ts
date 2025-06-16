import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsStatic } from '../../service/products-static';
import { IProduct } from '../../Models/iproduct';
import { ProductsWithApi } from '../../service/products-with-api';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails{
// 1- get the id from url
currentId:number=0
product!:IProduct
// call all the ids
allIds!:number[]
// find the index of the specific product
myIndex!:number
// built in services to take shoot for url
constructor(
  private active:ActivatedRoute, 
  // private productService:ProductsStatic, 
  private route:Router,
  private productAPi:ProductsWithApi,
  private cdr:ChangeDetectorRef
){
  // 2- get the ide from url
  // this.currentId=Number(this.active.snapshot.paramMap.get('productID'))
  // use the observable route to make sure the url is always in change
    this.active.paramMap.subscribe((data) => {
    this.currentId = Number(data.get('prductID'))
    console.log(this.currentId)
    this.productAPi.getProductById(this.currentId).subscribe((data) => {
    console.log(data)
    if(data && data.id){
      this.product = data
      this.cdr.detectChanges()
    }else{
      this.route.navigate(['**'])
    }
  })
  })
  // console.log((this.currentId));
  // 3- send the id to the method
 
  // this.allIds=this.productService.getAllIDs()
  // this.productAPi.getAllIDs().subscribe((data) => {
  //   console.log(data)
  //   this.allIds=data.map((id) => Number(id))
  //   console.log(this.allIds) 
  // })
  // console.log(this.allIds)
  this.productAPi.getAllIDs().subscribe((data) =>{
    console.log(data);
    this.allIds=data.map((id) => Number(id))
  })
}
PrevFunc(){
  // get the current index (myIndex) and search the id by indexOf
this.myIndex=this.allIds.indexOf(this.currentId)
console.log(this.myIndex)
// navigate the index and decrease it by one on each click
this.route.navigate(['/product_component/', this.allIds[--this.myIndex]]);
}
NextFunc(){
this.myIndex=this.allIds.indexOf(this.currentId)
console.log(this.myIndex)
this.route.navigate(['/product_component/', this.allIds[++this.myIndex]]);

}
}