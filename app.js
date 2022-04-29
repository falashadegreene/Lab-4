'use strict';

function greeting () {

    let userName = prompt ("What is your name?");
    console.log (userName);
    
    
    if (userName === "falashade") {
        console.log("Hey there nomad!");
    } else {
        console.log ("Hi! Welcome, Traveler!");
    } 
    
    
    document.write("<p id='person-name'> " + userName + "</p>");

}
greeting ()

function myTravel () {

    let userResponse = prompt ("Where do you want to travel?") ;
    console.log ("a country ")

    while (userResponse != "a country") {
    userResponse = prompt ("pick something else")
    }
}







