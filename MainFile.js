// Main file for my mini Javascript project / going over functions. 

/*Goal for this project is to create something fun using CLI and what I've learned from JS function fundamentals etc */ 

// TODO: Figure out how to get user input from terminal line in Javascript  
// this is the initialization of the readline here 
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
}); 

//global variable here 
let userResponse; 

rl.question('Welcome to CalmLine what are you stressed about?', (userresponse) => {  
    userResponse = userresponse;  
    //TODO: Handle error here  
    
    console.log(`You are being stressed from ${userresponse}`); 
    rl.close(); // close the interface here 
});   

let userLevel; // should be undefined here for now. 
// ask another question here about user stress level based of a number.
rl.question('What are you stress Levels from a scale of 1 - 10?', (userLevels))

// create a function to take that user input. 
function StressLevel() { 
    // handle some try and catch to check if user Responsed or not.  
    try { 
        if (!userRe) { 
            console.log("Sorry there was no response from you");
        }
    } catch (error) { 
        console.error(error); 
    }
}