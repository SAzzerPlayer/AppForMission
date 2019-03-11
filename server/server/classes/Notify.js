class Notify {
    constructor(obj=Object()){
        this.id=Number();
        this.key=String(); // key of post
        this.type=String(); // like,subscribe or system
        this.date=Number(); // microseconds
        this.text=String();
        this.byUser=String(); // Username. User who took like or subscribe on the current user
    }
}
module.exports.getNotify = function(){
    return new Notify();
};