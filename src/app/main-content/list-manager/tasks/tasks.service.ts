import {Task} from "./task"
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class TasksService{


    constructor(private http : Http) {
    }

   tasks:Task[]=[
        {
        "id": 1,
        "title": "New Website for Symo.co",
        "deadline": "5 days delays"
         }, {
        "id": 2,
        "title": "Free buisnes PSD Tamplate",
        "deadline": "2 days delays"
          }, {
        "id": 3,
        "title": "New logo for JCD.pl",
        "deadline": "5 days left"
         }, {
        "id": 4,
        "title": "Free Icons Set Vol. 3",
        "deadline": "10 days left"
         }
    ];

    getTasks() : Task[]{
        return this.tasks
    }


    getTasks2() : Observable<Task[]>{
        return this.http.get('./tasks.json').pipe(map((resp:Response)=>resp.json()))
    }
}


