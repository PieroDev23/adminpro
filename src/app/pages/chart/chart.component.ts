import { Component } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styles: [],
})
export class ChartComponent {
  public titleSales = 'sales';

  public labelsSales = ['label1', 'label2', 'label3'];

  public datasetsSales = [
    {
      data: [100, 200, 300],
      backgroundColor: ['#4292F1', '#38A9A6', '#F2555A'],
    },
  ];



  public titleParty = 'sales';

  public labelsParty = ['tacos', 'pastel', 'cerveza'];

  public datasetsParty = [
    {
      data: [20, 230, 3100],
      backgroundColor: ['#4291F1', '#45A9A6', '#A2555A'],
    },
  ];

}
