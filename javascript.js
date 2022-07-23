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