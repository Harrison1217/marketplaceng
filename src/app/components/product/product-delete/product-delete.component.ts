import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
  product: Product;

  constructor(private _productService: ProductsService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._productService.getProduct(p.get('id')).subscribe((singleProduct : Product) => {
        this.product = singleProduct;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._productService.deleteProduct(this.product.ProductId).subscribe(() => {
      this._router.navigate(['/product']);
    });
  }

}
