import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Role } from '../../models/Role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  public _registerForm: FormGroup;

  selectedValue: string;

  roles: Role[] = [
    { value: 'Customer', role: 'Customer' },
    { value: 'Retailer', role: 'Retailer' }
  ];

  constructor(private _form: FormBuilder, private _authService: AuthService, private _router: Router) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this._registerForm = this._form.group({
      email: new FormControl,
      password: new FormControl,
      confirmPassword: new FormControl,
      role: new FormControl
    });
  }

  onSubmit() {
    console.log(this._registerForm.value);
    this._authService
      .register(this._registerForm.value)
      .subscribe( () => this._authService.login(this._registerForm.value));

    if (this._registerForm.contains('Customer')) {
      this._router.navigate([('/customer/create')]);
    }

    if (this._registerForm.contains('Retailer')) {
      this._router.navigate([('/retailer/create')]);
    }
  }
}
