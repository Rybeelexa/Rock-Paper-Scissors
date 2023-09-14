# Rock-Paper-Scissors
This is my first JavaScript project on The Odin Project.I hope  it's going to be fun!
 STEP 1: Create a function getComputerChoice that will randomly return either 'Rock', 'Paper' or 'Scissors'.
So the function works when I use the OR operator, but the problem is that it only returns "Rock". There's no random outputs; which is what we want to achieve.
STEP 2: Create a function that plays a single round of Rock, Paper,Scissors. It should also:
1. Have two parameters(playerSelection, computerSelection)
2. Return a string that declares the winner of the round.
3. The playerSelection parameter should be case-insensitive. That way users can input "roCK", "ROCK" or any other variation.
if(playerSelection==="rock" && computerSelection=== "rock") {
    return ("DRAW! Rock balances Rock");
} else if(playerSelection==="rock" && computerSelection === "paper") {
    return ("YOU LOSE! Paper covers Rock!");
} else if(playerSelection==="rock" && computerSelection==="scissors") {
    return("YOU WIN! Rock blunts Scissors");
}  else if(playerSelection==="paper" && computerSelection==="rock") {
    return("YOU WIN! Paper covers Rock");
}  else if(playerSelection==="paper" && computerSelection==="paper") {
    return("DRAW! Paper evens out paper");
}  else if(playerSelection==="paper" && computerSelection==="scissors") {
    return("YOU LOSE! Scissors slices paper");
}  else if(playerSelection==="scissors" && computerSelection==="rock") {
    return("YOU LOSE! Rock blunts Scissors");
}  else if(playerSelection==="scissors" && computerSelection==="paper") {
    return("YOU WIN! Scissors slices Paper");
}  else if(playerSelection==="scissors" && computerSelection==="scissors") {
    return("DRAW! Scissors evens out Scissors");
} else {
    return("Choose your weapon wisely!");
}
Rock("&#9994" or "&#x270A")
Rock("&#9995" or "&#x270B")
Rock("&#9996" or "&#x270C")
const myArray = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)];
}
