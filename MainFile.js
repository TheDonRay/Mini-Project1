// Main file for my mini Javascript project / going over functions. 

/*Goal for this project is to create something fun using CLI and what I've learned from JS function fundamentals etc */ 

// TODO: Figure out how to get user input from terminal line in Javascript 
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

//global variable here 
let userResponse; 

rl.question('Welcome to CalmLine what are you stressed about?', (userresponse) => {  
    userResponse = userresponse; 
    console.log(`You are being stressed from ${userresponse}`); 
    rl.close(); // close the interface here 
});  

// create a function to take that user input. 