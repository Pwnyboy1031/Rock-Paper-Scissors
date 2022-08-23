addEventListener('DOMContentLoaded', (e) => {
    const rockButton = document.getElementById("rock");
    rockButton.addEventListener("click", function() {
        playRound('rock');
    })

    const paperButton = document.getElementById("paper");
    paperButton.addEventListener("click", function() {
        playRound('paper');
    })

    const scissorsButton = document.getElementById("scissors");
    scissorsButton.addEventListener("click", function() {
        playRound('scissors');
    })

    const winnerDiv = document.getElementById("winnerDiv");
    const score = document.getElementById("score");
    const answerDiv = document.getElementById("answer");
    const cpuChoice = document.getElementById("cpuChoice")
    let playerWon = false;
    let computerWon = false;
    let computerWins = 0;
    let playerWins = 0;
    
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
        cpuChoice.innerHTML = `The computer chose ${choice}`;
        return(choice)
    }

    function playRound(playerSelection) {
        let computerSelection = getComputerChoice(1,3);
        
        
        if (playerSelection === computerSelection) {
            answerDiv.innerHTML = "Tie"
        } else if (playerSelection === "rock" && computerSelection === "scissors") {
            answerDiv.innerHTML = "You Win!"
            playerWon = true;
        } else if (playerSelection === "rock" && computerSelection === "paper") {
            answerDiv.innerHTML = "Oh no. The computer won."
            computerWon = true;
        } else if (playerSelection === "paper" && computerSelection === "rock") {
            answerDiv.innerHTML = "You Win!"
            playerWon = true;
        } else if (playerSelection === "paper" && computerSelection === "scissors") {
            answerDiv.innerHTML = "Oh no. The computer won."
            computerWon = true;
        } else if (playerSelection === "scissors" && computerSelection === "paper") {
            answerDiv.innerHTML = "You win!"
            playerWon = true;
        } else if (playerSelection === "scissors" && computerSelection === "rock") {
            answerDiv.innerHTML = "Oh no. The computer won."
            computerWon = true;
        }

        
        updateScore();

    }
    
    function updateScore() {
        let winner = "";
        if (playerWon == true) {
            playerWins += 1;
        } else if (computerWon == true) {
            computerWins += 1;
        }
    
        if (playerWins == 5) {
            winner = " the player!";
            winnerDiv.innerHTML = `The player won ${playerWins} times. The computer won ${computerWins} times. The winner is ${winner}`;
        } else if (computerWins == 5) {
            winner = " the computer!";
            winnerDiv.innerHTML = `The player won ${playerWins} times. The computer won ${computerWins} times. The winner is ${winner}`;
        } 

        score.innerHTML = (`*** Current Score ***
                            <br>
                            <br>
                            Player: ${playerWins}
                            <br>
                            Computer: ${computerWins}`);

        
    }
});

















