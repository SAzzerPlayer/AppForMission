
export default class User{
    constructor(nickname='',password=0,posts=Array(),email='',avatar='',subscribers=Array(),subscribe=Array(),articles=Array(),notifications=Array(),history=Array()){
        this.avatar=avatar;
        this.nickname = nickname;
        this.password = password;
        this.posts = posts;
        this.email = email;
        this.subscribers=subscribers;
        this.subscribe=subscribe;
        this.articles=articles;
        this.notifications=notifications;
        this.history=history;
    }
    getObject(){
        return {
            avatar: this.avatar,
            nickname: this.nickname,
            password: this.password,
            posts: this.posts,
            email:this.email,
            subscribers: this.subscribers,
            subscribe:this.subscribe,
            articles:this.articles,
            notifications:this.notifications,
            history:this.history
        };
    }
}