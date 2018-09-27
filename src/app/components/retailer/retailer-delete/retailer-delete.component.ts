import { Component, OnInit } from '@angular/core';
import { RetailersService } from '../../../services/retailer.service';
import { ActivatedRoute, Router } from '../../../../../node_modules/@angular/router';
import { Retailer } from '../../../models/Retailer';

@Component({
  selector: 'app-retailer-delete',
  templateUrl: './retailer-delete.component.html',
  styleUrls: ['./retailer-delete.component.css']
})
export class RetailerDeleteComponent implements OnInit {


  retailer: Retailer;

  constructor(private _retailerService: RetailersService, private _ar: ActivatedRoute, private _router: Router) {
    this._ar.paramMap.subscribe(p => {
      this._retailerService.getRetailer(p.get('id')).subscribe((singleRetailer: Retailer) =>{
        this.retailer = singleRetailer;
      });
    });
   }
   
   ngOnInit() {
   }
   
   onDelete() {
    this._retailerService.deleteRetailer(this.retailer.RetailerId).subscribe(() => {
      this._router.navigate([('/retailer')]);
    });
  }

}
