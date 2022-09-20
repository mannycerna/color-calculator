

const prompt = require('prompt-sync')({sigint: true});

//Create array to hold possible outcomes
let combInputs = ["red blue", "blue red", "red yellow", "yellow red", "blue yellow", "yellow blue"];
let combOutputs = ["purple", "orange", "green"];
// let colorDecision = prompt('Thank you for choosing to use the WDI 101 Color Calculator. Please choose to "combine (c) or descontruct (d): ');

//Let user know the possible colors
console.log(`Possible inputs:  One color entry: ${combOutputs}`);
console.log(`Possible inputs:  Two color entry: ${combInputs}`);

//Prompt user for input
let userInput = prompt("Enter a minumum of one or max of two colors: ").toLowerCase();

//print out what user entered 
console.log(`You chose: ${userInput}.`);

//Handle blanks validation
if (userInput === "")
    {console.log("Please input valid entry, blanks not allowed.")};
    
//rules for color combination or color deconstruction

    //comination rules begin here......
if ((combInputs.includes(userInput)) && userInput === ("red blue") || userInput === ("blue red")) {
    console.log("Your color combination is Purple!");
} else if 
    ((combInputs.includes(userInput)) && userInput === ("red yellow") || userInput === ("yellow red")) {
        console.log("Your color combination is Orange!")
    } else if 
        ((combInputs.includes(userInput)) && userInput === ("blue yellow") || userInput === ("yellow blue")) {
            console.log("Your color combination is Green!")
        } else if  //deconstruction rules begin here.....
         ((combOutputs.includes(userInput)) && userInput === "purple") {
            console.log("Your color deconstruction is red blue");
            } else if 
                ((combOutputs.includes(userInput)) && userInput === "orange") {
                    console.log("Your color deconstruction is red yellow");
                } else if 
                    ((combOutputs.includes(userInput)) && userInput === "green") {
                        console.log("Your color deconstruction is blue yellow");
                    } else {
                        console.log("Error")
                    }














