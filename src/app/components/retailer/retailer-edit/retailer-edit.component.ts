import { Component, OnInit } from '@angular/core';
import { Retailer } from '../../../models/Retailer';
import { FormGroup, FormBuilder, FormControl } from '../../../../../node_modules/@angular/forms';
import { RetailersService } from '../../../services/retailer.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-retailer-edit',
  templateUrl: './retailer-edit.component.html',
  styleUrls: ['./retailer-edit.component.css']
})
export class RetailerEditComponent implements OnInit {

  retailer: Retailer;
  editRetailerForm: FormGroup;

  constructor(private _form: FormBuilder,
              private _retailerService:RetailersService,
              private _ar:ActivatedRoute,
              private _router: Router) {

          this._ar.paramMap.subscribe(p => {
            this._retailerService.getRetailer(p.get('id')).subscribe((singleRetailer: Retailer) => {
              this.retailer = singleRetailer;
              this.createForm();
            });
          });
               }

  ngOnInit() {
  }

  createForm(){
    this.editRetailerForm = this._form.group({
      RetailerId: new FormControl(this.retailer.RetailerId),
      RetailerName: new FormControl(this.retailer.RetailerName),
      RetailerEin: new FormControl(this.retailer.RetailerEin),
      RetailerEmail: new FormControl(this.retailer.RetailerEmail),
      RetailerPhone: new FormControl(this.retailer.RetailerPhone),
      RetailerAddress: new FormControl(this.retailer.RetailerAddress),
    })
  }
  onSubmit(form){
    const updateRetailer: Retailer = {
      RetailerId: form.value.RetailerId,
      RetailerName: form.value.RetailerName,
      RetailerEin: form.value.RetailerEin,
      RetailerEmail: form.value.RetailerEmail,
      RetailerPhone: form.value.RetailerPhone,
      RetailerAddress: form.value.RetailerAddress,
    };
    this._retailerService.updateRetailer(updateRetailer).subscribe(d => {
      this._router.navigate(['retailer']);
    });
  }
}
