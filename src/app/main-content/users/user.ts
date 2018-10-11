export class User{
    id:Number;
    name: String;
    photoUrl: String;

    constructor(name:String,photoUrl:String){
        this.name = name;
        this.photoUrl = photoUrl;
    }
}