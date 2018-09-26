import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from '../../../node_modules/protractor';
import { Retailer } from '../models/Retailer';

const ApiUrl = 'https://efamarketplacewebapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  constructor(private _http: HttpClient) {}
  
  getRetailers() {
    return this._http.get(`${ApiUrl}/Retailer`, { headers: this.getHeaders() });
  }
  createRetailers(retailer: Retailer){
    return this._http.post(`${ApiUrl}/Retailer`, retailer, {headers: this.getHeaders()});
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
