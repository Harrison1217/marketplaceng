import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const ApiUrl = 'http://kcpelevennoteapie.azurewebsites.net/api';

@Injectable({
  providedIn: 'root'
})

export class CustomersService {

  constructor(private _http: HttpClient) { }

  getCustomers() {
    return this._http.get(`${ApiUrl}/customer`, { headers: this.getHeaders() });
  }

  getHeaders() {
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
