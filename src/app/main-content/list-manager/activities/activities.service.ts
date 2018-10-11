import { Activity } from "./activity"
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
export class ActivitiesService{


    constructor(private http : Http) {
    }

   activities:Activity[]=[
        {
            "id": 1,
            "whoDidUser": {
                "id": 2,
                "name": "Nina Jones",
                "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
            },
            "didWhat": "added a new project",
            "toWho": "Free UI Kit",
            "time": "Just now"
        }, {
            "id": 2,
            "whoDidUser": {
                "id": 3,
                "name": "James Smith",
                "photoUrl": "https://images.pexels.com/users/avatars/326366/tembela-bohle-589.jpeg?w=200&h=200&fit=crop&crop=faces"
            },
            "didWhat": "commented project",
            "toWho": "Free PSD Template",
            "time": "40 minutes ago"
        }, {
            "id": 3,
            "whoDidUser": {
                "id": 4,
                "name": "Alex Clooney",
                "photoUrl": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://s3.amazonaws.com/arc-authors/washpost/f6a10cf3-88e8-428b-babf-3ed4bc3abc8a.png&w=200&h=200&t=20170517a"
            },
            "didWhat": "completed task",
            "toWho": "Symu Website",
            "time": "1 hour ago"
        }, {
            "id": 4,
            "whoDidUser": {
                "id": 5,
                "name": "Alexandra Spears",
                "photoUrl": "https://cdn.theatlantic.com/assets/media/img/authors/g/megan-garber/headshot/200.jpg"
            },
            "didWhat": "added a new project",
            "toWho": "Free PSD(...)",
            "time": "3 hours ago"
        }
    ]
    
    getActivities() : Activity[]{
        return this.activities
    }


    getActivities2() : Observable<Activity[]>{
        return this.http.get('./activities.json').pipe(map((resp:Response)=>resp.json()))
    }
}