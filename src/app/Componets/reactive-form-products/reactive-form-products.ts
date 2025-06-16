import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { IProduct } from '../../Models/iproduct';

@Component({
  selector: 'app-reactive-form-products',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
templateUrl: './reactive-form-products.html',
  styleUrl: './reactive-form-products.css'
})
export class ReactiveFormProducts {
  private product = inject(ProductService)
  productProps:IProduct  = {} as IProduct
  productForm:FormGroup
  selectAction : 'add'| 'update'| 'delete' = 'add';
  constructor(){
    this.productForm=new FormGroup({
      id: new FormControl('', [Validators.required]),
      productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      productQuantity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      productPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      productImage: new FormControl('', [Validators.required]),
      CategoryID: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      productDescription: new FormControl('', [Validators.minLength(5)]),
      ClientName: new FormControl('', [Validators.minLength(5)])
    })
  }
addProduct(){
  const newProduct = this.productForm.value
  if(newProduct){
  console.log('product data', newProduct)
  this.product.addProduct(newProduct).subscribe((data) => {
    console.log(data);
    this.productProps = {} as IProduct;
  })
}else{
  throw Error
}
}
updateProduct(){
  const productId = this.productForm.value.id;
  console.log('producId', productId)
  if(productId){
    this.product.updateProduct(this.productForm.value).subscribe((data) => {
    console.log("updated data: ",data);
    this.productProps = {} as IProduct;
  })
  }else{
    console.log("Error updating the data")
  }
  
}
deleteProduct(){
  const productId = this.productForm.value.id;
  console.log('producId', productId)
  if(productId){
     this.product.deleteProduct(this.productForm.value).subscribe((data) => {
    console.log("Deleted data: ",data);
    this.productProps = {} as IProduct;
  })
  }else{
    throw Error
  }
 
}
}
