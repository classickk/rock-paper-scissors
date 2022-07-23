function getComputerChoice() {
    // generate random number between 0 - 2
    const ranNum = Math.floor(Math.random() * (2 + 1));
    // initialise variable to hold computer choice
    let compChoice;
    // assign 'Rock', 'Paper' or 'Scissors' to compChoice
    switch(ranNum) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice = "Paper";
            break;
        case 2:
            compChoice = "Scissors";
            break;
    }
    return compChoice;
}


function playRound(playerSelection, computerSelection) {
    // remove leading and trailing spaces from player selection
    playerSelection = playerSelection.trim();
    // make first letter of player choice uppercase
    let firstLetter = playerSelection.charAt(0).toUpperCase();
    // make rest of player choice lowercase
    let restOfName = playerSelection.substr(1).toLowerCase();
    // rebuild player choice string
    playerSelection = firstLetter.concat(restOfName);

    // check player selection is valid
    let isValid;
    if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        isValid = true;
    } else {
        isValid = false;
    }

    // if player selection is valid
    if((isValid)) {
        // check for draw if player and computer make the same selection
        if(playerSelection === computerSelection) {
            return `It's a draw!`
        }
        // check player wins
        else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper") {
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        // if player does not win and game is not a draw, computer wins
        else {
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }
    // return notification if player selection is not valid
    else {
        return `"${playerSelection}" is not a valid selection. Please choose either Rock, Paper or Scissors`;
    }
}

function game() {
    
}

const playerSelection = "elephant";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
