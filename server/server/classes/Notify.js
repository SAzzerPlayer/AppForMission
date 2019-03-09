class Notify {
    constructor(obj=Object()){
        this.type=String(); // like,subscribe or system
        this.date=Number(); // microseconds
        this.text=String();
        this.byUser=String(); // Username. User who took like or subscribe on the current user
    }
}