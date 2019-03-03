
export default class Notify{
    constructor(fromUser='',post='',type='',date=''){
        this.fromUser=fromUser;
        this.post=post;
        this.type=type;
        this.date=date;
    }
    getObject(){
        return {
            fromUser:this.fromUser,
            post:this.post,
            type:this.type,
            date:this.date
        }
    }
}