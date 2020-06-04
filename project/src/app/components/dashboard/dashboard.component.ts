import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api-service.service';
import { HttpHeaders } from '@angular/common/http';
import { IStock } from 'src/app/shared/models/IStock';

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stock: IStock;
  dataSource = [];
  cols = 5;

  breakpoints = {
    sm: '(max-width: 576px)',
    md: '(max-width: 768px)',
    lg: '(max-width: 992px)',
    xl: '(max-width: 1200px)',
  };

  constructor(private apiService: ApiService, breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      this.breakpoints.sm, this.breakpoints.md, this.breakpoints.lg, this.breakpoints.xl
    ]).subscribe(result => {
      console.log(result);
      if (result.breakpoints[this.breakpoints.sm]) {
        console.log('sm');
        this.cols = 1;
      } else if (result.breakpoints[this.breakpoints.md]) {
        console.log('md');
        this.cols = 5;
      } else if (result.breakpoints[this.breakpoints.lg]) {
        console.log('lg');
        this.cols = 5;
      } else if (result.breakpoints[this.breakpoints.xl]) {
        console.log('xl');
        this.cols = 5;
      }
      // this.isMobile = result.matches;
    });
  }



  ngOnInit() {
    // const options = {
    //   headers: 'Content-Type: application/json; charset=UTF-8'
    // };
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.apiService.get('http://1489o.mocklab.io/stocks').subscribe((result) => {
      this.dataSource = result['stocks'];
      this.stock = this.dataSource[0];
    });
  }

  onRowClick(stock: IStock) {
    this.stock = stock;
  }
}
