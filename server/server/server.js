
// Connecting to express
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const multer = require("multer");
//Creating an object of server
const app = express();
//Generator string key
const key_generator=require("random-key-generator");
//Define an handler for route "/"
const urlencodedParser = bodyParser.urlencoded({extended: false});
////////
const Storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, './src/images')
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`)
    },
});
const upload = multer({ storage: Storage });
///////
const jsonParser=express.json();
//Import classes of data
const user = require('./classes/User');
const post = require('./classes/Post');
const notify = require('./classes/Notify');
const postRecord = require("./classes/PostRecord");
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
            let handlerList_path = __dirname + "/src/handlerList/posts.json";
            let record = postRecord.getPostRecord();
            [record.username,record.key,record.date] = [temp.username,temp.key,Date.now()];
            data = JSON.parse(fs.readFileSync(handlerList_path));
            for(let element of data.list){
                if(element.key===temp.key){
                    data.list.splice(data.list.indexOf(element),1);
                    data.amount-=1;
                    break;
                }
            }
            fs.writeFileSync(handlerList_path,JSON.stringify(data,null,' '));
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
            let handlerList_path = __dirname+"/src/handlerList/posts.json";
            data = JSON.parse(fs.readFileSync(handlerList_path));
            let record = postRecord.getPostRecord();
            [record.username,record.key,record.date] = [request.body.username,temp.key,Date.now()];
            data.list.unshift(record);
            data.amount+=1;
            fs.writeFileSync(handlerList_path,JSON.stringify(data,null,' '));
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
    },
    PostNewNotify: (request,response)=>{
        console.log(request.body);
        if(request.body) {
            let temp = notify.getNotify();
            [temp.key, temp.type, temp.byUser] = [request.body.key, request.body.type, request.body.byUser];
            let notifies_path = __dirname + "/src/notifies/" + request.body.toUser + ".json";
            let history_path = __dirname + "/src/history/" + request.body.toUser + ".json";
            // Save to notifies new record
            let data = JSON.parse(fs.readFileSync(notifies_path));
            let max_id = 0;
            for (let element of data.notifies) {
                if (element.id > max_id) {
                    max_id = element.id;
                }
            }
            temp.id = max_id + 1;
            temp.date = Date.now();
            data.notifies.push(temp);
            data.amount+=1;
            fs.writeFileSync(notifies_path,JSON.stringify(data,null,' '));
            // Save to history new record
            data = JSON.parse(fs.readFileSync(history_path));
            max_id=0;
            for(let element of data.notifies){
                if(element.id>max_id){
                    max_id=element.id;
                }
            }
            temp.id=max_id+1;
            data.notifies.push(temp);
            data.amount+=1;
            fs.writeFileSync(history_path,JSON.stringify(data,null,' '));
            // Checking type of notify
            if(temp.type === 'like'){
                //Adding like
                let posts_path = __dirname + '/src/posts/'+request.body.toUser+'.json';
                data = JSON.parse(fs.readFileSync(posts_path));
                for( let element of data.posts){
                    if(element.key === temp.key){
                        element.likes.push(temp.byUser);
                        break;
                    }
                }
                fs.writeFileSync(posts_path,JSON.stringify(data,null,' '));
            }
            else if(temp.type === 'subscribe'){
                //Adding subscriber
                let byUser_path = __dirname + "/src/users/"+temp.byUser+'.json';
                let toUser_path = __dirname +"/src/users/" + request.body.toUser + ".json";
                data = JSON.parse(fs.readFileSync(byUser_path));
                data.subscribe.push(request.body.toUser);
                fs.writeFileSync(byUser_path,JSON.stringify(data,null,' '));
                data = JSON.parse(fs.readFileSync(toUser_path));
                data.subscribers.push(temp.byUser);
                fs.writeFileSync(toUser_path,JSON.stringify(data, null, ' '));
            }
            else{
                console.log('system notify');
            }
            response.send(JSON.stringify({answer:true,details:"Successfull"}));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
    },
    PostDeleteNotify: (request,response)=>{
        console.log(request.body);
        if(request.body){
            let temp = notify.getNotify();
            [temp.key,temp.byUser,temp.type]=[request.body.key, request.body.byUser,request.body.type];
            if(temp.type==='like'){
                let posts_path = __dirname +"/src/posts/"+request.body.toUser+".json";
                let notifies_path = __dirname +"/src/notifies/"+request.body.toUser+".json";
                let history_path = __dirname +"/src/history/"+request.body.toUser+".json";
                let data = JSON.parse(fs.readFileSync(posts_path));
                for( let element of data.posts){
                    if(element.key === temp.key){
                        element.likes.splice(element.likes.indexOf(temp.byUser),1);
                        break;
                    }
                }
                fs.writeFileSync(posts_path,JSON.stringify(data,null,' '));
                data = JSON.parse(fs.readFileSync(notifies_path));
                for( let element of data.notifies) {
                    if (element.key === temp.key) {
                        data.notifies.splice(data.notifies.indexOf(element), 1);
                        data.amount-=1;
                        if(data.notifies==null) data.notifies=Array();
                    }
                }
                fs.writeFileSync(notifies_path,JSON.stringify(data,null,' '));
                data = JSON.parse(fs.readFileSync(history_path));
                for( let element of data.notifies) {
                    if (element.key === temp.key) {
                        data.notifies.splice(data.notifies.indexOf(element), 1);
                        data.amount-=1;
                        if(data.notifies==null) data.notifies=Array();
                    }
                }
                fs.writeFileSync(history_path,JSON.stringify(data,null,' '));
            }
            else if(temp.type==='subscribe'){
                let toUser_path = __dirname +"/src/users/"+request.body.toUser+".json";
                let byUser_path = __dirname +"/src/users/"+temp.byUser+".json";
                let notifies_path = __dirname +"/src/notifies/"+request.body.toUser+".json";
                let history_path = __dirname +"/src/history/"+request.body.toUser+".json";
                let data = JSON.parse(fs.readFileSync(toUser_path));
                data.subscribers.splice(data.subscribers.indexOf(temp.byUser),1);
                fs.writeFileSync(data,JSON.stringify(data,null,' '));
                data = JSON.parse(fs.readFileSync(byUser_path));
                data.subscribe.splice(data.subscribe.indexOf(request.body.toUser),1);
                fs.writeFileSync(data,JSON.stringify(data,null,' '));
                data= JSON.parse(fs.readFileSync(notifies_path));
                for(let element of data.notifies){
                    if(element.key === temp.key){
                        data.notifies.splice(data.notifies.indexOf(element),1);
                        data.amount-=1;
                        break;
                    }
                }
                fs.writeFileSync(notifies_path,JSON.stringify(data,null,' '));
                data= JSON.parse(fs.readFileSync(history_path));
                for(let element of data.notifies){
                    if(element.key === temp.key){
                        data.notifies.splice(data.notifies.indexOf(element),1);
                        data.amount-=1;
                        break;
                    }
                }
                fs.writeFileSync(history_path,JSON.stringify(data,null,' '));
            }
            else console.log('System notify');
            response.send(JSON.stringify({answer:true,details:"Successfull"}));
        }
        else response.send(JSON.stringify({answer:false,details:"Wrong request"}));
    },
    PostUploadImage: (request,response)=>{
        console.log('file', request.files);
        console.log('body', request.body);
        response.status(200).json({
            message: 'success!',
        })
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
                        return true;
                    }
                    else return false;
                });
                let temp_path = __dirname+"/src/temp/temp_post.json";
                if (elem) {
                    fs.writeFileSync(temp_path,JSON.stringify(
                        {isSearched: true, amount: obj.amount, list: [], element: elem},
                        null,
                        " "));
                    response.sendFile(temp_path);
                }
                else{
                    fs.writeFileSync(temp_path,JSON.stringify(
                        {isSearched: false, amount: obj.amount, list: [],element: {}},
                        null,
                        " "));
                    response.sendFile(temp_path);
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
    GetGlobalPosts: (request,response)=>{
        let username = request.query.username || false;
        let from = request.query.from || false;
        let to = request.query.to || false;
        let path = __dirname+"/src/handlerList/posts.json";
        if(fs.existsSync(path)){
            let data = JSON.parse(fs.readFileSync(path));
            let tempData = {list:[],amount:0};
            if(username){
                for(let element of data.list) {
                    // if (element.username === username) {
                    //     data.list.splice(data.list.indexOf(element), 1);
                    //     data.amount -= 1;
                    // }
                    if(element.username !== username) {
                        tempData.list.push(element);
                        tempData.amount+=1;
                    }
                }
                data = tempData;
            }

            if(from && to){
                data.list = data.list.slice(from,to);
                data.amount=Number(to)-Number(from);
            }
            else if(from){
                data.list = data.list.slice(from);
                data.amount = data.amount-Number(from);
            }
            else if(to){
                data.list = data.list.slice(0,to);
                data.amount=Number(to);
            }
            let posts = Array();
            let total_path=__dirname+"/src/posts/";
            let temp;
            for(let element of data.list){
                temp = JSON.parse(fs.readFileSync(total_path+element.username+'.json'));
                let post = temp.posts.find((item)=>{
                    if(element.key === item.key) return true;
                    else return false;
                });
                // Array of posts, where one element is an object, what has 2 states: user,who is owner of post, and datas of post.
                posts.unshift({username:element.username,post:post});
            }
            let temp_path=__dirname+"/src/temp/temp.json";
            fs.writeFileSync(temp_path,JSON.stringify({posts:posts,amount:posts.length},null,' '));
            response.sendFile(temp_path);
        }
        else response.send(JSON.stringify({answer:false,details:"Server error/ file isn't existed"}));
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
app.get("/posts/global",GetMethods.GetGlobalPosts);
app.post("/posts/delete",jsonParser,PostMethods.PostDeleteImagePost);
app.post("/posts/add",jsonParser,PostMethods.PostAddImagePost);
app.get("/notifies",GetMethods.GetNotifies);
app.post("/notifies/new",jsonParser,PostMethods.PostNewNotify);
app.post("/notifies/delete",jsonParser,PostMethods.PostDeleteNotify);
app.get("/history",GetMethods.GetHistory);
app.post("/history/clean",jsonParser,PostMethods.PostClearHistory);
//app.post('/image/upload', upload.array('photo', 3),PostMethods.PostUploadImage);
app.post('/image/upload',urlencodedParser,PostMethods.PostUploadImage);
app.get("/",GetMethods.GetDefault);
app.listen(3000);


