import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../../messages/message';
import { User } from '../../../users/user';

@Component({
  selector: 'message-list-item',
  templateUrl: './message-list-item.component.html',
  styleUrls: ['./message-list-item.component.css']
})
export class MessageListItemComponent implements OnInit {


  @Input() messageItem:Message;

  opened:Boolean;




  constructor() {
    
   }

  ngOnInit() {
    this.opened = this.messageItem.opened;
  }

}
