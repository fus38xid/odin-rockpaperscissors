function getComputerChoice (){
    //select Rock Paper or Scissors at random
    //return the choice
    const PICK = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * PICK.length);
    return (PICK[random]);

}

let SCORES_HUMAN = 0;
let SCORES_COMPUTER = 0;


const SCORES_HUMAN_TEXT = document.getElementById("SCORES_HUMAN");
const SCORES_COMPUTER_TEXT = document.getElementById("SCORES_COMPUTER");


const ROCK = document.getElementById("ROCK");
const PAPER = document.getElementById("PAPER");
const SCISSORS = document.getElementById("SCISSORS");


function updateScores() {
  SCORES_HUMAN_TEXT.innerHTML = SCORES_HUMAN;
  SCORES_COMPUTER_TEXT.innerHTML = SCORES_COMPUTER;
}


ROCK.addEventListener("click", function (e){
  playRound ("ROCK");

});
PAPER.addEventListener("click", function (e){
  playRound("PAPER");

});
SCISSORS.addEventListener("click", function (e){
  playRound("SCISSORS");

});





function playRound(playerSelection) {
  computerChoice = getComputerChoice()
  //compare playerSelection to getComputerChoice
  //return the outcome
  if (playerSelection === "ROCK" && computerChoice === "Scissors") {
    SCORES_HUMAN++;
    updateReasonRockWINSScissors();
  } else if (playerSelection === "ROCK" && computerChoice === "Paper") {
    SCORES_COMPUTER++;
    updateReasonRockLOSESPaper();
  } else if (playerSelection === "PAPER" && computerChoice === "Rock") {
    SCORES_HUMAN++;
    updateReasonPaperWINSRock();
  } else if (playerSelection === "PAPER" && computerChoice === "Scissors") {
    SCORES_COMPUTER++;
    updateReasonPaperLOSESScissors();
  } else if (playerSelection === "SCISSORS" && computerChoice === "Paper") {
    SCORES_HUMAN++;
    updateReasonScissorsWINSPaper();
  } else if (playerSelection === "SCISSORS" && computerChoice === "Rock") {
    SCORES_COMPUTER++;
    updateReasonScissorsLOSESRock();
  } else {
    updateReasonTie();
  }
  updateScores()
}




//REASONS FOR WIN LOSE TIE

const SCORES_REASON_TEXT = document.getElementById("REASON");

function updateReasonRockWINSScissors() {
    switchCase("You Win! Rock beats Scissors!");
}

function updateReasonRockLOSESPaper() {
    switchCase("You Lose! Rock gets beaten by Paper!");
}

function updateReasonPaperWINSRock() {
    switchCase("You Win! Paper beats Rock!");
}

function updateReasonPaperLOSESScissors() {
    switchCase("You Lose! Paper gets beaten by Scissor!");
}

function updateReasonScissorsWINSPaper() {
    switchCase("You win! Scissors beat Paper!");
}

function updateReasonScissorsLOSESRock() {
    switchCase("You lose! Scissors gets beaten by Rock!");
}

function updateReasonTie() {
    switchCase("It's a tie!");
}

function switchCase(reasonText) {
    SCORES_REASON_TEXT.innerHTML = reasonText;
    return reasonText;
}
