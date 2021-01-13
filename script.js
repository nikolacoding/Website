function User(first, last, age, email, balance){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.email = email;
    this.balance = "$" + balance;
    this.image = function(){
        return "Data/" + this.firstName + ".jpg";
    };
}

var User1 = new User("Marko", "Simic", 25, "maki95@gmail.com", "470.94");
var User2 = new User("Janko", "Isidorovic", 19, "jankojanko22@gmail.com", "3571.89");
var User3 = new User("Zoran", "Radovic", 28, "zoka92@yahoo.com", "4300.32");
var User4 = new User("Zdravko", "Jovanovic", 32, "zdravke88@yahoo.com", "541,234.32");
var User5 = new User("Samujilo", "Krstic", 49, "samkekrsta@yahoo.com", "1,000.000.00");

var Users = [User1, User2, User3, User4, User5];
var propertyList = ["image()", "firstName", "lastName", "age", "email", "balance"]

var temptable = "";
var rows = propertyList.length;
var columns = Users.length;

for (var r = 0; r < rows; r++){
    temptable += "<tr>";
    if (r == 0){
        for (var c = 0; c < columns; c++){
            temptable += "<td><img src=" + Users[c].image() + " class='dtImage'></td>";
        }
    }
    if (r != 0){
        for (var c = 0; c < columns; c++){
            temptable += "<td>" + eval("Users[c]" + "." + propertyList[r]);
        }
        temptable += "</tr>";
    }
}

temptable += "<tr>";

var table = "<table class='dynamicTable'>" + temptable + "</table>";

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

window.onload = function(){
    document.getElementById("usertable").innerHTML = table;

    loopColor("title", 75);
    loopColor("utheader", 75);
    loopColor("usertableheaderarrow", 90);
    shiftNavBarBG(150)

    setInterval(function() { shiftNavBarBG(10); }, 100);
}