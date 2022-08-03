function getComputerChoice(min, max) {
    let choice = "";
    let randomInt = Math.floor(Math.random() * (max - min + 1) + min)
    if (randomInt == 1) {
        choice = "rock";
    } else if (randomInt == 2) {
        choice = "paper";
    } else if (randomInt == 3) {
        choice = "scissors";
    } else {
        choice = "Something went wrong";
    }
    console.log("The computer chose " + choice);
    return(choice)
}


let playerWon = false;
let computerWon = false;



function playRound(playerSelection, computerSelection) {
    playerWon = false;
    computerWon = false;
    if (playerSelection === computerSelection) {
        console.log("Tie");
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win!");
        playerWon = true;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("Oh no. The computer won.");
        computerWon = true;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win!");
       playerWon = true;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Oh no. The computer won.");
        computerWon = true;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        console.log("You win!");
        playerWon = true;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Oh no. The computer won.");
        computerWon = true;
    }
}

function game() {
    let playerWins = 0;
    let computerWins = 0;
    let winner = "";
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        const computerSelection = getComputerChoice(1,3);
        playRound(playerSelection,computerSelection);
        if (playerWon == true) {
            playerWins += 1;
        } else if (computerWon == true) {
            computerWins += 1;
        }
    }

    if (playerWins > computerWins) {
        winner = " the player!";
    } else {
        winner = " the computer!"
    }
    console.log("The player won " + playerWins + " times. The computer won " + computerWins + " times. The winner is" + winner)
}

game();

