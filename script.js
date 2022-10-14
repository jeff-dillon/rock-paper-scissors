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
    valid = false;

    while(!valid) {
        if (!choices.includes(choice)) {
            choice = prompt("Invalid choice. Select again:");
        } else {
            valid = true;
        }
    }
    
    return choice; 
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

function game(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    let result = "";
    for(i = 0; i < rounds; i++) {
        result = playRound(getPlayerChoice(choices), getComputerChoice(choices));
        if (result.includes("win")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log(result);
    }
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

}

game(5);
