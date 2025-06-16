import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../Models/iproduct';
import { Store } from '../../Models/store';
import {FormsModule, NgModel} from '@angular/forms'
import { CommonModule } from '@angular/common';
import { ImgStyle } from '../../directives/img-style';
import { CreditCardPipe } from '../../pipes/credit-card-pipe';
import { DiscountPipe } from '../../pipes/discount-pipe';
import { ProductsStatic } from '../../service/products-static';
import { RouterLink, RouterModule } from '@angular/router';
import { ProductsWithApi } from '../../service/products-with-api';
@Component({
  selector: 'app-products',
  imports: [FormsModule, CommonModule, ImgStyle, CreditCardPipe, DiscountPipe, RouterModule, RouterLink],
templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products implements OnInit{
  ProductList:IProduct[] = []
  serachedValue:string=''
  TotalPrice:number = 0
  userName:string = 'Mohammed'
  date:Date = new Date()
  creditNUmber:string = '0000000000000000'
  // create dependacy injection
  constructor(private productStaticService:ProductsStatic,
    // create dependancy injection for dynamic service
    private productApiService:ProductsWithApi,
    // solve reload proble due to zoneless
    private cdr:ChangeDetectorRef,
  ){
    // this.productAfterSearch = this.productStaticService.getAllProducts()
    // getAllProducts is an observable, in this file I act as a observer so I must use subscribe
    // right structure example
    // this.productApiService.getAllProducts().subscribe({
    //   next:()=>{
    //     //Success status(200)
    //   },complete:()=>{

    //   },error:()=>{
    //     // fail or error status (400, 500)
    //   }
    // })

    
  }
  ngOnInit(): void {
    this.productApiService.getAllProducts().subscribe({
      next:(data)=>{
        console.log(data)
        this.ProductList=data
        this.productAfterSearch=data
        this.cdr.detectChanges()
      },error:(error)=>{
        // fail or error status (400, 500)
        console.log("The error is: ",error)
      }
    })
  }
  toggle(productImage: string){
    // this.ProductList = produtId
    const product = this.ProductList.find(p =>p.productImage === productImage)
    if(product){
      product.showImg=!product.showImg
    }
  }
  shoeImg(id: number){
    const product = this.ProductList.find(d =>d.id === id)
    if(product){
      product.showdate =! product.showdate
    }
  }
  totalPrice(prouctId:number ,qty:string, price:number){
    if(isNaN(+qty) || +qty <= 0){
      alert('Please enter a valid number greater than 0')
      return;
    }
   
    const product = this.ProductList.find(p => p.id === prouctId)
    if(product){
     if(product.productQuantity >= +qty){
       product.productQuantity -= +qty
      this.TotalPrice += +qty * price
     }else{
      alert('Not available items available in stock')
     }
    }
  }
  productAfterSearch:IProduct[] = []
  @Input() set filterByNameChild(setValue:string){
    if(!setValue){
      this.productAfterSearch=this.ProductList;
    }
    // console.log(setValue)
    // this.productAfterSearch = this.doSearch(setValue)
    // this.productAfterSearch=this.productStaticService.doSearch(setValue)
  this.productApiService.getAllProducts().subscribe((data) => {
  let objArr = data.filter((product) =>
    product?.productName.toLowerCase().includes(setValue?.toLowerCase())
  );
  this.productAfterSearch = objArr;
});
  }
  // doSearch(value:string):IProduct[]{
  //   value=value.toLowerCase()
  //   return this.ProductList.filter((prd:IProduct) => 
  //     prd.productName.toLowerCase().includes(value)
  //   )
  // }
  // create event 
  // property describe event:EventEmitter<interface> = new EventEmitter<interface>
  @Output() productProperty:EventEmitter<IProduct>=new EventEmitter<IProduct>
  addToCartInChild(product:IProduct){
    // console.log(product)
    // emit the event (send event by property)and the object product
    // fire the event 
    this.productProperty.emit(product)
  }
}
