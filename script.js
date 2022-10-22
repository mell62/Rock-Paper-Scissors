
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice;
    (randomNumber<0.34) ? computerChoice="rock" : (randomNumber<0.67) ? computerChoice="paper" : computerChoice="scissors";
    return computerChoice;
}

let computersPlayvariable;

function playRound(playChoice){
    
    let compChoice = getComputerChoice();

    if (playerScore === 5 || computerScore ===5){
        return "The game is over!";
    }

    computersPlayvariable = compChoice;

    if (compChoice === playChoice){
        return "It's a tie!";
    }
   
    else if (playChoice !== "rock" && playChoice !== "paper" && playChoice !== "scissors"){
        return "Enter a valid choice";
    } 
   
    else if (compChoice === "rock"){
        if (playChoice === "paper"){
            playerScore += 1;
            return "You win! Paper beats rock";
        } 
        else {
            computerScore += 1;
            return "You lose! Rock beats scissors";
        }
    }
   
    else if (compChoice === "paper"){
        if (playChoice === "rock"){
            computerScore += 1;
            return "You lose! Paper beats rock";
        } 
        else {
            playerScore += 1;
            return "You win! Scissors beats paper";
        }
    }
   
    else if (compChoice === "scissors"){
        if (playChoice === "rock"){
            playerScore += 1;
            return "You win! Rock beats scissors";
        } 
        else {
            computerScore += 1;
            return "You lose! Scissors beats paper";
        }
    }
}

function gameEnd(){
    if (playerScore === 5){
       return "You win the game!"
    }
    else if (computerScore === 5){
        return "You lose the game"
    }
}

const body = document.querySelector('body');
const resultBody = document.querySelector('.results');
const roundResult = document.createElement('div');
const score = document.createElement('div');
const gameOverText = document.createElement('div');
const computersPlay = document.createElement('div');
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        roundResult.textContent = `${playRound(button.textContent.toLowerCase())}`;
        computersPlay.textContent = `The computer chooses ${computersPlayvariable}!`;
        resultBody.appendChild(computersPlay);
        resultBody.appendChild(roundResult);

        score.textContent = `Your Score: ${playerScore} Computer's Score: ${computerScore}`;
        resultBody.appendChild(score);

        gameOverText.textContent = `${gameEnd()}`;
        if (playerScore === 5 || computerScore ===5){
            resultBody.appendChild(gameOverText);
        }
    });
});




