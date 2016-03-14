// angular.module('app',['googlechart'])
var app=angular.module('shows',['googlechart',])
app.controller("maincontrollershows", function($scope,$http){
 		
 		$scope.grafres=''	
 		$scope.finalgraf_trend=[];
 		$scope.finalgraf_anticipated=[];
 		$scope.finalgraf_collect=[];
 		$scope.finalgraf_boxoffice=[];
 		
 	 	 $scope.apiKey='671fbcad75347db017db301fb979f889fd20129f161ec7113ac2423713e3a9ae'
         $scope.init_trend = function() {
			            var req =	{
			            				method: 'GET',
						 				url: 'https://api-v2launch.trakt.tv/shows/trending',
						 				headers: {
						   							'Content-Type': 'application/json',
						   							'trakt-api-version':2,
						   							'trakt-api-key':$scope.apiKey
						 						 }
			            			}

			$scope.finallist_trend=[];
			
			
            $http(req).then(function(data) {
                // console.log(data);
                

								for(i=0;i<data.data.length;i++){
									var obj=data.data[i]; 
									var myobjlist={};
									var myobjgraf={}
									 
									myobjlist.trend_title=obj.show.title
									myobjlist.trend_year=obj.show.year
									
									myobjgraf.trend_title=obj.show.title
									myobjgraf.trend_watchers=obj.watchers

									$scope.finallist_trend.push(myobjlist)
									$scope.finalgraf_trend.push(myobjgraf)
									 
									}
								  //******************************************************
							 $scope.trend_chartObject = {
							  "type": "ColumnChart",
							  "displayed": false,
							  "data": {
							    "cols": [
							        { label: "show", type: "string"},
							        { label: "Number of People currently watching", type: "number"}
							    ], "rows":  [
							    			{c:[{v:String($scope.finalgraf_trend[0].trend_title)},
							    				{v:String($scope.finalgraf_trend[0].trend_watchers)}]},
 											{c:[{v:String($scope.finalgraf_trend[1].trend_title)},
							    				{v:String($scope.finalgraf_trend[1].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[2].trend_title)},
							    				{v:String($scope.finalgraf_trend[2].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[3].trend_title)},
							    				{v:String($scope.finalgraf_trend[3].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[4].trend_title)},
							    				{v:String($scope.finalgraf_trend[4].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[5].trend_title)},
							    				{v:String($scope.finalgraf_trend[5].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[6].trend_title)},
							    				{v:String($scope.finalgraf_trend[6].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[7].trend_title)},
							    				{v:String($scope.finalgraf_trend[7].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[8].trend_title)},
							    				{v:String($scope.finalgraf_trend[8].trend_watchers)}]},
							    			{c:[{v:String($scope.finalgraf_trend[9].trend_title)},
							    				{v:String($scope.finalgraf_trend[9].trend_watchers)}]},]
							  	
							  },
							  "options": {
							    "title": "TRENDING SHOWS INFOGRAPH",
							    "isStacked": "true",
							    "legend" : {position: 'left', alignment :'center', textStyle: {color: 'blue', fontSize: 14,bold:true}},
							    "fill": 40,
							    "displayExactValues": true,
							    "backgroundColor": { fill:'transparent' },
							    "height":400,
							    "width":400,
							    "vAxis": {
							      "title": "TV SHOW",
							      "gridlines": {
							        "count": 10
							      }
							    },
							    "hAxis": {
							      "title": "PEOPLE CURRENTLY WATCHING"
							    },
							    chartArea:{left:30,top:20,width:"100%",height:"80%"},
      							colors: [ 'red','green']
							  },
							  "formatters": {}
							} 
            	//******************************************************
								   
							  
            }, function(error) {
     			return angular.toJson(error);
  				});
        	};

        	 $scope.init_anticipated = function() {
			            var req =	{
			            				method: 'GET',
						 				url: 'https://api-v2launch.trakt.tv/shows/anticipated',
						 				headers: {
						   							'Content-Type': 'application/json',
						   							'trakt-api-version':2,
						   							'trakt-api-key':$scope.apiKey
						 						 }
			            			}

			$scope.finallist_anticipated=[];
			
			 

            $http(req).then(function(data) {
                // console.log(data);

								for(i=0;i<data.data.length;i++){
									var obj=data.data[i]; 
									var myobjlist={};
									var myobjgraf={};
									 
									myobjlist.anticipated_title=obj.show.title
									myobjlist.anticipated_year=obj.show.year
									 
									myobjgraf.anticipated_title=obj.show.title
									myobjgraf.anticipated_count=obj.list_count
									
									$scope.finallist_anticipated.push(myobjlist)
									$scope.finalgraf_anticipated.push(myobjgraf)
									 
								}
  
								 
								  //******************************************************
							 $scope.anticipated_chartObject = {
							  "type": "ColumnChart",
							  "displayed": false,
							  "data": {
							    "cols": [
							        { label: "show", type: "string"},
							        { label: "SUBSCRIBERS CURRENTLY ADDED TO THEIR WATCHLIST", type: "number"}
							    ], "rows":  [
							    			{c:[{v:String($scope.finalgraf_anticipated[0].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[0].anticipated_count)}]},
 											{c:[{v:String($scope.finalgraf_anticipated[1].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[1].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[2].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[2].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[3].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[3].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[4].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[4].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[5].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[5].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[6].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[6].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[7].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[7].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[8].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[8].anticipated_count)}]},
							    			{c:[{v:String($scope.finalgraf_anticipated[9].anticipated_title)},
							    				{v:String($scope.finalgraf_anticipated[9].anticipated_count)}]},]
							  	
							  },
							  "options": {
							    "title": "MOST AWAITED SHOWS",
							    "isStacked": "false",
							    "fill": 20,
							    "displayExactValues": true,
							    "backgroundColor": { fill:'transparent' },
							    "legend" : {position: 'left', alignment :'center', textStyle: {color: 'blue', fontSize: 14,bold:true}},
							    "height":400,"width":400,
							    "vAxis": {
							      "title": "SHOWS",
							      "gridlines": {
							        "count": 10
							      }
							    },
							    "hAxis": {
							      "title": "PEOPLE ACTIVELY FOLLOWING"
							    },
							     chartArea:{left:80,top:50,width:"100%",height:"80%"},
      							colors: ['yellow','green'],
							  },
							  "formatters": {}
							} 
            	//******************************************************
							 

            }, function(error) {
     			return angular.toJson(error);

  				});
					 
        	};


        	$scope.init_popular = function() {
			            var req =	{
			            				method: 'GET',
						 				url: 'https://api-v2launch.trakt.tv/shows/popular',
						 				headers: {
						   							'Content-Type': 'application/json',
						   							'trakt-api-version':2,
						   							'trakt-api-key':$scope.apiKey
						 						 }
			            			}

			$scope.finallist_popular=[];
			  
            $http(req).then(function(data) {
                // console.log(data);

								for(i=0;i<data.data.length;i++){
									var obj=data.data[i]; 
									var myobjlist={};
									 
									 
									myobjlist.popular_title=obj.title
									myobjlist.popular_year=obj.year
									 
									 
									$scope.finallist_popular.push(myobjlist)
									 
								}
 
								 return $scope.finallist_popular


								  
            }, function(error) {
     			return angular.toJson(error);

  				});
					 
        	};
 
 		$scope.init_collect = function() {
			            var req =	{
			            				method: 'GET',
						 				url: 'https://api-v2launch.trakt.tv/shows/collected/weekly',
						 				headers: {
						   							'Content-Type': 'application/json',
						   							'trakt-api-version':2,
						   							'trakt-api-key':$scope.apiKey
						 						 }
			            			}

			$scope.finallist_collect=[];
			
			  
            $http(req).then(function(data) {
               
								for(i=0;i<data.data.length;i++){
									var obj=data.data[i]; 
									var myobjlist={};
									var myobjgraf={};
									 
									myobjlist.collect_title=obj.show.title
									myobjlist.collect_year=obj.show.year
									 
									myobjgraf.collect_title=obj.show.title
									myobjgraf.collect_count=obj.collected_count
									 
									$scope.finallist_collect.push(myobjlist)
									$scope.finalgraf_collect.push(myobjgraf)
									 		
								}
 
								//******************************************************
							 $scope.collect_chartObject = {
							  "type": "ColumnChart",
							  "displayed": false,
							  "data": {
							    "cols": [
							        { label: "SHOWS", type: "string"},
							        { label: "NUMBER OF SUBSCRIBERS COLLECTED:", type: "number"}
							    ], "rows":  [
							    			{c:[{v:String($scope.finalgraf_collect[0].collect_title)},
							    				{v:String($scope.finalgraf_collect[0].collect_count)}]},
 											{c:[{v:String($scope.finalgraf_collect[1].collect_title)},
							    				{v:String($scope.finalgraf_collect[1].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[2].collect_title)},
							    				{v:String($scope.finalgraf_collect[2].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[3].collect_title)},
							    				{v:String($scope.finalgraf_collect[3].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[4].collect_title)},
							    				{v:String($scope.finalgraf_collect[4].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[5].collect_title)},
							    				{v:String($scope.finalgraf_collect[5].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[6].collect_title)},
							    				{v:String($scope.finalgraf_collect[6].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[7].collect_title)},
							    				{v:String($scope.finalgraf_collect[7].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[8].collect_title)},
							    				{v:String($scope.finalgraf_collect[8].collect_count)}]},
							    			{c:[{v:String($scope.finalgraf_collect[9].collect_title)},
							    				{v:String($scope.finalgraf_collect[9].collect_count)}]},]
							  	
							  },
							  "options": {
							    "title": "SHOWS INCLUDED MOSTLY IN COLLECTIONS",
							    "isStacked": "true",
							    "fill": 20,
							    "displayExactValues": true,
							    "backgroundColor": { fill:'transparent' },
							    "height":400,"width":400,
							    "legend" : {position: 'left', alignment :'center', textStyle: {color: 'blue', fontSize: 14,bold:true}},
							    "vAxis": {
							      "title": "SHOWS",
							      "gridlines": {
							        "count": 10
							      }
							    },
							    "hAxis": {
							      "title": "NUMBER OF SUBSCRIBERS"
							    },chartArea:{left:60,top:50,width:"100%",height:"80%"},
      							colors: ['purple','green'],
							  },
							  "formatters": {}
							} 
            	//******************************************************
 
								 
							 

            }, function(error) {
     			return angular.toJson(error);

  				});
					 
        	};


        	$scope.init_boxoffice = function() {
			            var req =	{
			            				method: 'GET',
						 				url: 'https://api-v2launch.trakt.tv/shows/watched/weekly',
						 				headers: {
						   							'Content-Type': 'application/json',
						   							'trakt-api-version':2,
						   							'trakt-api-key':$scope.apiKey
						 						 }
			            			}

			$scope.finallist_boxoffice=[];
			
			  
            $http(req).then(function(data) {
                // console.log(data);

								for(i=0;i<data.data.length;i++){
									var obj=data.data[i]; 
									var myobjlist={};
									var myobjgraf={};
									 
									myobjlist.boxoffice_title=obj.show.title
									myobjlist.boxoffice_year=obj.show.year
									 
									myobjgraf.boxoffice_title=obj.show.title
									myobjgraf.boxoffice_revenue=obj.watcher_count
									 
									$scope.finallist_boxoffice.push(myobjlist)
									$scope.finalgraf_boxoffice.push(myobjgraf)
									 		
								}
  									// console.log($scope.finalgraf_boxoffice)
								//******************************************************
							 
							 $scope.boxoffice_chartObject = {
							  "type": "ColumnChart",
							  "displayed": false,
							  "data": {
							    "cols": [
							        { label: "SHOWS", type: "string"},
							        { label: "NUMBER OF SUBSCRIBERS WATCHED", type: "number"}
							    ], "rows":  [
							    			{c:[{v:String($scope.finalgraf_boxoffice[0].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[0].boxoffice_revenue)}]},
 											{c:[{v:String($scope.finalgraf_boxoffice[1].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[1].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[2].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[2].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[3].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[3].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[4].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[4].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[5].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[5].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[6].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[6].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[7].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[7].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[8].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[8].boxoffice_revenue)}]},
							    			{c:[{v:String($scope.finalgraf_boxoffice[9].boxoffice_title)},
							    				{v:String($scope.finalgraf_boxoffice[9].boxoffice_revenue)}]}]
							  	
							  },
							  "options": {
							    "title": "LAST WEEK'S MOST WATCHED",
							    "isStacked": "true",
							    "fill": 20,
							    "legend" : {position: 'left', alignment :'center', textStyle: {color: 'blue', fontSize: 14,bold:true}},
							    "displayExactValues": true,
							    "height":400,"width":400,
							    "backgroundColor": { fill:'transparent' },
							    "vAxis": {
							      "title": "SHOWS",
							      "gridlines": {
							        "count": 10
							      }
							    },
							    "hAxis": {
							      "title": "SHOW"
							    },chartArea:{left:80,top:50,width:"100%",height:"80%"},
      							colors: ['teal','green'],
							  },
							  "formatters": {}
							} 
           				 	//******************************************************
								  
								 
							 

            }, function(error) {
     			return angular.toJson(error);

  				});
					 
        	};
    	});

 
 // 671fbcad75347db017db301fb979f889fd20129f161ec7113ac2423713e3a9ae

// angular.bootstrap(document,['demo']);