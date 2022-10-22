
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice;
    (randomNumber<0.34) ? computerChoice="rock" : (randomNumber<0.67) ? computerChoice="paper" : computerChoice="scissors";
    return computerChoice;
}

let computersPlayvariable;

function playRound(playChoice){
    
    let compChoice = getComputerChoice();

    if (roundNumber > 5){
        return `Game is over! Reload the page to start another game!`;
    }

    computersPlayvariable = compChoice;

    if (compChoice === playChoice){
        roundNumber++;
        return "It's a tie!";
    }
   
    else if (playChoice !== "rock" && playChoice !== "paper" && playChoice !== "scissors"){
        return "Enter a valid choice";
    } 
   
    else if (compChoice === "rock"){
        if (playChoice === "paper"){
            playerScore += 1;
            roundNumber++;
            return "You win! Paper beats rock";
        } 
        else {
            computerScore += 1;
            roundNumber++;
            return "You lose! Rock beats scissors";
        }
    }
   
    else if (compChoice === "paper"){
        if (playChoice === "rock"){
            computerScore += 1;
            roundNumber++;
            return "You lose! Paper beats rock";
        } 
        else {
            playerScore += 1;
            roundNumber++;
            return "You win! Scissors beats paper";
        }
    }
   
    else if (compChoice === "scissors"){
        if (playChoice === "rock"){
            playerScore += 1;
            roundNumber++;
            return "You win! Rock beats scissors";
        } 
        else {
            computerScore += 1;
            roundNumber++;
            return "You lose! Scissors beats paper";
        }
    }
}

function gameEnd(){
    if (roundNumber === 6){
        if (computerScore > playerScore){
            return "Game over! The computer wins!";
        }
        else if (computerScore < playerScore){
            return "You win the game!";
        }
        else {
            return "Hmmm it's a draw...game over.";
        }
    }
    else {
        return `Get ready for round ${roundNumber}`;
    }
}

const body = document.querySelector('body');
const roundNumberInfo = document.querySelector('.roundnumber-info');
const resultBody = document.querySelector('.results');
const roundResult = document.createElement('div');
const score = document.createElement('div');
const gameOverText = document.createElement('div');
const computersPlay = document.createElement('div');
const buttons = document.querySelectorAll('button');
const buttonContainer = document.querySelector('.button-container');

roundNumberInfo.textContent = `Round number : ${roundNumber} Let the game begin!`
buttons.forEach((button) => {
    button.addEventListener("click", () => {

        if (roundNumber >= 6){
             roundNumberInfo.textContent = "Round number : 5";
         }
         else {
            roundNumberInfo.textContent = `Round number : ${roundNumber}`;
        }

        roundResult.textContent = `${playRound(button.textContent.toLowerCase())}`;
        computersPlay.textContent = `The computer chooses ${computersPlayvariable}!`;
        resultBody.appendChild(computersPlay);
        resultBody.appendChild(roundResult);

        score.textContent = `Your Score: ${playerScore} Computer's Score: ${computerScore}`;
        resultBody.appendChild(score);

        gameOverText.textContent = `${gameEnd()}`;
        resultBody.appendChild(gameOverText);
    });
});




