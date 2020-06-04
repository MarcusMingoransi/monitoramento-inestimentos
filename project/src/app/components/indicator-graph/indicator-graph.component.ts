import { Component, OnInit, Input } from '@angular/core';
import { IStock } from 'src/app/shared/models/IStock';

@Component({
  selector: 'app-indicator-graph',
  templateUrl: './indicator-graph.component.html',
  styleUrls: ['./indicator-graph.component.scss']
})
export class IndicatorGraphComponent implements OnInit {

  private _stock: IStock;

    @Input() set stock(value: IStock) {

       this._stock = value;
       this.updateChart(this._stock);
    }

    get stock(): IStock {
        return this._stock;
    }

  barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      labels: {
        fontColor: 'white',
      },
      display: false
    },
    title: {
        display: true,
        fontColor: 'white',
        text: 'Indicadores'
    },
    scales: {
      yAxes: [{
          ticks: {
              fontColor: 'white',
              callback: (value, index, values) => {
                return `${value}`;
              }
          },
      }],
      xAxes: [{
            ticks: {
                fontColor: 'white'
            },
        }]
    }
  };

  barChartLabels = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  barChartType = 'line';
  barChartLegend = true;
  barChartData = [
    {data: [65, 59, 80, 81, 56, 55, 40, 74, 68, 60, 62, 76], label: 'Valor'},
  ];

  constructor() { }

  ngOnInit() {
  }

  updateChart(stock: IStock) {
    if (stock) {
      this.barChartData[0].data = this.stock.apprLastYear;
    }
  }

}
