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


function playRound(playChoice){
    let compChoice = getComputerChoice();
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

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        console.log(playRound(button.textContent.toLowerCase()));
})
});


