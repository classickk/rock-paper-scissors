function getComputerChoice() {
    // generate random number between 0 - 2
    const RAN_NUM = Math.floor(Math.random() * (2 + 1));
    // initialise variable to hold computer choice
    let compChoice;
    // assign 'Rock', 'Paper' or 'Scissors' to compChoice
    switch(RAN_NUM) {
        case 0:
            compChoice = "Rock";
            break;
        case 1:
            compChoice="Paper";
            break;
        case 2:
            compChoice="Scissors";
            break;
    }
    return compChoice;
}

function playRound(playerSelection, computerSelection) {
    // remove leading and trailing spaces from player selection
    playerSelection = playerSelection.trim();
    // make first letter of player choice uppercase
    const firstLetter = playerSelection.charAt(0).toUpperCase();
    // make rest of player choice lowercase
    const restOfWord = playerSelection.substr(1).toLowerCase();
    // rebuild player choice string
    playerSelection = firstLetter.concat(restOfWord);
    


    console.log(playerSelection);
    console.log(computerSelection);
}

const playerSelection = "roCk";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));