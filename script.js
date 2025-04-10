const choices = ['rock','paper','scissors'];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
let ps=0;
let cs=0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * 3)]
    let result ="";

    if(playerChoice === computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch(playerChoice){
            case 'rock':
                result = (computerChoice === 'scissors') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'paper':
                result = (computerChoice === 'rock') ? "YOU WIN!" : "YOU LOSE!";
                break;
            case 'scissors':
                result = (computerChoice === 'paper') ? "YOU WIN!" : "YOU LOSE!";
                break;
        }
    }


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch(result){
        case "YOU WIN!":
            resultDisplay.style.color = "green";
            ps++;
            playerScore.textContent = ps;
            break;
        case "YOU LOSE!":
            resultDisplay.style.color = "red";
            cs++;
            computerScore.textContent = cs;
            break;
        case "IT'S A TIE!":
            resultDisplay.style.color = "blue";
            break;
    }

}