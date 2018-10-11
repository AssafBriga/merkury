import { Injectable } from '@angular/core';
import { User } from '../users/user';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';
import { useAnimation } from '@angular/animations';

@Injectable()
export class UsersService{


    users:User[]= [
        {
            "id": 1,
            "name": "Assaf Briga",
            "photoUrl": "https://media.licdn.com/dms/image/C5103AQEGu2hYvLI0wA/profile-displayphoto-shrink_200_200/0?e=1544659200&v=beta&t=r3glF0ryuvG2_EKhmlbOZgjSa688DM1BhAMVZmlNWQA"
        }, {
            "id": 2,
            "name": "Nina Jones",
            "photoUrl": "https://cdn.theatlantic.com/assets/media/None/FullSizeRender-6/large_headshot.jpg"
        }, {
            "id": 3,
            "name": "James Smith",
            "photoUrl": "https://images.pexels.com/users/avatars/326366/tembela-bohle-589.jpeg?w=200&h=200&fit=crop&crop=faces"
        }, {
            "id": 4,
            "name": "Alex Clooney",
            "photoUrl": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://s3.amazonaws.com/arc-authors/washpost/f6a10cf3-88e8-428b-babf-3ed4bc3abc8a.png&w=200&h=200&t=20170517a"
        }, {
            "id": 5,
            "name": "Alexandra Spears",
            "photoUrl": "https://cdn.theatlantic.com/assets/media/img/authors/g/megan-garber/headshot/200.jpg"
        }
    ]


    getUsers() : User[]{
        return this.users;

    }



   

    constructor(private http:Http){

    }

    // getUsers():Observable<User[]>{
    //     return this.http.get('./app/users/users.json')
    //     .map((resp: User) => resp.json())
    // }

}