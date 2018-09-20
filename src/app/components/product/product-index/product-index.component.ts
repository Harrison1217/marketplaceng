import { Component, OnInit } from '@angular/core';
import { ProductsService } from'../../../services/products.service';
import { Product } from'../../../models/Product';

@Component({
  selector: 'app-product-index',
  templateUrl: './product-index.component.html',
  styleUrls: ['./product-index.component.css']
})
export class ProductIndexComponent implements OnInit {

  constructor(private _productService: ProductsService) { }

  ngOnInit() {
    this._productService.getProducts().subscribe((products: Product[]) => {
    });
  }
}
