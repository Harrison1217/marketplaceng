import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Customer } from '../../../models/Customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customer: Customer;
  editCustomerForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _customerService: CustomersService,
              private _ar: ActivatedRoute,
              private _router: Router) {
                this._ar.paramMap.subscribe(p => {
                  this._customerService.getCustomer(p.get('id')).subscribe((singleCustomer: Customer) => {
                    this.customer = singleCustomer;
                    this.createForm();
                  });
                });
               }

  ngOnInit() {
  }

  createForm() {
    this.editCustomerForm = this._form.group({
      CustomerId: new FormControl(this.customer.CustomerId),
      CustomerFirstName: new FormControl(this.customer.CustomerFirstName),
      CustomerLastName: new FormControl(this.customer.CustomerLastName),
      CustomerEmail: new FormControl(this.customer.CustomerEmail),
      CustomerPhone: new FormControl(this.customer.CustomerPhone),
      CustomerStreetAddress: new FormControl(this.customer.CustomerStreetAddress),
      State: new FormControl(this.customer.State),
      City: new FormControl(this.customer.City),
      Zip: new FormControl(this.customer.Zip)
    });
  }

  onSubmit(form) {
    const updateCustomer: Customer = {
      CustomerId: form.value.CustomerId,
      CustomerFirstName: form.value.CustomerFirstName,
      CustomerLastName: form.value.CustomerLastName,
      CustomerEmail: form.value.CustomerEmail,
      CustomerPhone: form.value.CustomerPhone,
      CustomerStreetAddress: form.value.CustomerStreetAddress,
      State: form.value.State,
      City: form.value.City,
      Zip: form.value.Zip
    };
    this._customerService.updateCustomer(updateCustomer).subscribe(d => {
      this._router.navigate([('/customer')]);
    });
  }

}
