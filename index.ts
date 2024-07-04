#! /usr/bin/env node

import inquirer from "inquirer";

console.log("Welcome to Number Guessng Game!\n")

const secretNumber = Math.floor(Math.random() * 10 + 1);

let myloop = true
let attempts = 1;

while(myloop){

const userInput = await inquirer.prompt({
     type: 'number',
     name: 'userNumber',
     message: "Enter your Number!"

});

let {userNumber} = userInput;

console.log(`\nYour attempt No.${attempts}`)

if (userNumber === secretNumber) wonMatch();
if (userNumber  > secretNumber) greaterNum();
if(userNumber < secretNumber) lessNum();

function wonMatch(){
     console.log(`Congratulations! You guessed the number in ${attempts} attempts!`);
     console.log(`\nYour guessed number ${userNumber} is correct!`);
    
     myloop = false;

}
function greaterNum(){
     console.log(`Your guessed number is greater than actual number`)

}
function lessNum(){
     console.log(`Your guessed number is less than actual number!`);
     attempts++

}

}