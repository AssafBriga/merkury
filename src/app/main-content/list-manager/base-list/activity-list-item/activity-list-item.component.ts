import { Component, OnInit, Input } from '@angular/core';
import { Activity } from '../../activities/activity';
import { User } from '../../../users/user';

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.css']
})
export class ActivityListItemComponent implements OnInit {

  @Input() activityItem :Activity;

  whoDidTheActivity:User = {
    "id": 2,
    "name": "Nina Jones",
    "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
  };

  constructor() { }

  ngOnInit() {
  }

}
