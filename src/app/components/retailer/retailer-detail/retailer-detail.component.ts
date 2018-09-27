import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { RetailersService } from '../../../services/retailer.service';
import { Retailer } from '../../../models/Retailer';

@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.css']
})
export class RetailerDetailComponent implements OnInit {

  retailer: Retailer;

  constructor(private _activatedRoute: ActivatedRoute, private _retailerServices: RetailersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._retailerServices.getRetailer(routeData.get('id')).subscribe((singleRetailer: Retailer) => {
        this.retailer = singleRetailer;
      })
      console.log(routeData);
    })
  }

}
