
/*
* It's codefile contains class of object datas.
* POST
 */

export default class POST{
    constructor(obj={
        id:0,
        image:'',
        likes:0,
        text:'',
        user:''
    }){
        this.id = obj.id;
        this.image = obj.image;
        this.likes=obj.likes;
        this.text=obj.text;
        this.user=obj.user;
    }
    getObject(){
        return {
            id:this.id,
            image:this.image,
            likes:this.likes,
            text:this.text,
            user:this.user
        }
    }
    toString(){
        return this.id+' '+this.image+' '+this.likes+' '+this.text+' '+this.user;
    }

}
