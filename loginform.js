function alternateColor(elementID){
    var title = document.getElementById(elementID);
    
    switch (title.style.color){
        case "red":
            title.style.color = "green";
        break;
        case "green":
            title.style.color = "blue";
        break;
        case "blue":
            title.style.color = "purple";
        break;
        case "purple":
            title.style.color = "red";
        break;
    }
}

function loopColor(elementID, interval){
    var title = document.getElementById(elementID);
    title.style.color = "green";
    setInterval(function() { alternateColor(elementID); }, interval);
}

var timesShiftedBG = 1;

function shiftNavBarBG(pixels){
    navBar = document.getElementById("navbar");
    navBar.style.backgroundPositionX = timesShiftedBG * pixels + "px";
    timesShiftedBG++;
}

function nobutton(){
    alert("We currently do not host a functional login system. Try again later.")
}

window.onload = function(){
    loopColor("title", 200);
    loopColor("logintitle", 200);
    loopColor("buttontitle", 200);
    loopColor("utheader", 200);
    loopColor("usertableheaderarrow", 200);
    shiftNavBarBG(150)

    setInterval(function() { shiftNavBarBG(10); }, 100);
}