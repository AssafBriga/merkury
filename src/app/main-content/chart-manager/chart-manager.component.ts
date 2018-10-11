import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'chart-manager',
  templateUrl: './chart-manager.component.html',
  styleUrls: ['./chart-manager.component.css']
})
export class ChartManagerComponent implements OnInit {



  pieChartData =  {
    chartType: 'PieChart',
    dataTable: [
      ['Task', 'Hours per Day'],
      ['Websites',     11],
      ['Logo',      2],
      ['Social Media',  2],
      ['Adwords',    7],
      ['E-Commerce',    7]
    ],
   
    options: {
      chartArea:{left:20,top:0,width:'100%',height:'100%'},
      legend:{alignment:'center'},
      colors: ['#295cad', '#4b7ed1', '#1865e2', '#0d3068','#3583ff'],
    pieHole: 0.6,
    pieSliceText:'none',
    pieSliceBorderColor:'transparent'},
  };




  lineChartData = {
    chartType: 'LineChart',
    dataTable: [
      ['Year', 'Sales',],
      ['2004',  1000,],
      ['2005',  1170,],
      ['2006',  660,],
      ['2007',  1030,]
    ],
  
    options : {
      chartArea:{left:40,top:20,width:'90%',height:'80%'},
      curveType: 'function',
      legend: { position: 'none' },
    },
  }
  

  constructor() { }

  ngOnInit() {
  }

}
