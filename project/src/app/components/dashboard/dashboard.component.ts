import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api-service.service';
import { HttpHeaders } from '@angular/common/http';
import { IStock } from 'src/app/shared/models/IStock';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  stock: IStock;
  dataSource = [];

  constructor(private apiService: ApiService) {}



  ngOnInit() {
    // const options = {
    //   headers: 'Content-Type: application/json; charset=UTF-8'
    // };
    const headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});
    this.apiService.get('http://1489o.mocklab.io/stocks').subscribe((result) => {
      console.log(result);
      this.dataSource = result['stocks'];
    });
  }

  onRowClick(stock: IStock) {
    console.log(stock);
    this.stock = stock;
  }

}
