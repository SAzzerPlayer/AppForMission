
class User {
    constructor(obj=Object()){
        this.username=String();
        this.password=String();
        this.avatar=String();
        this.email=String();
        this.subscribers=Array();
        this.subscribe=Array();
    }
}
module.exports.getUser = function(){
  return new User();
};
