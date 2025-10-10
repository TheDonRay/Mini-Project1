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
    if (!userResponse) { 
        console.log('You did not enter anything'); 
    }
    console.log(`You are being stressed from ${userresponse}`); 
    rl.close(); // close the interface here 
});   

//TODO: ask another question here about user stress level based of a number. 



let userLevel; // should be undefined here for now. 

function StressLevel() { 
    // handle some try and catch to check if user Responsed or not.  
    try { 
        if (Number.isInteger(userlevel) > 5) { 
            console.log('Seems you are very stressed go outside and take a walk!'); 
        } else if (!Number.isInteger(userlevel)){ 
            console.log('Error not a valid number');
        }
    } catch (error) { 
        console.error(error); 
    }
} 
// invoke function 
StressLevel(); 