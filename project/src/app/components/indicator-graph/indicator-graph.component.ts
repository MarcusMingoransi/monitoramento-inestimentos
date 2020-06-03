import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-graph',
  templateUrl: './indicator-graph.component.html',
  styleUrls: ['./indicator-graph.component.scss']
})
export class IndicatorGraphComponent implements OnInit {

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  barChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  barChartType = 'line';
  barChartLegend = true;
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 74, 68, 60, 62, 76], label: 'Ação Atual'},
    {data: [28, 48, 40, 19, 86, 27, 88, 81, 85, 74, 66, 70], label: 'Ibovespa'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
