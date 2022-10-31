
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
        return "The game is over! Reload the page to play again!";
    }

    computersPlayvariable = compChoice.charAt(0).toUpperCase() + compChoice.slice(1);

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
       return "YOU WIN THE GAME!";
    }

    else if (computerScore === 5){
        return "YOU LOSE THE GAME";
    }
}

function removePlayerimage(){
    if(playerFlag){
        if (playerImginfo==="rock"){
            divPlayer.removeChild(playerRockimg);
            playerFlag = false;
        }
        else if (playerImginfo==="paper"){
            divPlayer.removeChild(playerPaperimg);
            playerFlag = false;
        }
        else if(playerImginfo==="scissors"){
            divPlayer.removeChild(playerScissorsimg);
            playerFlag = false;
        }
    }
}

function removeComputerimage(){
    if(computerFlag){
        if (computerImginfo==="rock"){
            divComputer.removeChild(computerRockimg);
            computerFlag = false;
        }
        else if (computerImginfo==="paper"){
            divComputer.removeChild(computerPaperimg);
            computerFlag = false;
        }
        else if(computerImginfo==="scissors"){
            divComputer.removeChild(computerScissorsimg);
            computerFlag = false;
        }
    }
}


const body = document.querySelector('body');
const resultBody = document.querySelector('.results');
const yourScore = document.querySelector('.your-score');
const computersScore = document.querySelector('.computer-score');
const gameOverText = document.querySelector('.game-over-text');
const gameInformationPlayer = document.querySelector('.game-information-player');
const gameInformationComputer = document.querySelector('.game-information-computer');
const buttons = document.querySelectorAll('button');
const playerPlayfield = document.querySelector('.player-choice');
const computerPlayField = document.querySelector('.computer-choice');
const playerImages = document.querySelector('.player-images');
const playerRockimg = document.querySelector('.player-rock-img');
const playerPaperimg = document.querySelector('.player-paper-img');
const playerScissorsimg = document.querySelector('.player-scissors-img');
const computerImages = document.querySelector('.computer-images');
const computerRockimg = document.querySelector('.computer-rock-img');
const computerPaperimg = document.querySelector('.computer-paper-img');
const computerScissorsimg = document.querySelector('.computer-scissors-img');
const divPlayer = document.createElement('div');
const divComputer = document.createElement('div');
let playerFlag = false;
let computerFlag = false;
let imageFlag = 1;
let playerImginfo;
let computerImginfo;
let endimagePlayer;

playerPlayfield.removeChild(playerImages);
computerPlayField.removeChild(computerImages);
playerPlayfield.insertBefore(divPlayer,gameInformationPlayer);
computerPlayField.insertBefore(divComputer,gameInformationComputer);

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        resultBody.textContent = `${playRound(button.textContent.toLowerCase())}`;

        if (!gameEnd()){
            gameInformationPlayer.textContent = `You chose ${button.textContent}!`;
            gameInformationComputer.textContent = `The computer chooses ${computersPlayvariable}!`;
        }

       
        
        yourScore.textContent = `Your Score: ${playerScore}`;
        computersScore.textContent =  `Computer's Score: ${computerScore}`;

        if (gameEnd()){
            gameOverText.textContent = `${gameEnd()}`;
            gameInformationPlayer.textContent = `You chose ${button.textContent}!`;
            gameInformationComputer.textContent = `The computer chooses ${computersPlayvariable}!`;
        }

    });

    button.addEventListener("click", removePlayerimage);
    button.addEventListener("click", removeComputerimage);
    button.addEventListener("click", () => {
        if (endimagePlayer){
            if (endimagePlayer === "rock"){
                divPlayer.appendChild(playerRockimg);
                gameInformationPlayer.textContent = `You chose Rock!`;
            } 
            else if(endimagePlayer === "paper"){
                divPlayer.appendChild(playerPaperimg);
                gameInformationPlayer.textContent = `You chose Paper!`;
            }
            else if(endimagePlayer === "scissors"){
                divPlayer.appendChild(playerScissorsimg);
                gameInformationPlayer.textContent = `You chose Scissors!`;
            }
        }

        else if(button.textContent === "Rock"){
            divPlayer.appendChild(playerRockimg);
            playerImginfo = "rock";
            playerFlag = true;
            if(playerScore===5 || computerScore===5){
                endimagePlayer = playerImginfo;
            }
        }
        else if(button.textContent === "Paper"){
            divPlayer.appendChild(playerPaperimg);
            playerImginfo = "paper";
            playerFlag = true;
            if(playerScore===5 || computerScore===5){
                endimagePlayer = playerImginfo;
            }
        }
        else if(button.textContent === "Scissors") {
            divPlayer.appendChild(playerScissorsimg);
            playerImginfo = "scissors";
            playerFlag = true;
            if(playerScore===5 || computerScore===5){
                endimagePlayer = playerImginfo;
            }
        } 
        
    });

    button.addEventListener("click", () => {
        if(computersPlayvariable === "Rock"){
            divComputer.appendChild(computerRockimg);
            computerImginfo = "rock";
            computerFlag = true;
        }
        else if(computersPlayvariable === "Paper"){
            divComputer.appendChild(computerPaperimg);
            computerImginfo = "paper";
            computerFlag = true;
        }
        else if(computersPlayvariable === "Scissors") {
            divComputer.appendChild(computerScissorsimg);
            computerImginfo = "scissors";
            computerFlag = true;
        } 
        
    });


});




