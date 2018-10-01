import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { $ } from '../../../node_modules/protractor';
import { Retailer } from '../models/Retailer';

const ApiUrl = 'http://localhost:51668/api';

@Injectable({
  providedIn: 'root'
})
export class RetailersService {
  constructor(private _http: HttpClient) { }

  getRetailers() {
    return this._http.get(`${ApiUrl}/retailer`, { headers: this.getHeaders() });
  }
  createRetailers(retailer: Retailer) {
    return this._http.post(`${ApiUrl}/retailer`, retailer, { headers: this.getHeaders() });
  }
  getRetailer(id: string) {
    return this._http.get(`${ApiUrl}/retailer/${id}`, { headers: this.getHeaders() });
  }
  updateRetailer(retailer: Retailer) {
    return this._http.put(`${ApiUrl}/retailer`, retailer, { headers: this.getHeaders() });
  }

  deleteRetailer(id: number) {
    return this._http.delete(`${ApiUrl}/retailer/${id}`, { headers: this.getHeaders() });
  }
  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
