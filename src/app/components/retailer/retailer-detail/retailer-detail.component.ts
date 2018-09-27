import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { RetailersService } from '../../../services/retailer.service';
<<<<<<< HEAD
import { Retailer } from '../../../models/Retailer';
=======
>>>>>>> 50f9d96d55c358afbebd1480ee1d94588ec272f3

@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.css']
})
export class RetailerDetailComponent implements OnInit {

<<<<<<< HEAD
  retailer: Retailer;

  constructor(private _activatedRoute: ActivatedRoute, private _retailerServices: RetailersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._retailerServices.getRetailer(routeData.get('id')).subscribe((singleRetailer: Retailer) => {
        this.retailer = singleRetailer;
      })
      console.log(routeData);
    })
=======
  retailer:RetailersService;
  constructor(private _activatedRoute: ActivatedRoute, private _retailerService:RetailersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._retailerService.getRetailer(routeData.get('id')).subscribe((singleRetailer: RetailersService) => {
        this._retailerService = singleRetailer;
      });
    });
>>>>>>> 50f9d96d55c358afbebd1480ee1d94588ec272f3
  }

}
