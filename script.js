function getComputerChoice (){
    //select Rock Paper or Scissors at random
    //return the choice
    const PICK = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * PICK.length);
    return (PICK[random]);

}
/*
getComputerChoice();

console.log(getComputerChoice());
*/

function playerSelection() {
    //prompt user for their choice
    //return the choice
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toUpperCase();
    return playerChoice;
}

//playerSelection(); doesnt work with the playround function must be called within the playRound

function playRound(playerSelection, getComputerChoice) {
    //compare playerSelection to getComputerChoice
    //return the outcome
    if (playerSelection === "ROCK" && getComputerChoice === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "ROCK" && getComputerChoice === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "PAPER" && getComputerChoice === "Rock") {
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "PAPER" && getComputerChoice === "Scissors") {
        return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "SCISSORS" && getComputerChoice === "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "SCISSORS" && getComputerChoice === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else {
        return "It's a tie!";
    }
    
}

console.log(playRound(playerSelection(), getComputerChoice()));