import { Component, OnInit, Input } from '@angular/core';

export interface PeriodicElement {
  cod: string;
  name: string;
  price: number;
}


@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock-grid.component.html',
  styleUrls: ['./stock-grid.component.scss']
})
export class StockGridComponent implements OnInit {

  @Input() dataSource = [];
  displayedColumns: string[] = ['cod', 'name', 'price'];

  constructor() { }

  ngOnInit() {
  }

}
