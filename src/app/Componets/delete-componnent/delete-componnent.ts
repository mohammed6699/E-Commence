import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../service/product-service';
import { IProduct } from '../../Models/iproduct';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-componnent',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatSnackBarModule],
  templateUrl: './delete-componnent.html',
  styleUrl: './delete-componnent.css'
})
export class DeleteComponnent {
  private product = inject(ProductService)
  snak = inject(MatSnackBar)
  productProps:IProduct = {} as IProduct
  productForm:FormGroup
  selectAction : 'add'| 'update'| 'delete' = 'add';
  constructor(){
    this.productForm=new FormGroup({
      id: new FormControl('', [Validators.required, Validators.minLength(2)]),
      productName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      productQuantity: new FormControl('', [Validators.required, Validators.minLength(3)]),
      productPrice: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      productImage: new FormControl('', [Validators.required]),
      CategoryID: new FormControl('', [Validators.required, Validators.pattern('[0-9]')]),
      productDescription: new FormControl('', [Validators.minLength(5)]),
      ClientName: new FormControl('', [Validators.minLength(5)])
    })
  }
    private showSuccess(msg: string): void {
  this.snak.open(msg, 'Close', {
    duration: 3000,                      
    verticalPosition: 'top',            
    horizontalPosition: 'center',       
    panelClass: ['snack-success']       
  });
}
  get ProductValidation(){
    return this.productForm.get('ProductValidation')
  }
  deleteProduct(){
  const productId = this.productForm.value.id;
  console.log('producId', productId)
  if(productId){
     this.product.deleteProduct(this.productForm.value).subscribe((data) => {
    console.log("Deleted data: ",data);
    this.showSuccess("product Deleted")
    this.productProps = {} as IProduct;
    this.productForm.reset()
  })
  }else{
    throw Error
  }
 
}
}
