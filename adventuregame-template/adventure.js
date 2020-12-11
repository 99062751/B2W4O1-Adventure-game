var items = {item:document.getElementById("inventoryItem"), image:document.getElementById("game-container"), option_one: document.getElementById("button1"), 
option_two: document.getElementById("button2"), option_three: document.getElementById("button3")}; 

var oppakken= {sleutel:false, wapen:false};

var image1 = document.getElementById("game-container");
intro();

function intro(){              //intro game
    items['option_one'].onclick = function(){start()};
    items['option_two'].onclick = function(){myScript};
    items['option_three'].onclick = function(){myScript};
    items['image'].style.backgroundImage = "none";
    items['item'].style.display= "none";

    document.getElementById("title").innerHTML="HAUNTED: THE GAME";
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
    document.getElementById("description").innerHTML= "Je hebt niks in je zakken! Gestrest kijk je weer terug wie er benenden is gekomen, en je staat oog in oog met het monster!"
        + "<br>" + "Je word leven opgegeten en gaat dood.";
    document.getElementById("button1").innerHTML= "Opnieuw Beginnen";
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.top= "350px";
    items['item'].style.right= "400px";
    items['item'].style.height= "500px";
    items['item'].style.opacity= "1";
    items['item'].style.width= "25%";
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
        alert("Je hebt een sleutel gevonden!");
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
function ventleft(){          //als je in het huis bent
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/in-house.jpg")';
    document.getElementById("description").innerHTML= "Mooi, je bent eruit. Maar waar ben je nu?!" 
    + "<br>" + "Wat zijn die zwarte sporen op de grond en hoe kom je hier weg?" + "<br>" + 
    "Welk pad neem je?";
    items['option_one'].style.display = "inline";
    items['option_two'].style.display = "inline";
    items['option_three'].style.display = "inline";
    items['option_one'].innerHTML = "Linkertrap";
    items['option_two'].innerHTML = "Sporen volgen";
    items['option_three'].innerHTML = "Rechtertrap";
    items['option_two'].style.marginLeft = "100px";
    items['option_two'].style.marginRight = "100px";
    items['option_one'].onclick= function(){hallwayLeft()};
    items['option_two'].onclick= function(){monster()};
    items['option_three'].onclick= function(){hallwayRight()};
}

function hallwayLeft(){
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    items['image'].style.backgroundImage = 'url("img/hall2.jpg")';
    items['option_one'].innerHTML= "Verder lopen";
    items['option_one'].onclick= function(){raam()};
    items['option_two'].display= "none";
    items['option_three'].display= "none";
}
function hallwayRight(){
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    items['option_three'].innerHTML= "Verder lopen";
    items['option_three'].onclick= function(){weapon()};
    items['option_two'].style.display= "none";
    items['option_one'].style.display= "none";
}

function raam(){              //Als je bij het raam bent
    items['image'].style.backgroundImage = 'url("img/window.png")';
    document.getElementById("description").innerHTML= "Je bent bij een raam. Opeens hoor je iets ook naar boven komen!" + "<br>" + 
    "Wat ga je doen?";
    items['option_one'].innerHTML = "Spring door raam";
    items['option_one'].onclick= function(){DeadEnd()};
    items['option_two'].innerHTML = "Deur dicht doen";
    items['option_three'].innerHTML = "Deur dicht doen";
    document.getElementById("description").innerHTML= ""
}

function DeadEnd(){           //Vanzelfsprekend
    document.getElementById("description").innerHTML= "Je springt door het raam en breekt iets, daarna komt het monster naar je toe en sleept" + "<br>" + 
    "je terug het huis in. Hier sterf je.";
}

function monster(){         //Als je de sporen volgt
    items['image'].style.backgroundImage = 'url("img/room.jpg")';
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.top= "400px";
    items['item'].style.height= "500px";
    items['item'].style.height= "500px";
    items['item'].style.opacity= "1";
    items['item'].style.width= "25%";

    items['option_one'].innerHTML = "Vechten";
    items['option_two'].innerHTML = "Rennen";
    items['option_three'].style.display = "none";
    document.getElementById("description").innerHTML= "Je volgt de sporen en na een tijdje houden de sporen op en kijk je recht"
    + "<br>" + "in de ogen van het monster! Wat ga je doen?!";

    items['option_one'].onclick = function(){fight()};
    items['option_two'].onclick = function(){run()};
}
function weapon(){          //Als je rechts gaat
    document.getElementById("description").innerHTML= "Je loopt de trap op en komt in deze kamer. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/bedroom.jpg")';
    items['option_one'].innerHTML= "Terug";
    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";

    items['item'].src= "img/weapon.png";
    items['item'].style.display= "block";
    items['item'].style.width= "80px";
    items['item'].style.height= "240px";
    items['item'].style.transform = "rotate(-20deg)";
    items['item'].style.msTransform= "rotate(-20deg)";
    items['item'].style.top= "400px";
    items['item'].style.left= "500px";
    items['item'].style.opacity= "0.5";
    items['item'].onclick= function(){
    alert("Je hebt een wapen gevonden!");
    oppakken['wapen'] = true;
    items['item'].style.display= "none";
    };
    if(oppakken['wapen'] = true){
        items['option_one'].onclick= function(){right_back()};
    }else if(oppakken['wapen'] == false){
        items['option_one'].onclick= function(){DeadEnd2()};  
    }
}   
function right_back(){            //Als je van rechts terug gaat
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    items['option_one'].onclick= function(){ventleft()
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    }; 
}  
function DeadEnd2(){           //Als je van rechts terug gaat zonder wapen
    document.getElementById("description").innerHTML= "Je gaat de gang uit, komt het monster tegen en gaat dood.";
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.top= "350px";
    items['item'].style.right= "400px";
    items['item'].style.height= "500px";
    items['item'].style.opacity= "1";
    items['item'].style.width= "25%";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
}