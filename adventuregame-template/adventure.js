var items = {item:document.getElementById("inventoryItem"), image:document.getElementById("game-container"), option_one: document.getElementById("button1"), 
option_two: document.getElementById("button2"), option_three: document.getElementById("button3")}; 

var title= document.getElementById("title");
var oppakken= {sleutel:false, wapen:false, ammo:false, goudensleutel:false};
var image1 = document.getElementById("game-container");
var enemy= true;
intro();

// Alle bugs gefixed nu testen voor nieuwe

function intro(){              //intro game
    items['option_one'].onclick = function(){start()};
    items['option_two'].onclick = function(){myScript};
    items['option_one'].style.display= "inline";
    items['option_three'].onclick = function(){myScript};
    items['image'].style.backgroundImage = "none";
    items['item'].style.display= "none";


    title.innerHTML="HAUNTED: THE GAME";
    document.getElementById("description").innerHTML="Introductie"+
    "<p>Welkom, bij HAUNTED: THE GAME!" 
    + "<br>" + "In deze game krijg je verschillende vragen met keuzes die je moet maken." 
    + "<br>" + "Die zien eruit als deze knoppen, laten we beginnen!</p>"; 

    document.getElementById("button1").innerHTML= "START";
    document.getElementById("button2").style.display= "none";
    document.getElementById("button3").style.display= "none";
}
function start(){              //level
    title.innerHTML= "The Haunted House";
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
    title.innerHTML= "Gevangen";
    items['image'].style.backgroundImage = 'url("img/kerker.jpg")';
    items['image'].style.left = 0 + "px";

    items['item'].src = "img/key.png";
    items['item'].style.display= "block";

    document.getElementById("description").innerHTML= "Je belt aan, en hoort een vreem gekrijs! Dan is alles zwart.." 
    + "<br>"+ "Je word wakker in een soort cel, je moet ontsnappen. Je ziet een rooster! Wat ga je doen?";
    document.getElementById("button1").innerHTML= "Kijken voor iets in je zakken";
    document.getElementById("button2").innerHTML= "Ontsnappen door rooster";

    items['item'].style.display= "none";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "inline";
    items['option_one'].onclick = function(){pocket()};
    items['option_two'].onclick = function(){open()};
}
function route2(){             //Wegrennen
    title.innerHTML= "Het bos";
    document.getElementById("description").innerHTML= "Je rent weg! Na een tijdje begin je weer te lopen en kom je weer terug bij het huis! Wat ga je doen?";
    document.getElementById("button1").innerHTML= "Aanbellen";
    items['option_three'].style.display= "none";
    items['option_two'].style.display= "none";
}

function pocket(){             //Kijken of je wat in je zakken hebt
    title.innerHTML= "Gevangen";
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
function open(){               //Kan niet openmaken
    title.innerHTML= "Gevangen";
    document.getElementById("description").innerHTML= "Je hebt geen SLEUTEL!";

    //button 1
    items['option_one'].style.display= "none";

    //button 2
    items['option_two'].style.display= "none";

    //button 3
    items['option_three'].style.display= "none";

    //sleutel
    items['item'].style.display= "block";
    items['item'].style.width= "10%";
    items['item'].style.height= "10%";
    items['item'].style.position= "absolute";
    items['item'].style.top= "100px";
    items['item'].style.right= "180px";
    items['item'].style.cursor= "pointer";
    items['item'].onclick= function(){
        alert("Je hebt een sleutel gevonden!");
        oppakken["sleutel"]= true;
        items['item'].src = "img/vent.png";
        clicked();
    };
}

function clicked(){            //Als sleutel is geklikt
    title.innerHTML= "Gevangen";
    items['item'].style.width = "11%";
    items['item'].style.position = "absolute";
    items['item'].style.top = "130px";
    items['item'].style.right = "405px";
    items['item'].style.height = "18%";
    items['item'].style.transform = "rotate(-40deg)";
    items['item'].style.msTransform= "rotate(55deg)";

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
    title.innerHTML= "Gevangen";
    if(oppakken["sleutel"] == true){
        items['item'].src = "img/openvent.png";
        items['item'].style.width = "36%";
        items['item'].style.height = "34%";
        items['item'].style.transform = "rotate(55deg)";
        items['item'].style.msTransform= "rotate(100deg)";
        items['item'].style.right = "245px";
        items['item'].style.top = "55px";
        items['item'].onclick = function(){ventleft();};
    }else if(sleutel == false){
        document.getElementById("description").innerHTML= "Oeps! Je hebt geen sleutel. Je word opgegeten door het monster wat naar beneden is gekomen."
    } else if(enemy == false){
        items['item'].onclick = function(){ End()
        };    
    }  
}
function End(){
    title.innerHTML= "ONTSNAPT";
    document.getElementById("description").innerHTML= "Goed gedaan! Je bent ontsnapt!";
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = "";
    alert("Je hebt gewonnen!");
    items['option_one'].innerHTML= "Opnieuw spelen";
    items['option_one'].onclick = function(){intro()};
    items['option_two'].style.display= "none";
}

function ventleft(){          //als je in het huis bent
    title.innerHTML= "Ingang huis";
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

function hallwayLeft(){       //Als je in de gang linksboven bent 
    title.innerHTML= "Linker traphal";
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";
    items['option_one'].innerHTML= "Verder lopen";
    items['option_one'].onclick= function (){raam()};

    items['image'].style.backgroundImage = 'url("img/hall2.jpg")';

    items['item'].style.display = "block";
    items['item'].src = "img/ammo.png";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.width = "5%";
    items['item'].style.height = "auto";
    items['item'].style.opacity = "0.9";
    items['item'].style.top = "650px";
    items['item'].style.right = "300px";

    items['item'].onclick= function(){
        alert("Je hebt kogels gevonden!");
        oppakken['ammo'] = true;
        items['item'].style.display= "none";
        };

}
function hallwayRight(){      //Als je in de gang rechtsboven bent 
    title.innerHTML= "Rechter traphal";
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    items['item'].style.display = "none";
    items['option_one'].style.display= "none";
    items['option_two'].style.display= "none";
    items['option_three'].innerHTML= "Verder lopen";
    items['option_three'].onclick= function(){weapon()};
}

function raam(){              //Als je bij het raam bent
    title.innerHTML= "Raam kamer";
    document.getElementById("description").innerHTML= "Je bent bij een raam. Opeens hoor je iets ook naar boven komen!" + "<br>" + 
    "Wat ga je doen?";
    items['item'].src = "img/openkast.png";
    items['item'].style.display = "block";
    items['item'].style.top = "540px";
    items['item'].style.right = "830px";
    items['item'].style.height = "350px";
    items['item'].style.width = "auto";
    items['item'].style.opacity= "1";
    items['item'].style.cursor= "pointer";

    items['image'].style.backgroundImage = 'url("img/window.png")';

    items['option_three'].style.display= "inline";
    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "inline";
    
    items['option_three'].innerHTML = "Deur dicht doen";
    items['option_one'].innerHTML = "Verstoppen";
    items['option_two'].innerHTML = "Spring door raam";
    
    items['option_one'].onclick= function(){Hide()
        items['item'].src = "img/kast.png";
    };
    items['item'].onclick= function(){Hide()
        items['item'].src = "img/kast.png";
        items['item'].style.display = "block";
        items['item'].style.top = "540px";
        items['item'].style.right = "830px";
        items['item'].style.height = "350px";
        items['item'].style.width = "auto";
        items['item'].style.opacity= "1";
        items['item'].style.cursor= "none";
    };

    items['option_two'].onclick= function(){JumpOffWindow()};
    items['option_three'].onclick= function(){Nodoor()};

}
function Hide(){             //Als je je verstopt in de raamkamer
    title.innerHTML= "Raam kamer";
    document.getElementById("description").innerHTML= "Je hebt je verstopt in de kast.. Het monster is nu" 
    + "<br>" + " naar boven gekomen en heeft je niet gezien! Hij gaat weer weg. Wat ga je doen?";

    items['option_one'].style.display= "inline";
    items['option_one'].innerHTML= "Terug";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";

    items['option_one'].onclick= function(){left_back()
        if(oppakken['ammo'] == true){
            items['item'].style.display= "none";
        }else if(oppakken['ammo'] == false){
            items['item'].style.display = "block";
            items['item'].src = "img/ammo.png";
            items['item'].style.transform = "rotate(0deg)";
            items['item'].style.msTransform= "rotate(0deg)";
            items['item'].style.width = "5%";
            items['item'].style.height = "auto";
            items['item'].style.opacity = "0.9";
            items['item'].style.top = "650px";
            items['item'].style.right = "300px";
        }
        items['item'].onclick= function(){
        items['item'].style.display= "none";
        alert("Je hebt kogels gevonden!");
        oppakken['ammo'] = true;
        };
    };
}

function Nodoor(){            //Als je de deur van raamkamer sluit
    title.innerHTML= "Raam kamer";
    document.getElementById("description").innerHTML= "Uhm... Er is geen deur. Je gaat dood door het monster!";
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.top= "400px";
    items['item'].style.height= "500px";
    items['item'].style.height= "500px";
    items['item'].style.opacity= "1";
    items['item'].style.width= "25%";
    items['item'].style.cursor= "none";

    items['option_one'].innerHTML= "Opnieuw proberen";
    items['option_one'].onclick = function(){intro()};
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";
}
function monster(){           //Als je de sporen volgt
    title.innerHTML= "Woonkamer";
    items['image'].style.backgroundImage = 'url("img/room.jpg")';
    if(enemy == true){
        document.getElementById("description").innerHTML= "Je volgt de sporen en na een tijdje houden de sporen op en kijk je recht"
        + "<br>" + "in de ogen van het monster! Wat ga je doen?!";

        items['item'].src = "img/monster.png";
        items['item'].style.display = "block";
        items['item'].style.transform = "rotate(0deg)";
        items['item'].style.msTransform= "rotate(0deg)";
        items['item'].style.top= "400px";
        items['item'].style.height= "500px";
        items['item'].style.height= "500px";
        items['item'].style.opacity= "1";
        items['item'].style.width= "25%";
        items['item'].style.cursor= "cell";

        items['option_one'].style.display = "none";
        items['option_two'].innerHTML = "Rennen";
        items['option_three'].style.display = "inline";
        items['option_three'].innerHTML = "Verstoppen";

        items['item'].onclick = function(){fight()};
        items['option_two'].onclick = function(){run()};
        items['option_three'].onclick = function(){Hide_base()};
    }else if(enemy == false){
        document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
        items['option_one'].style.display= "inline";
        items['option_one'].innerHTML= "Terug";
        items['option_one'].onclick = function(){ventleft()};
        items['option_two'].innerHTML = "Naar kelder";
        items['option_two'].onclick = function(){Hide_base()};
        items['item'].src = "img/goldkey.png";
        items['item'].style.width= "3%";
        items['item'].style.height= "auto";
        items['item'].style.position= "absolute";
        items['item'].style.top= "680px";
        items['item'].style.right= "930px";
        items['item'].style.transform = "rotate(-30deg)";
        items['item'].style.cursor= "pointer";
        items['item'].onclick= function(){
            alert("Je hebt nog een sleutel gevonden!");
            oppakken['goudensleutel'] = true;
        };
    }



    
}

function Hide_base(){         //Als je naar de kelder gaat
    title.innerHTML= "Kelder";
    items['image'].style.backgroundImage = 'url("img/basement.jpg")';
    if(enemy == true){
        document.getElementById("description").innerHTML= "Je rent weg en verstopt je in de kelder! Het is er erg donker.. " 
    + "<br>" +"En opeens hoor iets achter je! Je verstijft van angst. En.. het is het monster!";
    
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.top= "400px";
    items['item'].style.height= "500px";
    items['item'].style.height= "500px";
    items['item'].style.opacity= "1";
    items['item'].style.width= "25%";
    items['item'].style.cursor= "none";

    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";
    items['option_one'].innerHTML= "Opnieuw proberen";
    items['option_one'].onclick = function(){intro()};
    }else if(enemy == false){

        document.getElementById("description").innerHTML= "Je bent nu in de kelder, wat ga je doen?";
        items['option_three'].style.display = "none";
        items['item'].style.display = "block";
        items['item'].src = "img/vent.png";
        items['item'].style.height= "10%";
        items['item'].style.width= "auto";
        items['item'].style.right= "260px";
        items['item'].style.top= "250px";
        items['item'].style.transform = "rotate(-10deg)";
        items['item'].style.cursor= "pointer";
        items['option_two'].onclick= function (){monster()};
        items['item'].onclick = function(){ 
            
            if(oppakken['goudensleutel'] == true){
                LastventOpened()
                items['item'].src = "img/openvent.png";
                items['item'].style.height= "20%";
                items['item'].style.width= "auto";
                items['item'].style.right= "190px";
                items['item'].style.top= "200px";
                items['item'].style.transform = "rotate(-10deg)";
                items['item'].style.cursor= "pointer";
            }else if(oppakken['goudensleutel'] == false){
                alert("Je hebt hiervoor een sleutel nodig!");
            }
           
        };
    }
    
}
function LastventOpened (){   //Als de laatste vent open is gemaakt
    title.innerHTML= "Kelder";
    items['item'].onclick = function(){
        End()
    };
}

function weapon(){            //Als je rechts gaat
    title.innerHTML= "Slaapkamer";
    document.getElementById("description").innerHTML= "Je loopt de trap op en komt in deze kamer. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/bedroom.jpg")';
    items['option_one'].innerHTML= "Terug";
    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";

    items['item'].src= "img/weapon.png";
    items['item'].style.display= "block";
    items['item'].style.width= "100px";
    items['item'].style.height= "240px";
    items['item'].style.transform = "rotate(-20deg)";
    items['item'].style.msTransform= "rotate(-20deg)";
    items['item'].style.top= "550px";
    items['item'].style.right= "700px";
    items['item'].style.opacity= "0.8";

    items['item'].onclick= function(){
        oppakken['wapen'] = true;
        alert("Je hebt een wapen gevonden!");
        items['item'].style.display= "none";
        if(oppakken['wapen'] == true){
            items['option_one'].onclick= function(){right_back()};
        }
    }; 
    if(oppakken['wapen'] == false){
        items['option_one'].onclick= function(){Noweapon()};  
    }
}   

function right_back(){        //Als je van rechts terug gaat
    title.innerHTML= "Rechter traphal";
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    items['item'].style.display = "none";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    items['option_one'].onclick= function(){ventleft()
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    }; 
}  
function left_back(){        //Als je van links terug gaat
    title.innerHTML= "Linker traphal";
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/hall2.jpg")';

    items['option_one'].style.display= "inline";
    items['option_two'].style.display= "none";
    items['option_three'].style.display= "none";
    

    items['option_one'].onclick= function(){ventleft()
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    }; 
}  

function Noweapon(){         //Als je van rechts terug gaat zonder wapen
    title.innerHTML= "Rechter traphal";
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
    items['option_one'].innerHTML= "Opnieuw spelen";
    items['option_one'].onclick = function(){intro()};
}
function JumpOffWindow(){           //Als je door het raam springt
    title.innerHTML= "Raam kamer";
    document.getElementById("description").innerHTML= "Je springt door het raam en breekt iets, daarna komt het monster naar je toe en sleept" + "<br>" + 
    "je terug het huis in. Hier sterf je.";
    items['option_three'].style.display= "none";
    items['option_one'].style.display= "none";
    items['option_two'].innerHTML= "Opnieuw proberen";
    items['option_two'].onclick = function(){intro()};
}

function fight(){            //Vechten
    title.innerHTML= "Woonkamer";
    if(oppakken['wapen'] == true && oppakken['ammo'] == true){
        document.getElementById("description").innerHTML= "Wauw! Je hebt het monster gedood! Wat ga je nu doen?";
        items['item'].src = "img/goldkey.png";
        items['option_one'].style.display = "none";
        items['option_two'].innerHTML = "Terug";
        items['item'].style.width= "3%";
        items['item'].style.height= "auto";
        items['item'].style.position= "absolute";
        items['item'].style.top= "680px";
        items['item'].style.right= "930px";
        items['item'].style.transform = "rotate(-30deg)";
        items['item'].style.cursor= "pointer";
        items['item'].onclick= function(){
            alert("Je hebt nog een sleutel gevonden!");
            oppakken['goudensleutel'] = true;
        };
        enemy = false;
        items['option_two'].onclick= function (){ventleft();
        items['option_two'].style.display = "inline";
        document.getElementById("description").innerHTML= "Je bent weer terug waar je was, wat ga je doen?";
        items['option_two'].innerHTML= "Terug naar eetkamer";
        items['option_two'].onclick= function (){monster()};
        };
        items['option_three'].innerHTML = "Naar kelder";
    }else if(oppakken['wapen'] == true && oppakken['ammo'] != true){
        document.getElementById("description").innerHTML= "Je hebt geen kogels! Je gaat dood door het monster.";
        items['option_one'].style.display= "inline";
        items['option_one'].innerHTML= "Opnieuw proberen";
        items['option_one'].onclick = function(){intro()};
        items['option_two'].style.display= "none";
    }else if(oppakken['wapen'] != true && oppakken['ammo'] == true || oppakken['ammo'] != true){
        document.getElementById("description").innerHTML= "Oeps! Volgensmij heb je geen wapen.. Je gaat dood door het monster.";
        items['option_one'].style.display= "inline";
        items['option_one'].innerHTML= "Opnieuw proberen";
        items['option_one'].onclick = function(){intro()};
        items['option_two'].style.display= "none";

    }
}   
function run(){             //Wegrennen
    title.innerHTML= "Woonkamer";
    document.getElementById("description").innerHTML= "Few! Volgensmij ben je hem kwijt. Wat ga je nu doen?";
    items['option_one'].style.display = "inline";
    items['option_one'].innerHTML = "Linkertrap";
    items['option_two'].style.display = "inline";
    items['option_two'].innerHTML = "Rechtertrap";
    items['option_three'].style.display = "none";

    items['image'].style.backgroundImage = 'url("img/in-house.jpg")';
    items['item'].style.display= "none";

    items['option_one'].onclick= function(){hallwayLeft()};
    items['option_two'].onclick= function(){hallwayRight()};
    
}