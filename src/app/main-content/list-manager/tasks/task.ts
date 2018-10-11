export class Task{
    id: Number;
    title: String;
    deadline: String;

    constructor(title:String,deadline:String){
        this.title = title;
        this.deadline = deadline;
    }
}