import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from '../models/Customer';

const ApiUrl = 'https://efamarketplacewebapi.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomers() {
    return this._http.get(`${ApiUrl}/Customer`, { headers: this.getHeaders() });
  }

  createCustomer(customer: Customer) {
    return this._http.post(`${ApiUrl}/Customer`, customer, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
