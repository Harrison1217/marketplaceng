import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
const ApiUrl = 'https://efamarketplaceapi.azurewebsites.net';
@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private _http: HttpClient) { }
  getTransactions() {
    return this._http.get(`${ApiUrl}/Transactions`, { headers: this.getHeaders() });
  }
  private getHeaders(){
    return new HttpHeaders().set('Authorization', `Bearer ${localStorage.getItem('id_token')}`);
  }
}
