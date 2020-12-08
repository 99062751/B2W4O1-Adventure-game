var item= document.getElementById("inventoryItem");
var one= document.getElementById("button1");
var two= document.getElementById("button2");
var three= document.getElementById("button3");
var start= false;
var source = new EventSource("http://127.0.0.1:5500/adventure.html");

source.onopen = start= true;
    if(start == true){
        item.style.display= "none";
    }
    