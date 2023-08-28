function getComputerChoice (){
    //select Rock Paper or Scissors at random
    //return the choice
    const PICK = ["Rock", "Paper", "Scissors"];

    const random = Math.floor(Math.random() * PICK.length);
    return (PICK[random]);

}
getComputerChoice();

console.log(getComputerChoice());