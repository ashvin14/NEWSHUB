var myselect= document.getElementById("topic");

 

function store_topic(){

	sessionStorage.setItem("mytopic",myselect.options[myselect.selectedIndex].value);
}
