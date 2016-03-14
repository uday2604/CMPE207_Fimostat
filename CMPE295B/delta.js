var express=require('express');
var app=express();
var alfa=express.Router();
var mysql=require('mysql');

var con=mysql.createConnection({

	host: "127.0.0.1",
	user: "root",
	password: "password",
	database: "world"
}); 


con.connect(function(err){
	if(err){
		console.log("Database connection error. Please check if the database is up and running");
		return 0;
	}
	else
		{
			// console.log("Connection established succesfully");
		return 1;}
}); 

function select_pop_by_country(val){

	var statement="select CountryCode,Population from city group by CountryCode having CountryCode like '"+val+"%'"
	con.query(statement,function(err,rows){
	if(err) throw err;

	// console.log("Data has been retrieved");
	// console.log(rows);
	for(var i=0; i<rows.length;i++)
		console.log(rows[i].CountryCode+" -> "+ rows[i].Population +" members.");
});


}

function select_country_grouped_by_language(){

	var statement="select count(*) as count,Language from countrylanguage group by Language having count>=2"
	con.query(statement,function(err,rows){
	if(err) throw err;

	// console.log("Data has been retrieved");
	// console.log(rows);
	for(var i=0; i<rows.length;i++)
		console.log(rows[i].count+" countries speak "+ rows[i].Language );
});


}

function select_country_grouped_by_lifeExpectancy(){

	var statement="select count(*) as count,LifeExpectancy from country group by LifeExpectancy having LifeExpectancy>=2"
	con.query(statement,function(err,rows){
	if(err) throw err;

	console.log("Data has been retrieved" + rows);
	// console.log(rows);
	// for(var i=0; i<rows.length;i++)
	// 	console.log(rows[i].count+" countries have lifeexpectancy ->"+ rows[i].LifeExpectancy );
	return rows;	
});


}

// console.log(db_connect());

function close_db(){
con.end(function(err){

});
}


alfa.get('/pop_by_city',function(req,res){
		 
		console.log(select_pop_by_country()) ;
		res.write(JSON.stringify(select_pop_by_country()));
		// console.log(select_pop_by_country("B"));
		close_db(); 
});


app.use('/',alfa);
app.listen(5000);
console.log("Go to port 5000");

