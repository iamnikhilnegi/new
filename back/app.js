

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();


const app = express();
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
// const dbUri = `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PASS}@nikhil-mongo-server-8ades.mongodb.net/test?retryWrites=true&w=majority`;
// mongoose.connect(dbUri,{ useNewUrlParser: true })
// .catch(err=>{
//     console.log("\t\t\t error \t\t\t");
//     console.log(err);
// });





// var kittySchema = new mongoose.Schema({
//     name: String,
//     info:String
//   });

//   var kitten=mongoose.model('Kitten',kittySchema);

//   var kit1 = new kitten({name:"kitten2",info:"this ali is a cat"});
//   kit1.save();

app.get('/', function (req, res) {
  console.log('received');
  res.send('Hello World')
})

app.post('/register',(req,res)=>{
  console.log('received');
  res.send("k");
});

app.listen(8000)