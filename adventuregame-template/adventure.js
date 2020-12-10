var items = {item:document.getElementById("inventoryItem"), image:document.getElementById("game-container"), option_one: document.getElementById("button1"), 
option_two: document.getElementById("button2"), option_three: document.getElementById("button3")}; 

var oppakken= {sleutel:false};

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
    + "<br>"+ "Je word wakker in een soort kelder ligt, je moet ontsnappen. Je ziet een rooster! Wat ga je doen?";
    document.getElementById("button1").innerHTML= "Kijken voor iets in je zakken";
    document.getElementById("button2").innerHTML= "Ontsnappen door rooster";

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
function open(){              //Kan niet openmaken
    document.getElementById("description").innerHTML= "Je hebt geen SLEUTEL!";

    //button 1
    items['option_one'].style.display= "none";

    //button 2
    items['option_two'].style.display= "none";

    //button 3
    items['option_three'].style.display= "none";

    //sleutel
    items['item'].style.display= "block";
    items['item'].onclick= function(){
        oppakken["sleutel"]= true;
        items['item'].src = "img/vent.png";
        clicked();
    };
}
function clicked(){           //Als sleutel is geklikt
    items['item'].style.width = "10%";
    items['item'].style.position = "absolute";
    items['item'].style.top = "110px";
    items['item'].style.right = "420px";
    items['item'].style.height = "20%";
    items['item'].style.transform = "rotate(-50deg)";
    items['item'].style.msTransform= "rotate(-100deg)";
    document.getElementById("description").innerHTML= "Goed gedaan! Je hebt de sleutel gevonden!" 
    + "<br>" + "Op dat moment hoor je dat gekrijs weer, er komt iemand aan!" + "<br>" + "Ga snel door het rooster!"
    //button 1
    items['option_one'].style.display= "none";

    //button 2
    items['option_two'].style.display= "none";
    items['option_two'].innerHTML= "Open rooster";
    items['item'].onclick = function(){ventopen();};

    //button 3
    items['option_three'].style.display= "none";

}
function ventopen(){          //Rooster openen
    if(oppakken["sleutel"] == true){
        items['item'].src = "img/openvent.png";
        items['item'].style.width = "36%";
        items['item'].style.height = "34%";
        items['item'].style.transform = "rotate(55deg)";
    items['item'].style.msTransform= "rotate(100deg)";
    items['item'].style.right = "245px";
    items['item'].style.top = "55px";
    items['item'].onclick = function(){ventleft();};
    }else{
        document.getElementById("description").innerHTML= "Oeps! Je hebt geen sleutel. Je word opgegeten door het monster wat naar beneden is gekomen."
    }   
}

function ventleft(){          //als je het rooster verlaat
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/in-house.jpg")';
    document.getElementById("description").innerHTML= "Mooi, je bent eruit. Maar waar ben je nu?!" 
    + "<br>" + "Wat zijn die zwarte sporen op de grond en hoe kom je hier weg?" + "<br>" + 
    "Welk pad neem je?";
    items['option_one'].style.display = "inline";
    items['option_two'].style.display = "inline";
    items['option_three'].style.display = "inline";
    items['option_one'].innerHTML = "Trap 1";
    items['option_two'].innerHTML = "Gang";
    items['option_three'].innerHTML = "Trap 2";
    items['option_two'].style.marginLeft = "100px";
    items['option_two'].style.marginRight = "100px";
}