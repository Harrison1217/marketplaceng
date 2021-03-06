import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;
  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      this._productService.getProduct(routeData.get('id')).subscribe((singleProduct: Product) => {
        console.log(singleProduct);
        this.product = singleProduct;
      });
    });
  }

}
