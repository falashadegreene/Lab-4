'use strict';

function greeting () {

    let userName = prompt ("What is your name?");
    console.log (userName);
    
    
    if (userName === "falashade") {
        console.log("Hey there nomad!");
        alert ("Hey there nomad!")
    } else {
        console.log ("Hi! Welcome, Traveler!");
        alert ("Hi! Welcome, Traveler!")
    } 
    
   

    
   
    

}
greeting ()

function myTravel () {

    let userResponse = prompt ("Where do you want to travel?") ;
    console.log ("a country ")

    while (userResponse != "a country") {
    userResponse = prompt ("pick something else")
    }
}


let guesses = 3 ;
for (let i=1; i <= guesses; i ++) {
    let answer = prompt ( "Where is Sade's favorate place to travel?");
    if (answer == "iceland") {
        console.log ("You guessed it!");
        alert ("You guessed it!")
        break;
    } else if (i < 3) {
        console.log ("Nice try, but nah!");
        alert ("Nice try, but nah!")
    } else  {
            console.log ("Sorry, my friend.");
            alert ("Sorry, my friend")
    } 
    
}







