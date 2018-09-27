import { Component, OnInit } from '@angular/core';
import { CustomersService } from '../../../services/customers.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm: FormGroup;

  constructor(private _customerService: CustomersService, private _form: FormBuilder, private _router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.customerForm = this._form.group({
      CustomerFirstName: new FormControl,
      CustomerLastName: new FormControl,
      CustomerEmail: new FormControl,
      CustomerPhone: new FormControl,
      CustomerStreetAddress: new FormControl,
      State: new FormControl,
      City: new FormControl,
      Zip: new FormControl
    });
  }

  onSubmit() {
    console.log(this.customerForm.value);
    this._customerService.createCustomer(this.customerForm.value).subscribe(data => {
      this._router.navigate([('/customer')]);
    });
  }
}
