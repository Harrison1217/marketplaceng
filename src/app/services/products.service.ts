import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../models/Product';

const ApiUrl = 'https://efamarketplacewebapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get(`${ApiUrl}/Product`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }

  createProduct(product: Product) {
    return this._http.post(`${ApiUrl}/Product`, product, { headers: this.getHeaders() });
  }

  getProduct(id: string) {
    return this._http.get(`${ApiUrl}/Product/${id}`, { headers: this.getHeaders() });
  }

  updateProduct(product: Product){
    return this._http.put(`${ApiUrl}/Product/${product.ProductId}`, product, { headers: this.getHeaders() });
  }
}

