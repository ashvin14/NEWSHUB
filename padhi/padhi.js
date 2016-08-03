
var url = "https://api.nytimes.com/svc/topstories/v1/politics.json";
url += '?' + $.param({
  'api-key': "f5842c5cb7c545138a9c27d0db94a874"

});
$.getJSON(url,function gotData(object){
		var headln=object.results
		
		$("#news1").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
			
		 
		 $("#news2").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		  $("#news3").html("<h4>"+headln[Math.floor((Math.random() * headln.length) + 1)].abstract+"</h4>")
		
		


		 
	
	});

    //


/*$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
	
}).fail(function(err) {
  throw err;
});*/