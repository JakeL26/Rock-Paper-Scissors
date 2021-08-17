let roundWinner = ""
const playerSelected = prompt("Rock, Paper or Scissors?", "Enter Here").toUpperCase();

function computerPlay() {
const rocPapSci = ["ROCK","PAPER","SCISSORS"];
const comAwnser = rocPapSci[Math.floor(Math.random() * rocPapSci.length)];
return comAwnser;
}

const computerSelected = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { 
        roundWinner = "Tie"
    }
  
    if (
    (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
    (playerSelection === "PAPER" && computerSelection === "ROCK") ||
    (playerSelection === "SCISSORS" && computerSelection === "PAPER") 
    ) {
        roundWinner = "Player wins!"
    }

    if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK") 
        ) {
            roundWinner = "Computer wins!"
        }
    return roundWinner
}

console.log('User Input is ' + playerSelected)

console.log('Computer Input is ' + computerSelected)

console.log(playRound(playerSelected, computerSelected));
  