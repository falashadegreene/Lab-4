'use strict';

let userName = prompt ("What is your name?");

console.log (userName);

if (userName === "falashade") {
    console.log("Hey there nomad");
} else {
    console.log ("Hi! Welcome, Traveler!");
}

document.write (" <p id='person-name'>" + userName + "</p>");