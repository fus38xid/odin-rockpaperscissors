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


//console.log("HUMAN: "+SCORES_HUMAN+" COMPUTER: "+SCORES_COMPUTER); 
//playRound 5 times
//game reports score after total of 5 times played 

function game() {
    //Scoreboard
    let SCORES_HUMAN = 0;
    let SCORES_COMPUTER = 0;

    for(let i = 0; i<5; i++) {
        playRound();
        console.log(playRound(playerSelection(), getComputerChoice()));
        
    }

    if(SCORES_HUMAN > SCORES_COMPUTER) {
        console.log("You Win!");
    } else if(SCORES_HUMAN < SCORES_COMPUTER) {
        console.log("You Lose!");
    }
    
    console.log("HUMAN: "+ SCORES_HUMAN +" COMPUTER: "+ SCORES_COMPUTER);




    function playRound(playerSelection, getComputerChoice) {
        //compare playerSelection to getComputerChoice
        //return the outcome
        if (playerSelection === "ROCK" && getComputerChoice === "Scissors") {
            SCORES_HUMAN++;
            return "You Win! Rock beats Scissors";
        } else if (playerSelection === "ROCK" && getComputerChoice === "Paper") {
            SCORES_COMPUTER++;
            return "You Lose! Paper beats Rock";
        } else if (playerSelection === "PAPER" && getComputerChoice === "Rock") {
            SCORES_HUMAN++;
            return "You Win! Paper beats Rock";
        } else if (playerSelection === "PAPER" && getComputerChoice === "Scissors") {
            SCORES_COMPUTER++;
            return "You Lose! Scissors beats Paper";
        } else if (playerSelection === "SCISSORS" && getComputerChoice === "Paper") {
            SCORES_HUMAN++;
            return "You Win! Scissors beats Paper";
        } else if (playerSelection === "SCISSORS" && getComputerChoice === "Rock") {
            SCORES_COMPUTER++;
            return "You Lose! Rock beats Scissors";
        } else {
            return "It's a tie!";
        }

    }



}

game();