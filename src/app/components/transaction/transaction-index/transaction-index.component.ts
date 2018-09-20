import { Component, OnInit } from '@angular/core';
import {TransactionService, TransactionsService } from '../../../services/transactions.service';
import {Transaction } from '../../../models/Transaction';

@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrls: ['./transaction-index.component.css']
})
export class TransactionIndexComponent implements OnInit {

  constructor(private _transactionService: TransactionsService) { }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: Transaction[]) =>{
    });
  }

}
