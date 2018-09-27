import { Component, OnInit } from '@angular/core';
import { RetailersService } from '../../../services/retailer.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-retailer-create',
  templateUrl: './retailer-create.component.html',
  styleUrls: ['./retailer-create.component.css']
})
export class RetailerCreateComponent implements OnInit {

  retailerForm: FormGroup;

  constructor(private _retailerService: RetailersService, private _form: FormBuilder, private _router: Router) {
    this.createForm();
  }
  ngOnInit() {
  }

  createForm() {
    this.retailerForm = this._form.group({
      RetailerName: new FormControl,
      RetailerEin: new FormControl,
      RetailerAddress: new FormControl,
      RetailerEmail: new FormControl,
      RetailerPhone: new FormControl
    });
  }


<<<<<<< HEAD
  onSubmit() {
    this._retailerService.createRetailers(this.retailerForm.value).subscribe(data => {
      this._router.navigate(['/retailers']);
    });
  }
=======
onSubmit(){
  this._retailerService.createRetailers(this.retailerForm.value).subscribe(data => {
    this._router.navigate(['/retailer'])
  })
}
>>>>>>> 50f9d96d55c358afbebd1480ee1d94588ec272f3
}
