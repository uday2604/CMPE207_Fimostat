var path=require('path')

var express=require('express')

var app=express();

// var myroute=express.Router();

app.get('/',function(req,res){
	res.send('Hello');
})

app.listen(5000);
console.log("Go to port 5000:");
