var item= document.getElementById("inventoryItem");
var image= document.getElementById("image");
var option_one= document.getElementById("button1");
var option_two= document.getElementById("button2");
var option_three= document.getElementById("button3");
var start= false;
var source = new EventSource("http://127.0.0.1:5500/adventure.html");

source.onopen = start= true;
    if(start == true){
        item.style.display= "none";
        document.getElementById("image").style.backgroundImage= "url('img/ ' + 'house + '.jpg')";
        document.getElementById("description").innerHTML="Level 1";
        document.getElementById("text").innerHTML= "Je bent verdwaald tijdens Halloween en je komt dit huis tegen." 
        + "<br>"+ "Wat ga je doen?";
        document.getElementById("button1").innerHTML= "Aanbellen";
        document.getElementById("button2").innerHTML= "WEGRENNEN!!!";
        option_three.style.display= "none";
    }
    if(option_two.addEventListener("click", ko)){
        function ko(){
            document.getElementById("text").innerHTML= "Je rent weg! Na een tijdje begin je weer te lopen en kom je weer terug bij het huis! Wat ga je doen?";
            document.getElementById("button1").innerHTML= "Aanbellen";
            option_two.style.display= "none";
        }
    }