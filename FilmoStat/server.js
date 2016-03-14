var express=require('express')
var path=require('path')
var app=express()
var alfa=express.Router()
var port=process.env.PORT || 8082

app.use(express.static(__dirname+'/'))
alfa.get('/',function(req,res){

	res.sendFile(path.join(__dirname+'/index.html'))
});

alfa.get('/movies',function(req,res){

	res.sendFile(path.join(__dirname+'/public/pages/movies.html'))
})


alfa.get('/shows',function(req,res){

	res.sendFile(path.join(__dirname+'/public/pages/tvshows.html'))
})

app.use('/',alfa)
app.listen(port);
console.log('Go to the port : ' + port);
