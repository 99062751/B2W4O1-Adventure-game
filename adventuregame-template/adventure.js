var item= document.getElementById("inventoryItem");
var image= document.getElementById("image");
var one= document.getElementById("button1");
var two= document.getElementById("button2");
var three= document.getElementById("button3");
var start= false;
var source = new EventSource("http://127.0.0.1:5500/adventure.html");

source.onopen = start= true;
    if(start == true){
        item.style.display= "none";
        document.getElementById("image").style.backgroundImage= "url(img_'house.jpg')";
        document.getElementById("description").innerHTML="Level 1";
        document.getElementById("text").innerHTML= "Je bent verdwaald tijdens Halloween en je komt dit huis tegen." 
        + "<br>"+ "Wat ga je doen?";
        document.getElementById("button1").innerHTML= "Aanbellen";
        document.getElementById("button2").innerHTML= "WEGRENNEN!!!";
        three.style.display= "none";
    }
    if(two.addEventListener("click", ko)){
        function ko(){

        }
    }