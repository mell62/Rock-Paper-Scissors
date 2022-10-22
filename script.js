
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
        return `Game is over!`;
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
            return "Hmmm it's a draw...game over";
        }
    }
    else {
        return `Get ready for round ${roundNumber}`;
    }
}

const body = document.querySelector('.results');
const buttons = document.querySelectorAll('button');
const result = document.createElement('div');
const score = document.createElement('div');
const round = document.createElement('div');
const gameOverText = document.createElement('div');
const computersPlay = document.createElement('div');

round.textContent = `Round number : ${roundNumber} Let the game begin!`
body.appendChild(round);
    buttons.forEach((button) => {
        button.addEventListener("click", () => {

            if (roundNumber >= 6){
                round.textContent = "Round number : 5";
            }
            else {
                round.textContent = `Round number : ${roundNumber}`;
            }

            result.textContent = `${playRound(button.textContent.toLowerCase())}`;
            computersPlay.textContent = `The computer chooses ${computersPlayvariable}!`;
            body.appendChild(computersPlay);
            body.appendChild(result);

            score.textContent = `Your Score: ${playerScore} Computer's Score: ${computerScore}`;
            body.appendChild(score);

            gameOverText.textContent = `${gameEnd()}`;
            body.appendChild(gameOverText);
        });
    });




