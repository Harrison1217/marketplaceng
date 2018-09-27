import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '../../../models/Customer';

@Component({
  selector: 'app-customer-delete',
  templateUrl: './customer-delete.component.html',
  styleUrls: ['./customer-delete.component.css']
})
export class CustomerDeleteComponent implements OnInit {

  customer: Customer;

  constructor(private _customerService: CustomersService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._customerService.getCustomer(p.get('id')).subscribe((singleCustomer: Customer) => {
        this.customer = singleCustomer;
      });
    });
   }

  ngOnInit() {
  }

  onDelete() {
    this._customerService.deleteCustomer(this.customer.CustomerId).subscribe(() => {
      this._router.navigate([('/customer')]);
    });
  }

}
