import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'base-list',
  templateUrl: './base-list.component.html',
  styleUrls: ['./base-list.component.css']
})
export class BaseListComponent implements OnInit {


  @Input() listTitle:String;
  @Input() list:any;

  @Input() warnItems:Number;
  @Input() infoItems:Number;

  constructor() { }

  ngOnInit() {
  }

}
