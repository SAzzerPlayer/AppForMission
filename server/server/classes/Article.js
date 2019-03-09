class Article{
    constructor(obj=Object()){
        this.id=Number();
        this.key=Number(); // unique key
        this.date=Number(); // microseconds
        this.title=String(); // a short title
        this.text=String();
        this.filter=String();//filter for flatlist,when articles can have different type of story
    }
}