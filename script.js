/**
    Simple implementation of rock paper scissors game.
    
    Possible outcomes:
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

/**
 * Randomly selects a choice for the computer.
 * @param {array} choices 
 * @returns item randomly selected from choices array
 */
function getComputerChoice(choices) {
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

/**
 * Prompts the user for a choice and validates the input.
 * @param {array} choices 
 * @returns user's choice
 */
function getPlayerChoice(choices) {

    const choiceMessage = "Enter your choice (Rock, Paper, Scissors):";
    const invalidMessage = "Invalid choice. Select again:";

    let choice = prompt(choiceMessage).toLowerCase();
    let valid = false;

    while(!valid) {
        if (!choices.includes(choice)) {
            choice = prompt(invalidMessage).toLowerCase();
        } else {
            valid = true;
        }
    }
    
    return choice; 
}

/**
 * Takes the player and computer selections, determines the result, and returns
 * a message describing the result.
 * @param {string} playerSelection 
 * @param {string} computerSelection 
 * @returns String describing the result of the round.
 */
function playRound(playerSelection) {
    const tie = 0;
    const win = 1;
    const lose = 2;
    const resultMessage = ["You tie!", "You win!", "You lose!"];
    const comparisonMessage = ["ties with", "beats", "loses to"];
    const choices = ["rock", "paper", "scissors"];


    computerSelection = getComputerChoice(choices);

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

    return `${resultMessage[result]} ${playerSelection} ${comparisonMessage[result]} ${computerSelection}`;

}

/**
 * Main function to control the game play.
 * @param {number} rounds - the number of rounds to play in the game.
 */
function game(rounds) {
    const choices = ["rock", "paper", "scissors"];
    const tieMessage = "It's a tie. Choose again.";
    const gameTitleMessage = "Rock, Paper, Scissors!";

    let playerScore = 0;
    let computerScore = 0;
    let resultMessage = "";
    let i = 0;

    console.log(gameTitleMessage);
    for(i = 0; i < rounds; i++) {
        resultMessage = playRound(getPlayerChoice(choices), getComputerChoice(choices));
        
        while(resultMessage.includes("tie")) {
            alert(tieMessage);
            resultMessage = playRound(getPlayerChoice(choices), getComputerChoice(choices));
        }
        
        if (resultMessage.includes("win")) {
            playerScore += 1;
        } else {
            computerScore += 1;
        }
        console.log(resultMessage);
    }
    console.log(`Player: ${playerScore}`);
    console.log(`Computer: ${computerScore}`);

}


const btnList = document.querySelectorAll(".btn");
let playerScore = 0;
let computerScore = 0;

function handleSelection(e) {
    const result = playRound(e.srcElement.id);

    const resultDiv = document.querySelector(".result");
    resultDiv.textContent = result;

    updateScore(result);
};

function updateScore(result) {
    if(result.includes('tie')) return;
    if(result.includes('win')) {
        const playerScore = document.querySelector("#player-score");
        const currentScore = Number(playerScore.textContent);
        playerScore.textContent = String(currentScore + 1);
    } else {
        const computerScore = document.querySelector("#computer-score");
        const currentScore = Number(computerScore.textContent);
        computerScore.textContent = String(currentScore + 1);
    }
}

btnList.forEach(btn => btn.addEventListener('click', handleSelection));
