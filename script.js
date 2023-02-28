document.getElementById("ppic").src = "me.jpg";
alert("Hello!")
var you = prompt("What is your first name?")
var last = prompt("What is your last name?")
var floatstart = document.getElementById("frame")
floatstart.innerHTML=you + " " + last

var gend= "What is your gender? \n Female OK or Male CANCEL"
if(confirm(gend) == true){
    document.getElementById("gender").innerHTML ="F"
}else{
    document.getElementById("gender").innerHTML = "M"
}

var user = prompt("What is your username?")
document.getElementById("username").innerHTML = user

var self = prompt("Describe yourself <3")
document.getElementById("desc").innerHTML= self

var date = prompt("What is your birth year?")
document.getElementById("year").innerHTML= date
var age = 2023-date
document.getElementById("age").innerHTML= age

