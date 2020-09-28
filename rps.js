const getUserChoice = document.getElementById("personinput");
if(getUserChoice === "rock" || getUserChoice === "paper" || getUserChoice === "scissors"){
    return getUserChoice;
}else{
    return ("error");
}
function computerPlay(){
    switch(Math.floor(Math.random()* 3)){
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";

    }
    function determineWinner(getUserChoice, GetComputerChoice) {
        if (getUserChoice === getComputerChoice) {
          return 'The game is a tie!';
         if (getUserChoice === 'rock') {
           if (getComputerChoice === 'paper') {
             return 'The computer won!';
           } else {
             return 'You Won!';
            
        if (getUserChoice === 'paper') {
          if (getComputerChoice === 'scissors') {
            return 'The computer won!';
          } else {
            return 'You won!';
               }
                 }
              }
            }
         }
        }
        const playGame = () => {
            const userChoice = getUserChoice('scissors');
            const computerChoice = getComputerChoice();
            console.log('You threw: ' + userChoice);
            console.log('The computer threw: ' + computerChoice);
            console.log(determineWinner(getUserChoice, getComputerChoice));
        }
        
        playGame();
}