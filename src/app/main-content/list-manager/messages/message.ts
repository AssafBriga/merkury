import { User } from '../../users/user'


export class Message{
    id: Number;
    content: String;
    sentFromUser: User;
    time: String;
    opened: Boolean;

    constructor(content: String,sentFromUser:User,time:String,opened: Boolean){
        this.content = content;
        this.sentFromUser = sentFromUser;
        this.time = time;
        this.opened = opened;
    }
}