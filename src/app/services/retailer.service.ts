import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'https://efamarketplacewebapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  constructor(private _http: HttpClient) {}
  getRetailers() {
    return this._http.get(`${ApiUrl}/retailer`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
