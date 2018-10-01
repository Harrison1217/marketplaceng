import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product;

  editProductForm: FormGroup;
  constructor(private _form: FormBuilder,
              private _productService: ProductsService,
              private _ar: ActivatedRoute,
              private _router: Router) {

      this._ar.paramMap.subscribe(p => {
        this._productService.getProduct(p.get('id')).subscribe((singleProduct: Product) => {
          this.product = singleProduct;
          this.createForm();
        });
      });
  }

  ngOnInit() {
  }

  createForm() {
    this.editProductForm = this._form.group({
      ProductId: new FormControl(this.product.ProductId),
      ProductName: new FormControl(this.product.ProductName),
      ProductPrice: new FormControl(this.product.ProductPrice),
      ProductQuantity: new FormControl(this.product.ProductQuantity),
      ProductCategory: new FormControl(this.product.ProductCategory),
      ProductUpc: new FormControl(this.product.ProductUpc),
      ProductDescription : new FormControl(this.product.ProductDescription),
      RetailerId: new FormControl(this.product.RetailerId),
      ProductCost: new FormControl(this.product.ProductCost)

    });
  }

  onSubmit(form) {
    const updateProduct: Product = {
      ProductId: form.value.ProductId,
      ProductName: form.value.ProductName,
      ProductPrice: form.value.ProductPrice,
      ProductQuantity: form.value.ProductQuantity,
      ProductCategory: form.value.ProductCategory,
      ProductUpc: form.value.ProductUpc,
      ProductDescription: form.value.ProductDescription,
      ProductCost: form.value.ProductCost,
      RetailerId: form.value.RetailerId,
      

    };
    this._productService.updateProduct(updateProduct).subscribe(d => {
      this._router.navigate(['/product']);
    })
  }
}
