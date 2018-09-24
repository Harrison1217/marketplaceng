import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { Transaction } from '../../../models/Transaction';
import { TransactionsService } from '../../../services/transactions.service';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.css']
})
export class TransactionDetailComponent implements OnInit {

  transaction: Transaction;

  constructor(private _activatedRoute: ActivatedRoute, private _transactionService: TransactionsService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData => {
      console.log(routeData);
    });
  }

}
