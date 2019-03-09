
export default class Notify{
    constructor(id=Date.now(),fromUser='',post='',type='',date=''){
        this.id = id;
        this.fromUser=fromUser;
        this.post=post;
        this.type=type;
        this.date=date;
    }
    getObject(){
        return {
            id:this.id,
            fromUser:this.fromUser,
            post:this.post,
            type:this.type,
            date:this.date
        }
    }
}