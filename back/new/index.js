const express = require('express');

const app=express();


app.get('/',function(req,res){
    console.log('res');

});

app.listen(8000);
