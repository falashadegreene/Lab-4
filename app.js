'use strict';
// declare a variable, assign it the value of the user's input
let userName = prompt ("What is your name?");
// print the user's input to the console
console.log (userName);

if (userName === "falashade") {
    console.log("Hey there nomad!");
} else {
    console.log ("Hi! Welcome, Traveler!");
}

// how can I put data on the page?
document.write("<p id='person-name'> " + userName + "</p>");
