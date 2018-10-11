import { User } from '../../users/user'

export class Activity {
    id: Number;
    whoDidUser: User;
    didWhat: String;
    toWho: String;
    time: String;

    constructor(whoDidUser: User, didWhat: String, toWho:String, time:String, ) {
        this.whoDidUser = whoDidUser;
        this.didWhat = didWhat;
        this.toWho = toWho;
        this.time = time;
    }
}
