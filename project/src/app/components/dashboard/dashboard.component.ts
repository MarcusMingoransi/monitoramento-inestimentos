import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api-service.service';
import { HttpHeaders } from '@angular/common/http';

export interface PeriodicElement {
  cod: string;
  name: string;
  price: number;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {cod: 'Hydrogen', name: 'Hydrogen', price: 1.0079, symbol: 'H'},
//   {name: 'Helium', price: 4.0026, symbol: 'He'},
//   {name: 'Lithium', price: 6.941, symbol: 'Li'},
//   {name: 'Beryllium', price: 9.0122, symbol: 'Be'},
//   {name: 'Boron', price: 10.811, symbol: 'B'},
//   {name: 'Carbon', price: 12.0107, symbol: 'C'},
//   {name: 'Nitrogen', price: 14.0067, symbol: 'N'},
//   {name: 'Oxygen', price: 15.9994, symbol: 'O'},
//   {name: 'Fluorine', price: 18.9984, symbol: 'F'},
//   {name: 'Neon', price: 20.1797, symbol: 'Ne'},
// ];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['cod', 'name', 'price'];
  // dataSource = ELEMENT_DATA;
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

}
