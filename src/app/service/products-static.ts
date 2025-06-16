import { Injectable } from '@angular/core';
import { IProduct } from '../Models/iproduct';
// class decorator (dependancy injection)
// decorator to make the service sharable among all the project
// you want the file to be sharable amoung certai file just change the naem for root to the other one you need like 'app-home'
@Injectable({
  providedIn: 'root'
})
export class ProductsStatic {
  //since I work on statick data I need property 
  productInService!:IProduct[]
  constructor() {
    this.productInService=[{
      id: 1,
        productName: 'Apple iPhone 15',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N53432547A/45/_/1694762192/fd45d583-8af9-4ff3-8032-af4a5a3c553c.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 1,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Mohammed',
        showImg:true,
        showdate: false
    },
    {
      id: 2,
        productName: 'Samsung Galaxy frontend ',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N70030440V/45/_/1702699238/6ae73ece-d29e-4a81-ba41-850055d0937f.jpg?format=avif&width=240',
        productQuantity: 0,
        productPrice: 200,
        CategoryID: 2,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Ahmed',
        showImg:true,
        showdate: false
    },
    {
      id: 3,
        productName: 'Apple iPhone 13',
        productImage:
          'https://f.nooncdn.com/p/v1686205682/N50838986A_1.jpg?format=avif&width=240',
        productQuantity: 0,
        productPrice: 200,
        CategoryID: 1,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Ibrahim',
        showImg:true,
        showdate: false
    },
    {
       id: 4,
        productName: 'Samsung Galaxy ',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N70035206V/45/_/1712239207/3e7c97e2-cf7d-48ee-b324-a5d4aa30efe8.jpg?format=avif&width=240',
        productQuantity: 1,
        productPrice: 200,
        CategoryID: 2,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Zyad',
        showImg:true,
        showdate: false
    },
    {
       id: 5,
        productName: 'OPPO Reno 12F 5G ',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N70093960V/45/_/1721457134/54d5b998-81c6-4fdd-9b0e-eca01f6979b7.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 2,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Omar',
        showImg:true,
        showdate: false
    },
    {
       id: 6,
        productName: 'iphone',
        productImage:
          'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 2,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Zynab',
        showImg:true,
        showdate: false
    },
    {
      id:7,
        productName: 'iphone',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N70085224V/45/_/1721894952/91270228-e30b-484e-ae2a-3e746b194bb2.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 3,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Ali',
        showImg:true,
        showdate: false
    },
    {
      id: 8,
        productName: 'Reno 11F',
        productImage:
          'https://f.nooncdn.com/p/pnsku/N70063654V/45/_/1713704986/b06f55f9-03d1-4021-8b06-da23bc27e60d.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 1,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Mariem',
        showImg:true,
        showdate: false
    },
    {
       id:9,
        productName: 'iphone',
        productImage:
          'https://f.nooncdn.com/p/v1640152217/N52217824A_1.jpg?format=avif&width=240',
        productQuantity: 20,
        productPrice: 200,
        CategoryID: 1,
        productDescription: 'lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem  lorem lorem lorem lorem lorem lorem',
        ClientName: 'Monshawy',
        showImg:true,
        showdate: false
    }]
   }
  getAllProducts():IProduct[]{
    return this.productInService //[{}]
  }
   getProductById(id: number):IProduct|undefined{
    return this.productInService.find((p) => p.id == id)
   } 
   delete(id:number):IProduct|undefined{
    const index = this.productInService.findIndex((p) => p.id == id)
    if(index !== -1){
      return this.productInService.splice(index, 1)[0]
    }
    return undefined
   }
    doSearch(value:string):IProduct[]{
    value=value.toLowerCase()
    return this.productInService.filter((prd:IProduct) => 
      prd.productName.toLowerCase().includes(value)
    )
  }
  getAllIDs():number[]{
    return this.productInService.map((id) => id.id)
  }
  }

