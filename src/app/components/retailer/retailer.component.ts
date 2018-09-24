import { Component, OnInit } from '@angular/core';
import { RetailersService } from '../../services/retailer.service';
import { Retailer } from '../../models/Retailer';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-retailer-index',
  templateUrl: './retailer.component.html',
  styleUrls: ['./retailer.component.css']
})

export class RetailerComponent implements OnInit {

  columnNames = ['RetailerId', 'RetailerName', 'RetailerEin', 'RetailerAddress', 'RetailerEmail', 'RetailerPhone',];
  dataSource: MatTableDataSource<Retailer>;

  constructor(private _retailerService: RetailersService) { }

  ngOnInit() {
    this._retailerService.getRetailers().subscribe((retailer: Retailer[]) => {
      this.dataSource = new MatTableDataSource<Retailer>(retailer);
    });
  }

}

