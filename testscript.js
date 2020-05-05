//instantiates and declares something called "myitem" that is mapped to the element with the id "firsttest" in the html file
myitem = document.getElementById("firsttest");
thebutton = document.getElementById("thebutton");  
otheritem = document.getElementById("buttontest");
johnCenaButton = document.getElementById("jc");
item = document.getElementById("item");
item2 = document.getElementById("item2");
item3 = document.getElementById("item3");
chair = document.getElementById("chair");
jCena = document.getElementById("jcena");
textbox = document.getElementById("myinput");

//adds an event listner for clicking on the item and refers it to the function below
myitem.addEventListener("click", onClick);
myitem.addEventListener("mouseout", mouseOff);
thebutton.addEventListener("click", onButtonClick);
johnCenaButton.addEventListener("click", johnCenizer );
jCena.addEventListener("click", addBack);

//new function called onClick
function onClick() {  
    //sets the color to a different color
    myitem.style.color = "aqua";  
    myitem.style.fontSize = "2em";
}

function johnCenizer(){
    myitem.style.display = "none";
    thebutton.style.display = "none";
    otheritem.style.display = "none";
    item.style.display = "none";
    item2.style.display = "none";
    item3.style.display = "none";
    chair.style.display = "none";
    johnCenaButton.style.display = "none";
    textbox.style.display = "none";
    jCena.style.display = "block";
}

function addBack(){
    myitem.style.display = "";
    thebutton.style.display = "";
    otheritem.style.display = "";
    item.style.display = "";
    item2.style.display = "";
    item3.style.display = "";
    chair.style.display = "";
    johnCenaButton.style.display = "";
    textbox.style.display = "";
    jCena.style.display = "";
}

function mouseOff(){
    myitem.style.color = "";
    myitem.style.fontSize = "";
}

function onButtonClick() {  
    otheritem.style.color = "red";  
}

textentry = document.getElementById("myinput");  
textentry.addEventListener("change", onChange);

function onChange() {  
    newtext = myinput.value;  
    otheritem.innerHTML = newtext;  
}