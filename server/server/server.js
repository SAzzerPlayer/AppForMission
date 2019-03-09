
// Connecting to express
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
//Creating an object of server
const app = express();
//Define an handler for route "/"
const urlencodedParser = bodyParser.urlencoded({extended: false});
const jsonParser=express.json();
//Import classes of data
const user = require('./classes/User');
const PostMethods = {
    PostUser: (request,response)=>{
        console.log(request.body);
        response.send('Success');
    },
    PostPosts: ()=>{},
    PostNotifies: ()=>{},
    PostHistory: ()=>{}
};
const GetMethods = {
    GetUser : (request,response)=>{
        let username=request.query.username || false;
        let path = __dirname+"/src/users/"+username+'.json';
        if(username !==false) {
            if (fs.existsSync(path)) {
                let text = JSON.parse(fs.readFileSync(path));
                response.send({isSearched: true, data: text});
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
                let obj = JSON.parse(fs.readFileSync(path));
                response.send({isSearched:true,amount:obj.amount,list:obj.posts,element:{}});
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
                let obj = JSON.parse(fs.readFileSync(path));
                response.send({isSearched:true,amount:obj.amount,list:obj.notifies})
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
                let obj = JSON.parse(fs.readFileSync(path));
                response.send({isSearched:true,amount:obj.amount,list:obj.notifies})
            }
            else{
                response.send({isSearched:false,amount:null,list:[]});
            }
        }
        else response.send({isSearched:false,amount:null,list:[]});
    },
    GetDefault: (request,response)=>{
        response.send("ROOT");
    }
};
app.use((request,response,next)=>{
   console.log('Server is starting. Checking datas of app...');
   //Checking for existing datas
    next();
});
app.get("/users",GetMethods.GetUser);
app.post("/users/new",jsonParser,PostMethods.PostUser);
app.get("/posts",GetMethods.GetPosts);
app.get("/notifies",GetMethods.GetNotifies);
app.get("/history",GetMethods.GetHistory);
app.get("/",GetMethods.GetDefault);
app.listen(3000);


