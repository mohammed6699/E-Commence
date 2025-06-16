import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IProduct } from '../Models/iproduct';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
   httpHeader={}
  constructor(
    private http:HttpClient,
  ) {
    this.httpHeader={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        // 'Authorization':''
      })
    }
   }
   addProduct(newProduct:IProduct):Observable<IProduct>{
    return this.http.post<IProduct>(`${environment.baseUrl}products `, newProduct, this.httpHeader)
   }
   updateProduct(newUpdatedProduct:IProduct):Observable<IProduct>{
    return this.http.patch<IProduct>(`${environment.baseUrl}products/${newUpdatedProduct.id}`, newUpdatedProduct,this.httpHeader)
   }
   deleteProduct(deletedProduct: IProduct):Observable<IProduct>{
    return this.http.delete<IProduct>(`${environment.baseUrl}products/${deletedProduct.id}`, this.httpHeader)
   }
}
