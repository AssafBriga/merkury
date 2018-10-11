import { Component, OnInit } from '@angular/core';
import {Message} from "./messages/message";
import {Task} from "./tasks/task";
import {Activity} from './activities/activity';
import {MessagesService} from "./messages/messages.service";
import {ActivitiesService} from "./activities/activities.service";
import {TasksService} from "./tasks/tasks.service";

@Component({
  selector: 'list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.css'],
  providers:[MessagesService,ActivitiesService,TasksService],
})
export class ListManagerComponent implements OnInit {

   tasks:Task[] = [];
   messages:Message[] = [];
   activities:Activity[] = [];





   didntReadMassages:number = 0
   checkForDidntReadMessages(messages){
    for(let i = 0;i<this.messages.length;i++){
      console.log(i)
       if (!this.messages[i].opened){
         this.didntReadMassages++ ;
         console.log("msg ddnt read "+this.didntReadMassages)
       }
    }
  }


   numOfDelayItems:number = 0;
   checkForDelayTask(tasks){
     for(let i = 0;i<this.tasks.length;i++){
        if(this.tasks[i].deadline.indexOf('delay') > -1){
          this.numOfDelayItems++ ;
        }
     }
   }

  constructor(private messagesService : MessagesService, private tasksService : TasksService ,private activitiesService : ActivitiesService ) {
    this.messages = messagesService.getMassages();
    this.tasks = tasksService.getTasks();
    this.activities = activitiesService.getActivities();
    this.checkForDidntReadMessages(this.messages);
    this.checkForDelayTask(this.tasks);
    
    
   }

  ngOnInit() {
    
  }

}
