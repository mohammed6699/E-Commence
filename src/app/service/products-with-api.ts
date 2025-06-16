import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IProduct } from '../Models/iproduct';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProductsWithApi {
// api => url & nmethod  get post patch delete
// to make it able to use these method we must create s dependab=ncy injection in the constructor 
  constructor(
    // HttpClient is the service which contains all the methods (get, patch, post, ...)
    private http:HttpClient
  ) { 
    // now it's time to connect to backend using observer design pattern
    //observable                                    promise
    // can listen on multible values                can listen on one signle value 
    // lazy, not called untill we subscribe         not lazy, it call the service without 
    // the observable                               then .catch
    // can be cancelled by using unsubscribe        can't be cancelled
    // observable provides the map, foreach         doesn't provide any operators
    // filter, reduce, try, retry

  }
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.baseUrl}products`)
  }
  getProductById(id:number):Observable<IProduct>{
    return this.http.get<IProduct>(`${environment.baseUrl}products/${id}`)
  }
  search(value:string):Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${environment.baseUrl}products?product=${value}`)
  }
  getAllIDs():Observable<number[]> {
    return this.getAllProducts().pipe(map((product) => product.map((prd) => prd.id)))
  }
}
