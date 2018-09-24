import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  productForm: FormGroup;

  constructor(private _productService: ProductsService, private _form: FormBuilder, private _router: Router) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.productForm = this._form.group({
      ProductId: new FormControl,
      ProductName: new FormControl,
      ProductUpc: new FormControl,
      ProductPrice: new FormControl,
      ProductCost: new FormControl,
      ProductProfit: new FormControl,
      ProductOnSale: new FormControl,
      ProductCategory: new FormControl,
      ProductDescription: new FormControl,
      //RetailerId: new FormControl
    });
  }

  onSubmit() {
    this._productService.createProduct(this.productForm.value).subscribe(data => {
      this._router.navigate(['/products']);
    })
  }
}
