import { Message } from "./message"
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable()
 export class MessagesService{


    constructor(private http : Http){

    }
   messages:Message[]=[
    {
        "id": 1,
        "content": "Hey you! It's me again :-) I attached new(...)",
        "sentFromUser": {
            "id": 2,
            "name": "Nina Jones",
            "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
        },
        "time": "5 minutes ago",
        "opened": false
    }, {
        "id": 2,
        "content": "Hey! I attached some new PSD files for(...)",
        "sentFromUser": {
            "id": 2,
            "name": "Nina Jones",
            "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
        },
        "time": "20 hours ago",
        "opened": false
    }, {
        "id": 3,
        "content": "Good morning, you are fired!",
        "sentFromUser": {
            "id": 3,
            "name": "James Smith",
            "photoUrl": "https://images.pexels.com/users/avatars/326366/tembela-bohle-589.jpeg?w=200&h=200&fit=crop&crop=faces"
        },
        "time": "2 days ago",
        "opened": true
    }, {
        "id": 4,
        "content": "Hello! Could You bring me coffe please?",
        "sentFromUser": {
            "id": 2,
            "name": "Nina Jones",
            "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
        },
        "time": "About 2 weeks ago",
        "opened": true
    }
]
    getMassages() : Message[]{
        return this.messages
    }


    getMassages2() : Observable<Message[]>{
        return this.http.get('./messages.json').pipe(map((resp:Response)=>resp.json()))
    }
}