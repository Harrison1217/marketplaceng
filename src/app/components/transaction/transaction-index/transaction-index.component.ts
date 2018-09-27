import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import {Transaction } from '../../../models/Transaction';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-transaction-index',
  templateUrl: './transaction-index.component.html',
  styleUrls: ['./transaction-index.component.css']
})
export class TransactionIndexComponent implements OnInit {

  constructor(private _transactionService: TransactionsService) { }

  ngOnInit() {
    this._transactionService.getTransactions().subscribe((transactions: Transaction[]) =>{
      this.dataSource = new MatTableDataSource<Transaction>(transactions);
    });
  }
columnNames = ['TransactionId', 'ProductId', 'Product', 'NumItems', 'ProductName', 'ProductQuntity', 'ProductUPC', 'ProductPrice', 'CustomerId', 'Customer', 'TransactionDate', 'buttons']
dataSource: MatTableDataSource<Transaction>
}
