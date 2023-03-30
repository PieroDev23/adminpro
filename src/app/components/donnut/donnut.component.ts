import { Component, Input, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-donnut',
  templateUrl: './donnut.component.html',
  styleUrls: ['./donnut.component.css'],
})
export class DonnutComponent implements OnInit {
  @Input() public title: string = 'Untitled';
  @Input() public labels: Array<string> = ['no labels'];
  @Input() public datasets = [
    {
      data: [350, 450, 100],
      backgroundColor: ['#4392F1', '#48A9A6', '#F25F5C'],
    },
  ];

  //chart
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [],
  };

  //chart type
  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.doughnutChartData.labels = this.labels;
    this.doughnutChartData.datasets = this.datasets;
  }
}
