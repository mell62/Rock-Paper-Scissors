// Algorithm
// Create a function getComputerChoice for computer's choice of the play
// Use Math.random() function to randomize the selection of the choices Rock, Paper or Scissors
// return the randomized choice
// Create a function getPlayerChoice for the player's choice of the play
// Use prompt() function to get the player's choice as a string
// return the player's choice
// Create a function round() to run a single round of the game with computer's choice and player's choice as arguments
// Use the if and else if conditions to determine the winner of the round
// return the result of the function
// Create a function game() to play a 5 round game
// Initialize computer's score and player's score as 0 in two new variables
// Use for loop to iterate the round() function 5 times
// increase the value of computer's score or player's score depending on what the round function returns inside the loop
// use if condition to determine the winner of the game depending on whose score variable has higher value
function getComputerChoice(){
    let randomNumber = Math.random();
    let computerChoice;
    (randomNumber<0.34) ? computerChoice="rock" : (randomNumber<0.67) ? computerChoice="paper" : computerChoice="scissors";
    return computerChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("What will you play?", "");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

function playRound(computerChoice,playerChoice){
    let compChoice = computerChoice();
    let playChoice = playerChoice();
    if (compChoice === playChoice){
        return "It's a tie!";
    }
   
    else if (playChoice !== "rock" && playChoice !== "paper" && playChoice !== "scissors"){
        return "Enter a valid choice";
    } 
   
    else if (compChoice === "rock"){
        if (playChoice === "paper"){
            return "You win! Paper beats rock";
        } 
        else {
            return "You lose! Rock beats scissors";
        }
    }
   
    else if (compChoice === "paper"){
        if (playChoice === "rock"){
            return "You lose! Paper beats rock";
        } 
        else {
            return "You win! Scissors beats paper";
        }
    }
   
    else if (compChoice === "scissors"){
        if (playChoice === "rock"){
            return "You win! Rock beats scissors";
        } 
        else {
            return "You lose! Scissors beats paper";
        }
    }
}

function game(){
    let round;
    let computerScore = 0;
    let playerScore = 0;
    let result;
    for (round=1;round<6;round++){
        console.log("Round number:", round);
        result = playRound(getComputerChoice,getPlayerChoice);
        console.log(result);
        if (result === "You win! Paper beats rock" || result === "You win! Scissors beats paper" || result === "You win! Rock beats scissors"){
            playerScore += 1;
            console.log("Your score is", playerScore);
            console.log("Computer score is", computerScore);
        }
        else if (result === "You lose! Rock beats scissors" || result === "You lose! Paper beats rock" || result === "You lose! Scissors beats paper"){
            computerScore += 1;
            console.log("Your score is", playerScore);
            console.log("Computer score is", computerScore);
        }
        else if (result === "It's a tie!"){
            console.log("Your score is", playerScore);
            console.log("Computer score is", computerScore);
        }
        else if (result === "Enter a valid choice"){
            round -= 1;
        }
    }

   if (playerScore > computerScore){
    console.log("You win the game!");
   } 

   else if (computerScore > playerScore){
    console.log("You lose the game! Better luck next time");
   }

   else{
    console.log("The game is declared to be a draw.");
   }

}
console.log(game());