import { Component, Input, ViewChild, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatGridList } from '@angular/material';
import { IStock } from 'src/app/shared/models/IStock';

@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock-grid.component.html',
  styleUrls: ['./stock-grid.component.scss']
})
export class StockGridComponent implements AfterViewInit {

  @Input() data: IStock[];
  @Output() rowClick = new EventEmitter<any>();

  displayedColumns: string[] = ['cod', 'name', 'price', 'dyMonth', 'pvp'];
  dataSource: MatTableDataSource<IStock> = new MatTableDataSource<IStock>();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onRowClick(stock: IStock): void {
    this.rowClick.emit(stock);
  }
}
