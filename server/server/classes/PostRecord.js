class PostRecord {
    constructor(obj = Object()){
        this.username = String();
        this.key = String();
        this.date = Number();
    }
}
module.exports.getPostRecord=()=>{
    return new PostRecord();
};