
var topic=sessionStorage.getItem("mytopic");
sessionStorage.clear();
console.log(sessionStorage)

var site = "https://api.nytimes.com/svc/topstories/v1/" + topic + ".json";
site += '?' + $.param({
  'api-key': "f5842c5cb7c545138a9c27d0db94a874"
});
	if(site.abstract=="undefined")
	{
		topic="politics";
	}
else
	{
$.getJSON(site, function gotData(object) {
  var headln = object.results
 var i=1;
 var x=1;
 console.log(headln);
  $("#news1").html("<h4>" + headln[0].abstract + "</h4>")

  $("#news2").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")
  $("#news3").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")

  $("#news4").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")

  $("#news5").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")

  $("#news6").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")

  $("#news7").html("<h4>" + headln[Math.floor((Math.random() * headln.length) + 1)].abstract + "</h4>")
 while(x<=9){
 	if(headln[i].multimedia[0]==undefined){
 		 $("#thumbnails"+x+"").html("<img src=" + headln[++i].multimedia[1].url + " height='200'><h4>" + headln[i].multimedia[1].caption + "</h4>");
 	}
 	else
  $("#thumbnails"+x+"").html("<img src=" + headln[i].multimedia[1].url + " height='200'><h4>" + headln[i].multimedia[1].caption + "</h4>");
 i++;
 x++;
}
  
 
})
}
