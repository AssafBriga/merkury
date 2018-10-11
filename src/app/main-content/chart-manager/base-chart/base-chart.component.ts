import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-chart',
  templateUrl: './base-chart.component.html',
  styleUrls: ['./base-chart.component.css']
})
export class BaseChartComponent implements OnInit {

  @Input() chartTitle:String;


  durations: any[] = [
    {value: 'lastYear', viewValue: 'Last Year'},
    {value: 'lastMounth', viewValue: 'Last Mounth'},
    {value: 'lastWeek', viewValue: 'Last Week'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
