var items = {item:document.getElementById("inventoryItem"), image:document.getElementById("game-container"), option_one: document.getElementById("button1"), 
option_two: document.getElementById("button2"), option_three: document.getElementById("button3")}; 

var title= document.getElementById("title");
var oppakken= {sleutel:false, wapen:false, ammo:false, goudensleutel:false};
var image1 = document.getElementById("game-container");
var enemy= true;
var runaway= false;
var hide= false;

// Edit: Alles in orde, geen nieuwe fouten gevonden. En code ingekort


//Hulp functies
function SetButtons(numberbutton,textbutton, eventhandler){
    if(textbutton != null){
        numberbutton.innerHTML= textbutton;
        numberbutton.style.display= "inline";
        numberbutton.onclick= eventhandler;
    }else{
        numberbutton.style.display= "none";
    }
}
function SummonMonster(){
    items['item'].src = "img/monster.png";
    items['item'].style.display = "block";
    items['item'].style.transform = "rotate(0deg)";
    items['item'].style.msTransform= "rotate(0deg)";
    items['item'].style.opacity= "1";
}
function Reset(){
    items['image'].style.backgroundImage = "none";
    items['item'].style.display= "none";

    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);

    oppakken= {sleutel:false, wapen:false, ammo:false, goudensleutel:false};
    enemy = true;

    items['option_two'].style.marginLeft = "0px";
    items['option_two'].style.marginRight = "0px";
    items['item'].style.opacity= "1";
    items['item'].style.cursor= "pointer";
}

intro();
//Level functies
function intro(){              //intro game
    Reset();
    title.innerHTML="HAUNTED: THE GAME";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML="Introductie"+
    "<p>Welkom, bij HAUNTED: THE GAME!" 
    + "<br>" + "In deze game krijg je verschillende vragen met keuzes die je moet maken." 
    + "<br>" + "Die zien eruit als zo'n knop, laten we beginnen!</p>"; 

    SetButtons(items['option_one'],'START', start);


}
function start(){              //level
    title.innerHTML= "The Haunted House";
    console.log(title.innerHTML);
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/house.jpg")';
    document.getElementById("description").innerHTML= "Je bent verdwaald tijdens Halloween en je komt dit huis tegen." 
    + "<br>"+ "Wat ga je doen?";
    
    SetButtons(items['option_one'],'AANBELLEN', Ring);
    SetButtons(items['option_three'],null);
    SetButtons(items['option_two'],'WEGRENNEN!', Runaway);

    if(runaway == true){
        SetButtons(items['option_two'],null);
    }else{
        SetButtons(items['option_two'],'WEGRENNEN!', Runaway);
    }


}      
function Ring(){             //Aanbellen
    title.innerHTML= "Gevangen";
    console.log(title.innerHTML);
    items['image'].style.backgroundImage = 'url("img/kerker.jpg")';

    items['item'].src = "img/key.png";
    items['item'].style.display= "none";

    document.getElementById("description").innerHTML= "Je belt aan, en hoort een vreemd gekrijs! Dan is alles zwart.." 
    + "<br>"+ "Je word wakker in een soort cel, je moet ontsnappen. Je ziet een rooster! Wat ga je doen?";

    SetButtons(items['option_one'],'Kijken voor iets in je zakken', pocket);
    SetButtons(items['option_two'],'Ontsnappen door rooster!', open);
    SetButtons(items['option_three'],null);
}
function Runaway(){             //Wegrennen van monster in bos 
    runaway= true;
    title.innerHTML= "Het bos";
    console.log(title.innerHTML);
    items['image'].style.backgroundImage = 'url("img/forest.jpg")';
    document.getElementById("description").innerHTML= "Je rent weg! Na een tijdje kom je in een eng bos en zie je iets lopen! Wat ga je doen?";
    SetButtons(items['option_one'],'TERUGRENNEN!', start);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);

    SummonMonster();    
    items['item'].style.top= "600px";
    items['item'].style.right= "500px";
    items['item'].style.height= "200px";
    items['item'].style.width= "auto";
    items['item'].style.cursor= "pointer";
    items['item'].onclick= function(){  
        document.getElementById("description").innerHTML= "Wat doe je nou?! Je bent te dichtbij en gaat dood door het monster.";
        SetButtons(items['option_one'],'Opnieuw prberen', start);

        items['item'].style.top= "235px";
        items['item'].style.height= "575px";
        items['item'].style.opacity= "1";
        items['item'].style.width= "auto";
    };
}
function pocket(){             //Kijken of je wat in je zakken hebt
    title.innerHTML= "Gevangen";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je hebt niks in je zakken! Gestrest kijk je weer terug wie er benenden is gekomen, en je staat oog in oog met het monster!"
        + "<br>" + "Je word leven opgegeten en gaat dood.";

    SetButtons(items['option_one'],'Opnieuw proberen', intro);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);

    SummonMonster();
    items['item'].style.top= "350px";
    items['item'].style.right= "400px";
    items['item'].style.height= "500px";
    items['item'].style.width= "25%";

}
function open(){               //Kan niet openmaken
    title.innerHTML= "Gevangen";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Hmm.. Zit vast, kijk rond voor dingen die je misschien kan gebruiken.";
    SetButtons(items['option_one'],null);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
    items['item'].style.display= "block";
    items['item'].style.width= "10%";
    items['item'].style.height= "10%";
    items['item'].style.position= "absolute";
    items['item'].style.top= "100px";
    items['item'].style.right= "180px";
    items['item'].onclick= function(){
        alert("Je hebt een sleutel gevonden!");
        oppakken["sleutel"]= true;
        items['item'].src = "img/vent.png";
        items['item'].style.opacity= "1";
        clicked();
    };
}
function clicked(){            //Als sleutel is geklikt
    document.getElementById("description").innerHTML= "Goed gedaan! Je hebt de sleutel gevonden!" 
    + "<br>" + "Op dat moment hoor je dat gekrijs weer, er komt iemand aan!" + "<br>" + "Ga snel door het rooster!";
    title.innerHTML= "Gevangen";
    console.log(title.innerHTML);
    items['item'].style.width = "11%";
    items['item'].style.position = "absolute";
    items['item'].style.top = "130px";
    items['item'].style.right = "405px";
    items['item'].style.height = "18%";
    items['item'].style.transform = "rotate(-40deg)";
    items['item'].style.msTransform= "rotate(55deg)";

    SetButtons(items['option_one'],null);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
    items['option_two'].innerHTML= "Open rooster";
    items['item'].onclick = function(){ventopen();};

}
function ventopen(){          //Rooster openen
    title.innerHTML= "Gevangen";
    console.log(title.innerHTML);
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
function ventleft(){          //als je in het huis bent
    title.innerHTML= "Ingang huis";
    console.log(title.innerHTML);
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/in-house.jpg")';
    if(oppakken['wapen'] == true || hide == true){
        document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    }else{
        document.getElementById("description").innerHTML= "Mooi, je bent eruit. Maar waar ben je nu?!" 
        + "<br>" + "Wat zijn die zwarte sporen op de grond en hoe kom je hier weg?" + "<br>" + 
        "Welk pad neem je?";
    }

    items['option_two'].style.marginLeft = "100px";
    items['option_two'].style.marginRight = "100px";
    SetButtons(items['option_one'],"Linkertrap", hallwayLeft);
    SetButtons(items['option_two'],"Sporen volgen", monster);
    SetButtons(items['option_three'],"Rechtertrap", hallwayRight);

    if(enemy == false){
        document.getElementById("description").innerHTML= "Je bent weer bij de ingang. Wat ga je doen?";
        SetButtons(items['option_two'],'Terug naar woonkamer', monster);
    }
}
function hallwayLeft(){       //Als je in de gang linksboven bent 
    title.innerHTML= "Linker traphal";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    SetButtons(items['option_one'],"Veder lopen", raam);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);

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

        if(oppakken['ammo'] == true){          
            items['item'].style.display= "none";
            SetButtons(items['option_one'],"Veder lopen", raam);
        } else{
            items['item'].style.display= "block";
            SetButtons(items['option_one'],"Veder lopen", raam);
        }
        items['item'].onclick= function(){
            alert("Je hebt kogels gevonden!");
            oppakken['ammo'] = true;
            items['item'].style.display= "none";
            hallwayLeft();
            };


}
function raam(){              //Als je bij het raam bent
    title.innerHTML= "Raam kamer";
    console.log(title.innerHTML);
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

    SetButtons(items['option_one'],'Verstoppen', Hide);
    SetButtons(items['option_two'],'Spring door raam!', JumpOffWindow);
    SetButtons(items['option_three'],'Deur dicht doen', Nodoor);
    
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
}
function Hide(){             //Als je je verstopt in de raamkamer
    items['item'].src = "img/kast.png";
    title.innerHTML= "Raam kamer";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je hebt je verstopt in de kast.. Het monster is nu" 
    + "<br>" + " naar boven gekomen en heeft je niet gezien! Hij gaat weer weg. Wat ga je doen?";
    
    hide = true;
    SetButtons(items['option_one'],'Terug', left_back);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
}
function JumpOffWindow(){           //Als je door het raam springt
    title.innerHTML= "Raam kamer";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je springt door het raam en breekt iets, daarna komt het monster naar je toe en sleept" + "<br>" + 
    "je terug het huis in. Hier sterf je.";

    SetButtons(items['option_one'],null);
    SetButtons(items['option_two'],'Opnieuw proberen', start);
    SetButtons(items['option_three'],null);
}
function Nodoor(){            //Als je de deur van raamkamer sluit
    title.innerHTML= "Raam kamer";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Uhm... Er is geen deur. Je gaat dood door het monster!";
    
    SummonMonster();
    items['item'].style.top= "400px";
    items['item'].style.height= "500px";
    items['item'].style.height= "500px";
    items['item'].style.width= "25%";
    items['item'].style.cursor= "none";

    SetButtons(items['option_one'],'Opnieuw proberen', start);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
}
function left_back(){        //Als je van links terug gaat
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

    title.innerHTML= "Linker traphal";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/hall2.jpg")';

    SetButtons(items['option_one'],'Terug', ventleft);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
}  
function hallwayRight(){      //Als je in de gang rechtsboven bent 
    title.innerHTML= "Rechter traphal";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Wat doe je hier? Loop maar verder.";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    items['item'].style.display = "none";
    SetButtons(items['option_one'],null);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],'Verder lopen', weapon);
}
function weapon(){            //Als je rechts gaat
    title.innerHTML= "Slaapkamer";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je loopt de trap op en komt in deze kamer. Wat ga je doen?";
    items['image'].style.backgroundImage = 'url("img/bedroom.jpg")';

    SetButtons(items['option_one'],'Terug');
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);

    items['item'].src= "img/weapon.png";
    items['item'].style.display= "block";
    items['item'].style.width= "100px";
    items['item'].style.height= "240px";
    items['item'].style.transform = "rotate(-20deg)";
    items['item'].style.msTransform= "rotate(-20deg)";
    items['item'].style.top= "550px";
    items['item'].style.right= "700px";
    items['item'].style.opacity= "0.8";

    //Check dit voor alles wat checkt of wat je kan oppakken en kijk waarom die net naar links ging.
    if(oppakken['wapen'] == true){          
        items['item'].style.display= "none";
        SetButtons(items['option_one'],'Terug', right_back);
    } else{
        items['item'].style.display= "block";
        SetButtons(items['option_one'],'Terug', Noweapon);
    }

    items['item'].onclick= function(){
        oppakken['wapen'] = true;
        alert("Je hebt een wapen gevonden!");
        weapon();
    }; 
}   
function right_back(){        //Als je van rechts terug gaat
    title.innerHTML= "Rechter traphal";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
    items['item'].style.display = "none";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    SetButtons(items['option_one'],'Terug', ventleft);
}  
function Noweapon(){         //Als je van rechts terug gaat zonder wapen
    title.innerHTML= "Rechter traphal";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Je gaat de gang uit, komt het monster tegen en gaat dood.";
    
    SummonMonster();
    items['item'].style.top= "350px";
    items['item'].style.right= "400px";
    items['item'].style.height= "500px";
    items['item'].style.width= "25%";
    items['image'].style.backgroundImage = 'url("img/hallway.jpg")';
    
    SetButtons(items['option_one'],'Opnieuw spelen', start);
}
function monster(){           //Als je de sporen volgt
    title.innerHTML= "Woonkamer";
    console.log(title.innerHTML);
    items['image'].style.backgroundImage = 'url("img/room.jpg")';
    if(enemy == true){
        document.getElementById("description").innerHTML= "Je volgt de sporen en na een tijdje houden de sporen op en kijk je recht"
        + "<br>" + "in de ogen van het monster! Wat ga je doen?!";

        SummonMonster();
        items['item'].style.top= "400px";
        items['item'].style.height= "500px";
        items['item'].style.height= "500px";
        items['item'].style.width= "25%";
        items['item'].style.cursor= "cell";
        items['item'].onclick = function(){fight()};

        SetButtons(items['option_one'],null);
        SetButtons(items['option_two'],'RENNEN!', run);
        SetButtons(items['option_three'],'Verstoppen', Hide_base);

    }else if(enemy == false){
        document.getElementById("description").innerHTML= "Je bent weer terug waar je was. Wat ga je doen?";
        SetButtons(items['option_two'],'Terug');
        items['item'].onclick= function(){
            items['item'].style.display= "none";
            alert("Je hebt een gouden sleutel gevonden!");
            oppakken['goudensleutel'] = true;
            monster();
        };
        if(oppakken['goudensleutel'] == false){
            items['item'].style.display= "block";
            items['item'].src = "img/goldkey.png";
            SetButtons(items['option_one'],null);
            SetButtons(items['option_two'],'Terug');
            items['item'].style.width= "3%";
            items['item'].style.height= "auto";
            items['item'].style.position= "absolute";
            items['item'].style.top= "680px";
            items['item'].style.right= "930px";
            items['item'].style.transform = "rotate(-30deg)";
            items['item'].style.cursor= "pointer";
        }else if(oppakken['goudensleutel'] == true){
            items['item'].style.display= "none";
        }
        items['option_three'].style.display= "none";
        SetButtons(items['option_one'],'Terug', ventleft);

        SetButtons(items['option_two'],'Naar kelder', Hide_base);
    }    
}
function Hide_base(){         //Als je naar de kelder gaat
    title.innerHTML= "Kelder";
    console.log(title.innerHTML);
    items['image'].style.backgroundImage = 'url("img/basement.jpg")';
    if(enemy == true){
        document.getElementById("description").innerHTML= "Je rent weg en verstopt je in de kelder! Het is er erg donker.. " 
    + "<br>" +"En opeens hoor iets achter je! Je verstijft van angst. En.. het is het monster!";
    
    SummonMonster();
    items['item'].style.top= "400px";
    items['item'].style.height= "500px";
    items['item'].style.height= "500px";
    items['item'].style.width= "25%";
    items['item'].style.cursor= "none";

    SetButtons(items['option_one'],'Opnieuw proberen', start);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
    }else if(enemy == false){
        document.getElementById("description").innerHTML= "Je bent nu in de kelder, wat ga je doen?";
        SetButtons(items['option_two'],null);
        SetButtons(items['option_three'],null);
        items['item'].style.display = "block";
        items['item'].src = "img/vent.png";
        items['item'].style.height= "10%";
        items['item'].style.width= "auto";
        items['item'].style.right= "260px";
        items['item'].style.top= "250px";
        items['item'].style.transform = "rotate(-10deg)";
        items['item'].style.cursor= "pointer";

        SetButtons(items['option_one'],'Terug',monster);
        items['item'].onclick = function(){ 
            if(oppakken['goudensleutel'] == true){
                title.innerHTML= "Kelder";
                console.log(title.innerHTML);
                items['item'].onclick = function(){
                    End()
                };
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
function fight(){            //Vechten
    title.innerHTML= "Woonkamer";
    console.log(title.innerHTML);
    if(oppakken['wapen'] == true && oppakken['ammo'] == true){
        document.getElementById("description").innerHTML= "Wauw! Je hebt het monster gedood! Wat ga je nu doen?";
        items['item'].src = "img/goldkey.png";

        SetButtons(items['option_one'],null);
        SetButtons(items['option_two'],'Terug', ventleft);

        items['item'].style.width= "3%";
        items['item'].style.height= "auto";
        items['item'].style.position= "absolute";
        items['item'].style.top= "680px";
        items['item'].style.right= "930px";
        items['item'].style.transform = "rotate(-30deg)";
        items['item'].style.cursor= "pointer";

        items['item'].onclick= function(){
            items['item'].style.display= "none";
            alert("Je hebt een gouden sleutel gevonden!");
            oppakken['goudensleutel'] = true;
            fight();

            if(oppakken['goudensleutel'] == true){          
                items['item'].style.display= "none";
            } else if(oppakken['goudensleutel'] == false){
                items['item'].style.display= "block";
            }
        };
        enemy = false;
        SetButtons(items['option_three'],'Naar kelder', Hide_base);

    }else if(oppakken['wapen'] == true && oppakken['ammo'] != true){
        document.getElementById("description").innerHTML= "Je hebt geen kogels! Je gaat dood door het monster.";
        SetButtons(items['option_one'],'Opnieuw proberen', intro);
        SetButtons(items['option_two'],null);
    }else if(oppakken['wapen'] != true && oppakken['ammo'] == true || oppakken['ammo'] != true){
        document.getElementById("description").innerHTML= "Oeps! Volgensmij heb je geen wapen.. Je gaat dood door het monster.";
        SetButtons(items['option_one'],'Opnieuw proberen', intro);
        SetButtons(items['option_two'],null);
    }
}   
function run(){             //Wegrennen van monster in woonkamer
    title.innerHTML= "Ingang huis";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Few! Volgensmij ben je hem kwijt. Wat ga je nu doen?";

    SetButtons(items['option_one'],'Linkertrap', hallwayLeft);
    SetButtons(items['option_two'],'Rechtertrap', hallwayRight);
    SetButtons(items['option_three'],null);

    items['image'].style.backgroundImage = 'url("img/in-house.jpg")';
    items['item'].style.display= "none";    
}
function End(){               //Als je gewonnen hebt
    title.innerHTML= "ONTSNAPT";
    console.log(title.innerHTML);
    document.getElementById("description").innerHTML= "Goed gedaan! Je bent ontsnapt!";
    items['item'].style.display= "none";
    items['image'].style.backgroundImage = 'url("img/house.jpg")';
    alert("Je hebt gewonnen!");
    SetButtons(items['option_one'],'Opnieuw proberen', intro);
    SetButtons(items['option_two'],null);
    SetButtons(items['option_three'],null);
}