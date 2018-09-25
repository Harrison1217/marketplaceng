import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { RetailersService } from '../../../services/retailer.service';

@Component({
  selector: 'app-retailer-detail',
  templateUrl: './retailer-detail.component.html',
  styleUrls: ['./retailer-detail.component.css']
})
export class RetailerDetailComponent implements OnInit {

  retailer:RetailersService;
  constructor(private _activatedRoute: ActivatedRoute, private _retailerService:RetailersService) { }

  ngOnInit() {
    this._activatedRoute.paramMap.subscribe(routeData =>{
      this._retailerService.getRetailer(routeData.get('id')).subscribe((singleRetailer: RetailersService) => {
        this._retailerService = singleRetailer;
      });
    });
  }

}
