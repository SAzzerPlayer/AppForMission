class Post {
    constructor(obj=Object()){
        this.id=Number(); // id for each user. Must be unique and can have a different number
        this.key=String(); // An unique key
        this.image=String();
        this.text=String();
        this.likes=Array();//Array of strings. This is a list of users
    }
}
module.exports.getPost = function(){
    return new Post();
};