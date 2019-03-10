
// Connecting to express
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
//Creating an object of server
const app = express();
//Generator string key
const key_generator=require("random-key-generator");
//Define an handler for route "/"
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser=express.json();
//Import classes of data
const user = require('./classes/User');
const post = require('./classes/Post');
const notify = require('./classes/Notify');
const PostMethods = {
    PostNewUser: (request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = user.getUser();
            [temp.username,temp.password,temp.email]=[request.body.username,request.body.password,request.body.email];
            let users_path = __dirname+"/src/users/"+temp.username+".json";
            let posts_path = __dirname+"/src/posts/"+temp.username+".json";
            let notifies_path = __dirname+"/src/notifies/"+temp.username+".json";
            let history_path = __dirname+"/src/history/"+temp.username+".json";
            if(!fs.existsSync(users_path)){
                fs.writeFileSync(users_path,JSON.stringify(temp,null," "));
                fs.writeFileSync(posts_path,JSON.stringify({posts:[],amount:0},null," "));
                fs.writeFileSync(notifies_path,JSON.stringify({notifies:[],amount:0},null," "));
                fs.writeFileSync(history_path,JSON.stringify({notifies:[],amount:0},null," "));
                response.send(JSON.stringify({answer:true,details:'Was added'}))
            }
            else response.send(JSON.stringify({answer:false,details:'User was exsisted in data'}));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}))
    },
    PostChangeUser: (request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = user.getUser();
            temp.username = request.body.username;
            temp.email = request.body.email || null;
            temp.password = request.body.password || null;
            temp.avatar = request.body.avatar || null;
            let users_path = __dirname + "/src/users/" + temp.username+".json";
            let data = JSON.parse(fs.readFileSync(users_path));
            if(temp.email != null){
                data.email=temp.email;
                fs.writeFileSync(users_path,JSON.stringify(data,null,' '));
                response.send(JSON.stringify({answer:true,details:'Email was changed'}));
            }
            else if(temp.password != null){
                data.password = temp.password;
                fs.writeFileSync(users_path,JSON.stringify(data,null,' '));
                response.send(JSON.stringify({answer:true,details:'Password was changed'}));
            }
            else if(temp.avatar != null){
                data.avatar = temp.avatar;
                fs.writeFileSync(users_path,JSON.stringify(data,null,' '));
                response.send(JSON.stringify({answer:true,details:"Avatar was changed"}));
            }
            else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
    },
    PostDeleteImagePost:(request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = {key:request.body.key,username:request.body.username};
            let posts_path = __dirname + "/src/posts/"+temp.username+".json";
            let notifies_path = __dirname + "/src/notifies/"+temp.username+".json";
            let history_path = __dirname + "/src/history/"+temp.username+".json";
            let data;
            //////Deleting from all datas the information about one post
            data = JSON.parse(fs.readFileSync(posts_path));
            console.log(data);
            for(let element of data.posts){
                if(element.key === temp.key){
                    data.posts.splice(data.posts.indexOf(element),1);
                    data.amount-=1;
                    break;
                }
            }
            fs.writeFileSync(posts_path,JSON.stringify(data,null,' '));
            data = JSON.parse(fs.readFileSync(notifies_path));
            for (let element of data.notifies) {
                if (element.key === temp.key) {
                    data.notifies.splice(data.posts.indexOf(element),1);
                    data.amount -= 1;
                }
            }
            fs.writeFileSync(notifies_path, JSON.stringify(data, null, ' '));
            data = JSON.parse(fs.readFileSync(history_path));
            for(let element of data.notifies){
                if(element.key === temp.key){
                    data.notifies.splice(data.posts.indexOf(element),1);
                    data.amount-=1;
                }
            }
            fs.writeFileSync(history_path,JSON.stringify(data,null,' '));
            response.send(JSON.stringify({answer:true,details:"Deleting successfull"}));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
    },
    PostAddImagePost:(request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = post.getPost();
            [temp.image,temp.text]=[request.body.image,request.body.text];
            let posts_path=__dirname+"/src/posts/"+request.body.username+".json";
            let data = JSON.parse(fs.readFileSync(posts_path));
            console.log(data);
            temp.key = key_generator(10);
            let max_id=0;
            for(let element of data.posts){
                if(element.id > max_id){
                    max_id=element.id;
                }
            }
            temp.id=max_id+1;
            data.posts.push(temp);
            data.amount+=1;
            fs.writeFileSync(posts_path,JSON.stringify(data,null,' '));
        }
        else response.send(JSON.stringify({answer:false,details:'Wrong request'}))
    },
    PostClearHistory:(request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = request.body.username;
            let path = __dirname+"/src/history/"+temp+".json";
            let data = JSON.parse(fs.readFileSync(path));
            data.notifies=Array();
            data.amount=0;
            fs.writeFileSync(path,JSON.stringify(data,null,' '));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
    }
};
const GetMethods = {
    GetUser : (request,response)=>{
        let username=request.query.username || false;
        let path = __dirname+"/src/users/"+username+'.json';
        if(username !==false) {
            if (fs.existsSync(path)) {
                let text = JSON.parse(fs.readFileSync(path));
                //response.send({isSearched: true, data: text});
                response.sendFile(path);
            }
            else {
                response.send({isSearched: false, data: {}});
            }
        }
        else{
            response.send({isSearched: false, data: {}});
        }
    },
    GetPosts: (request,response)=>{
        let username=request.query.username || false;
        let key = request.query.key || false;
        if(username && key){
            let path = __dirname+"/src/posts/"+username+".json";
            if(fs.existsSync(path)){
                let obj = JSON.parse(fs.readFileSync(path));
                let elem = obj.posts.find((element)=> {
                    if(key === element.key ){
                        return element;
                    }
                });
                if (elem) {
                    response.send({isSearched: true, amount: obj.amount, list: [], element: elem});
                }
                else{
                    response.send({isSearched: false, amount: obj.amount, list: [],element: {}})
                }
            }
            else response.send({isSearched:false,amount:null,list:[],element:{}});
        }
        else if(username){
            let path = __dirname+"/src/posts/"+username+".json";
            if(fs.existsSync(path)){
                response.sendFile(path);
            }
            else{
                response.send({isSearched:false,amount:null,list:[],element:{}});
            }
        }
        else{
            response.send({isSearched:false,amount:null,list:[],element:{}});
        }
    },
    GetNotifies: (request,response)=>{
        let username = request.query.username || false;
        if(username){
            let path= __dirname+"/src/notifies/"+username+".json";
            if(fs.existsSync(path)){
                response.sendFile(path);
            }
            else{
                response.send({isSearched:false,amount:null,list:[]});
            }
        }
        else response.send({isSearched:false,amount:null,list:[]});
    },
    GetHistory: (request,response)=>{
        let username = request.query.username || false;
        if(username){
            let path= __dirname+"/src/history/"+username+".json";
            if(fs.existsSync(path)){
                response.sendFile(path);
            }
            else{
                response.send({isSearched:false,amount:null,list:[]});
            }
        }
        else response.send({isSearched:false,amount:null,list:[]});
    },
    GetDefault: (request,response)=>{
        response.send("ROOT");
    },
    GetDefaultImage: (request,response)=>{
        let path=__dirname+"/src/default/image.jpg";
        response.sendFile(path);
    }
};
app.use((request,response,next)=>{
   console.log('Server is starting. Checking datas of app...');
   //Checking for existing datas
    next();
});
app.get("/users",GetMethods.GetUser);
app.post("/users/new",jsonParser,PostMethods.PostNewUser);
app.post("/users/change",jsonParser,PostMethods.PostChangeUser);
app.get("/posts",GetMethods.GetPosts);
app.post("/posts/delete",jsonParser,PostMethods.PostDeleteImagePost);
app.post("/posts/add",jsonParser,PostMethods.PostAddImagePost);
app.get("/notifies",GetMethods.GetNotifies);
app.get("/history",GetMethods.GetHistory);
app.get("/getimage?image=image.jpg",GetMethods.GetDefaultImage);
app.get("/",GetMethods.GetDefault);
app.listen(3000);


