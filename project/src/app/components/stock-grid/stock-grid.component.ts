import { Component, Input, ViewChild, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatSort, MatGridList } from '@angular/material';
import { IStock } from 'src/app/shared/models/IStock';

@Component({
  selector: 'app-stock-grid',
  templateUrl: './stock-grid.component.html',
  styleUrls: ['./stock-grid.component.scss']
})
export class StockGridComponent {

  @Input() data: IStock[];
  @Output() rowClick = new EventEmitter<any>();

  displayedColumns: string[] = ['cod', 'name', 'price', 'dyMonth', 'pvp'];
  dataSource: MatTableDataSource<IStock>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @ViewChild('grid') grid: MatGridList;

  gridByBreakpoint = {
    xl: 8,
    lg: 6,
    md: 4,
    sm: 2,
    xs: 1
  };

  constructor() {
  }

  ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    console.log(this.rowClick);
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  onRowClick(stock: IStock): void {
    console.log(stock);
    this.rowClick.emit(stock);
  }
}
