import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../../services/transactions.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-transaction-create',
  templateUrl: './transaction-create.component.html',
  styleUrls: ['./transaction-create.component.css']
})
export class TransactionCreateComponent implements OnInit {

  transactionForm: FormGroup;

  constructor(private _transactionService: TransactionsService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
   }

  ngOnInit() {
  }

  createForm(){
    this.transactionForm = this._form.group({
      Transaciton: new FormControl,
      Product: new FormControl,
      ProductName: new FormControl,
      ProductPrice: new FormControl,
            
    });
  }
    onSubmit(){
      this._transactionService.createTransaction(this.transactionForm.value).subscribe(data => {
        this._router.navigate(['/transactions']);
      });
    }
  

}
