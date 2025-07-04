import { Component, inject } from '@angular/core';
import { ProductService } from '../../service/product-service';
import { IProduct } from '../../Models/iproduct';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatSnackBarModule, MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-updated-component',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatSnackBarModule],
  templateUrl: './updated-component.html',
  styleUrl: './updated-component.css'
})
export class UpdatedComponent {
  private product = inject(ProductService)
  snak = inject(MatSnackBar)
  productProps:IProduct = {} as IProduct
  productForm:FormGroup
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
  updateProduct(){
  const productId = this.productForm.value.id;
  console.log('producId', productId)
  if(productId){
    this.product.updateProduct(this.productForm.value).subscribe((data) => {
    console.log("updated data: ",data);
    this.showSuccess('product Updated')
    this.productProps = {} as IProduct;
    this.productForm.reset()
  })
  }else{
    console.log("Error updating the data")
  }
}

}
