



var url="https://webhose.io/search?token=e7c28e93-dbaa-4d6f-98c6-e36072647787&format=json&q=india"
console.log()
$.getJSON(url,function gotData(object){
	     

		var headln=object.posts;
		for (var i=0;i<headln.length;i++)
		//console.log(headln[i].title);
	$("#news1").html("<h4>"+headln[0].title+"</h4>")
			
		 
		 $("#news2").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		  $("#news3").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		
		$("#news4").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		
		$("#news5").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		
		$("#news6").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		
		$("#news7").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].title+"</h4>")
		
	})
/*var url = "https://api.nytimes.com/svc/topstories/v1/politics.json";
url += '?' + $.param({
  'api-key': "f5842c5cb7c545138a9c27d0db94a874"

});
$.getJSON(url,function gotData(object){
		var headln=object.results
		
		
		


		 
	
	});
*/

    //


/*$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	
}).fail(function(err) {
  throw err;
});*/