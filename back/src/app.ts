

import express from 'express';
import {IUser,User ,ValidateUser, FindUserExists} from './user';
import { Error, PassportLocalModel } from 'mongoose';
import { PassportStatic } from 'passport';
import { json } from 'body-parser';



const bodyParser = require('body-parser');
const mongoose = require('mongoose');
 require('dotenv').config();
const cors=require('cors');
const passport:PassportStatic=require('passport');

const session = require('express-session');


const app: express.Application = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(session(
  {
    secret: "secret.message.",
    saveUninitialized: false,
    resave: false
  }
));

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


const dbUri:string = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASS}@nikhil-mongo-server-8ades.mongodb.net/test?retryWrites=true&w=majority`;
mongoose.connect(dbUri,{ useNewUrlParser: true })
.catch((err?:Error) =>{
    console.log("\t\t\t error \t\t\t");
    console.log(err);
});





var kittySchema = new mongoose.Schema({
    name: String,
    info:String
  });

  var kitten=mongoose.model('Kitten',kittySchema);

  var kit1 = new kitten({name:"kitten2",info:"this also not is a cat"});
  kit1.save().catch((err:Error)=>{
    console.log(err);
  });


app.get('/', function (req:express.Request, res:express.Response) {
  console.log('received');
  res.send('Hello World')
})
app.get('/home',function(req,res)
{

})
app.post('/register',(req:express.Request, res:express.Response)=>{
  let user:IUser=req.body;
  if(!ValidateUser(user))
  {
    res.status(400).send("Invalid Username and password");
  }
  else
  {
    FindUserExists(user.username).then((value:boolean)=>{
      if(!value)
      {
        User.register({ username:user.username }, user.password, function(err:Error,user:any){
            if(err)
            {
              console.log(err);
              res.redirect('/register');
            }else{
              passport.authenticate("local")(req,res,function(){
                res.redirect('/home');
              });
            }
          }
        )
      }
      else{
        res.status(400).send("User Already Exists!!");
      }
    });
  }

  
});

app.post('/login',function(req,res){
  const user=new User({
    username:req.body.username,
    password:req.body.password
  });
  req.login(user,function(err){
    if(err){
      console.log(err);
    }else{
      passport.authenticate("local")(req,res,function(){
        res.redirect('/home');
      });
    }
  });
})

app.get('/logout',function(req,res){
  req.logout();
  res.redirect("/");
});

app.listen(8000)