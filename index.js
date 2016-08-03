

var long;
var lat;
var temp;


 if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
	lat=position.coords.latitude;
  
			   long=position.coords.longitude;
			 
			   var url='http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+long+'&appid=2f70302476e91b2bae5c1d17dd2b19de';
			  console.log(url);
$.getJSON(url,function gotData(object){	


})
}






