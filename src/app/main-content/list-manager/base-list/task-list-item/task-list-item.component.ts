import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../../tasks/task';

@Component({
  selector: 'task-list-item',
  templateUrl: './task-list-item.component.html',
  styleUrls: ['./task-list-item.component.css']
})
export class TaskListItemComponent implements OnInit {



  @Input() taskItem:Task;

  delay:Boolean;

  constructor() { }

  ngOnInit() {
    this.delay = this.taskItem.deadline.indexOf('delay') > -1
  }

}
