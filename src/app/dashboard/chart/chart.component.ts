import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

declare var require: any;
let Boost = require('highcharts/modules/boost');
let noData = require('highcharts/modules/no-data-to-display');
let More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public options: any = {
    title: {
      // text: 'Chart.update'
   },

   subtitle: {
       //text: 'Plain'
   },

   xAxis: {
       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
   },

   series: [{
       type: 'column',
       colorByPoint: true,
       data: [200, 120, 220, 120, 180, 120, 190, 120, 210, 120, 200, 120],
       showInLegend: false
   }]
  }
  constructor() { }

  ngOnInit(){
    Highcharts.chart('barchart-container', this.options);
  }
}