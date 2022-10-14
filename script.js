/* 
    rock paper scissors game 
    Player 1        Player 2        Result
    Rock            Paper           Player 2 Wins
    Rock            Rock            Tie
    Rock            Scissors        Player 1 Wins
    Paper           Paper           Tie
    Paper           Rock            Player 1 Wins
    Paper           Scissors        Player 2 Wins
    Scissors        Paper           Player 1 Wins
    Scissors        Rock            Player 2 Wins
    Scissors        Scissors        Tie
*/

console.log("Hello, world!");

const choices = ["rock", "paper", "scissors"];

function getComputerChoice(choices) {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

function getPlayerChoice(choices) {
    let choice = prompt("Enter your choice (Rock, Paper, Scissors):").toLowerCase();
     if (choices.includes(choice)) {
         return choice;
     } else {
        throw new Error("Invalid choice. Please choose either Rock, Paper, or Scissors.");
     } 
}

function playRound(playerSelection, computerSelection) {
    const tie = 0;
    const win = 1;
    const lose = 2;
    const messages = ["You tie!", "You win!", "You lose!"];
    const comparison = ["ties with", "beats", "loses to"];

    let result = undefined;
    if(playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
        result = tie;
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        result = win;
    } else if (playerSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        result = win;
    } else if (playerSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        result = win;
    } else {
        result = lose;
    }

    return `${messages[result]} ${playerSelection} ${comparison[result]} ${computerSelection}`;

}

console.log(playRound(getPlayerChoice(choices), getComputerChoice(choices)));