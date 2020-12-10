var items = {item:document.getElementById("inventoryItem"), image:document.getElementById("game-container"), option_one: document.getElementById("button1"), 
option_two: document.getElementById("button2"), option_three: document.getElementById("button3")}; 

var image1 = document.getElementById("game-container");
intro();
function intro(){              //intro game
    items['option_one'].onclick = function(){start()};
    items['option_two'].onclick = function(){myScript};
    items['option_three'].onclick = function(){myScript};
    document.getElementById("title").innerHTML="HAUNTED: THE GAME";
    items['item'].style.display= "none";
    document.getElementById("description").innerHTML="BEGINNING OF GAME"+
    "<p>Welkom, bij HAUNTED: THE GAME!" 
    + "<br>" + "In deze game krijg je verschillende vragen met keuzes die je moet maken." 
    + "<br>" + "Die zien eruit als deze knoppen, laten we beginnen!</p>"; 

    document.getElementById("button1").innerHTML= "START";
    document.getElementById("button2").style.display= "none";
    document.getElementById("button3").style.display= "none";
}
function start(){              //level
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/house.jpg")';
    document.getElementById("description").innerHTML="Level 1";
    document.getElementById("description").innerHTML= "Je bent verdwaald tijdens Halloween en je komt dit huis tegen." 
    + "<br>"+ "Wat ga je doen?";
    document.getElementById("button1").innerHTML= "AANBELLEN";
    document.getElementById("button2").innerHTML= "WEGRENNEN!!!";
    document.getElementById("button2").style.display= "inline";
    items['option_three'].style.display= "none";
    items['option_one'].onclick = function(){route1()};
    items['option_two'].onclick = function(){route2()};

}      
function route1(){             //Aanbellen
    items['image'].style.backgroundImage = 'url("img/kerker.jpg")';
    items['image'].style.left = 0 + "px";

    items['item'].src = "img/key.png";
    items['item'].style.display= "block";

    document.getElementById("description").innerHTML= "Je belt aan, en hoort een rare gil! Dan is alles zwart.." 
    + "<br>"+ "Je word wakker in een kooi die in een soort kelder ligt, je moet ontsnappen. Je hoort dat gegil weer! Wat ga je doen?";
    document.getElementById("button1").innerHTML= "Kijken of je iets in je zakken hebt.";
    document.getElementById("button2").innerHTML= "Kooi openmaken!";

    items['item'].style.display= "none";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "inline";
    items['option_one'].onclick = function(){pocket()};
    items['option_two'].onclick = function(){open()};
}
function route2(){             //Wegrennen
    document.getElementById("description").innerHTML= "Je rent weg! Na een tijdje begin je weer te lopen en kom je weer terug bij het huis! Wat ga je doen?";
    document.getElementById("button1").innerHTML= "Aanbellen";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "none";
}
function pocket(){             //Kijken of je wat in je zakken hebt
    document.getElementById("description").innerHTML= "Je hebt niks in je zakken! Gestrest kijk je weer terug wie er benenden is gekomen, en je staat oog in oog met een MONSTER!"
        + "<br>" + "Je word leven opgegeten en gaat dood.";
    document.getElementById("button1").innerHTML= "Opnieuw Beginnen";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "none";
    items['option_one'].onclick = function(){intro()};
}
function open(){              //Kooi openmaken!
    items['item'].style.display= "block";
    items['item'].style.position= "absolute";
    items['item'].style.top= "100px";
    items['item'].style.right= "180px";
    items['item'].style.cursor= "pointer";
    document.getElementById("description").innerHTML= "Je hebt geen SLEUTEL zoek hem snel!";
    items['option_one'].style.display= "none";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";
    items['item'].onclick= function(){clicked()};
}
function clicked(){           //als sleutel is geklikt
    document.getElementById("description").innerHTML= "Mooi, je hebt hem gevonden maak snel de kooi open!";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "inline";
    items['option_one'].style.display= "none";
    document.getElementById("button1").innerHTML= "Kooi openmaken";
    items['item'].style.display= "none";
    items['option_one'].onclick = function(){cageopen()};
}
function cageopen(){          //kooi open
    document.getElementById("description").innerHTML= "Mooi, je bent eruit. Je hoort dat er NU iets naar beneden komt! Zoek snel uit hoe je hier wegkomt!";
}


