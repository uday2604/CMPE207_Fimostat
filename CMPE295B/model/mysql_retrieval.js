var mysql=require('mysql');

var con=mysql.createConnection({

	host: "127.0.0.1",
	user: "root",
	password: "password",
	database: "world"
});
function db_connect()
{

con.connect(function(err){
	if(err){
		console.log("Database connection error. Please check if the database is up and running");
		return 0;
	}
	else
		{console.log("Connection established succesfully");
		return 1;}
	});
  }


function select_pop_by_country(val){

	var statement="select CountryCode,Population from city group by CountryCode having CountryCode like '"+val+"%'"
	con.query(statement,function(err,rows){
	if(err) throw err;

	console.log("Data retrieval succeeded.");
	 
});


}

function select_country_grouped_by_language(){

	var statement="select count(*) as count,Language from countrylanguage group by Language having count>=2"
	con.query(statement,function(err,rows){
	if(err) throw err;

	console.log("Data retrieval succeeded.");
	console.log(rows);
	 
});


}

function select_country_grouped_by_lifeExpectancy(){

	var statement="select count(*) as count,LifeExpectancy from country group by LifeExpectancy having LifeExpectancy>=2"
	con.query(statement,function(err,rows){
	if(err) throw err;
	
	console.log("Data retrieval succeeded.");
	console.log(rows); 
});


}
 

select_pop_by_country("B");
select_country_grouped_by_language();
select_country_grouped_by_lifeExpectancy();



con.end(function(err){

});