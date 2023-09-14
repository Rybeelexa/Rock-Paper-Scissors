let playerSelection;
let computerSelection;

const myArray = ["rock", "paper", "scissors"];
function getComputerChoice() {
    return myArray[~~(Math.random() * myArray.length)];
}
computerSelection = getComputerChoice();
//alert(computerSelection);

function playRound(playerSelection, computerSelection) {
    if(playerSelection === "rock" && computerSelection === "rock") {
        alert("DRAW! Rock balances Rock");
    } else if(playerSelection === "rock" && computerSelection === "paper") {
        alert("YOU LOSE! Paper covers Rock!");
    } else if(playerSelection === "rock" && computerSelection === "scissors") {
        alert("YOU WIN! Rock blunts Scissors");
    }  else if(playerSelection === "paper" && computerSelection === "rock") {
        alert("YOU WIN! Paper covers Rock");
    }  else if(playerSelection === "paper" && computerSelection === "paper") {
        alert("DRAW! Paper evens out paper");
    }  else if(playerSelection === "paper" && computerSelection === "scissors") {
        alert("YOU LOSE! Scissors slices paper");
    }  else if(playerSelection === "scissors" && computerSelection === "rock") {
        alert("YOU LOSE! Rock blunts Scissors");
    }  else if(playerSelection === "scissors" && computerSelection === "paper") {
        alert("YOU WIN! Scissors slices Paper");
    }  else if(playerSelection === "scissors" && computerSelection === "scissors") {
        alert("DRAW! Scissors evens out Scissors");
    } else {
        alert("Choose your weapon wisely!");
    }
}

const selectionButtons = document.querySelectorAll('[data-selection]');
selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
       const selectionName = selectionButton.dataset.selection;
       playerSelection = selectionName.toLowerCase();
       playRound(playerSelection, computerSelection);
       //alert(playerSelection);
    });
});






