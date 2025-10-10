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
async function readlineUser() {

rl.question('Welcome to CalmLine what are you stressed about?', (userresponse) => {  
    userResponse = userresponse;  
    //TODO: Handle error here   
    if (!userResponse) { 
        console.log('You did not enter anything');  
        rl.close();
    }
    console.log(`You are being stressed from ${userresponse}`); 

    //TODO: ask another question here about user stress level based of a number.
    rl.question('On a scale of 1-10 how stressed are you?', (userRate) => {
        const stressLevels = Number(userRate); 

        if (isNaN(stresslevels) || stressLevels < 1){ 
            console.log('Invalid number please enter a number'); 
        } else { 
            // Todo call the function here  
            StessLevel(stresslevels)
        } 
        rl.close(); 
    }); 
});  

}
  

function StressLevel(userStressLevels) { 
    // handle some try and catch to check if user Responsed or not.  
    
} 
// function is already called in the read line function 
StressLevel(); 