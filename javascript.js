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

function formatPlayerSelection(playerSelection) {
    // remove leading and trailing spaces from player selection
    playerSelection = playerSelection.trim();
    // make first letter of player choice uppercase
    let firstLetter = playerSelection.charAt(0).toUpperCase();
    // make rest of player choice lowercase
    let restOfName = playerSelection.substr(1).toLowerCase();
    // rebuild player choice string
    playerSelection = `${firstLetter}${restOfName}`;
    
    return playerSelection;
}

function checkIsValid(playerSelection) {
    let isValid;

    if(playerSelection == "Rock" || playerSelection == "Paper" || playerSelection == "Scissors") {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}


function playRound(playerSelection, computerSelection) {
    // if player selection is valid
    if(isValid) {
        // check for draw if player and computer make the same selection
        if(playerSelection === computerSelection) {
            return "It's a draw!"
        }
        // check player wins
        else if (playerSelection === "Rock" && computerSelection === "Scissors" ||
                playerSelection === "Paper" && computerSelection === "Rock" ||
                playerSelection === "Scissors" && computerSelection === "Paper") {
            ++playerScore;
            return `You win! ${playerSelection} beats ${computerSelection}`;
            
        }
        // if player does not win and game is not a draw, computer wins
        else {
            ++computerScore;
            return `You lose! ${computerSelection} beats ${playerSelection}`
        }
    }
    // return notification if player selection is not valid
    else {
        ++computerScore
        return `You lose! "${playerSelection}" is not a valid selection`;
    }
}

function game() {
    
    playerScore = 0;
    computerScore = 0;

    roundNumber = 0;

    for (let i = 0; i < 5; i++) {
        // get player choice
        playerSelection = prompt("What will it be? Rock, Paper or Scissors?");
        // format player choice
        playerSelection = formatPlayerSelection(playerSelection);
        // check player choice is valid
        isValid = checkIsValid(playerSelection);
        // get computer choice
        computerSelection = getComputerChoice();
        // play round
        let roundOutcome = playRound(playerSelection, computerSelection);
        ++roundNumber;

        console.log(`Round ${roundNumber}/5`);
        console.log(`You chose ${playerSelection}`);
        console.log(`Computer chose ${computerSelection}`);
        console.log(`${roundOutcome}`);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }
    
    getOverallWinner();
}

function getOverallWinner() {
    if(playerScore === computerScore) {
        console.log("It's a draw!");
    } else if(playerScore > computerScore) {
        console.log("Congratulations! You are the overall winner.");
    } else {
        console.log("The computer is the overall winner.");
    }
}

game();
