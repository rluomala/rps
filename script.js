let humanScore = 0
let computerScore = 0

const rock = document.querySelector("#rock");
rock.onclick = () => playRound('rock', getComputerChoice());

const paper = document.querySelector("#paper");
paper.onclick = () => playRound('paper', getComputerChoice());

const scissors = document.querySelector("#scissors");
scissors.onclick = () => playRound('scissors', getComputerChoice());

function getComputerChoice() {

    let rand = Math.floor((Math.random() * 3));

    if (rand === 0) {
        console.log('computer chose rock')
        return 'rock'
    }
    else if (rand === 1) {
        console.log('computer chose paper')
        return 'paper'
    }
    else {
        console.log('computer chose scissors')
        return 'scissors'
    }
}

function getHumanChoice() {
    
    let choice = window.prompt('rock, paper, or scissors?')

    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice
    }
    else {
        console.log('not a valid choice')
    }   
}

function playRound(humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase()
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            const result = document.querySelector("#result")
            result.textContent = "tie!"
        }
        else if(computerChoice === 'paper') {
            const result = document.querySelector("#result")
            result.textContent = "you lose! paper beats rock."
            ++computerScore
        }
        else {
            const result = document.querySelector("#result")
            result.textContent = "you win! rock beats scissors."
            ++humanScore
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'paper') {
            const result = document.querySelector("#result")
            result.textContent = "tie!"
        }
        else if(computerChoice === 'rock') {
            const result = document.querySelector("#result")
            result.textContent = "you win! paper beats rock."
            ++humanScore
        }
        else {
            const result = document.querySelector("#result")
            result.textContent = "you lose! scissors beats paper."
            ++computerScore
        }
    }
    else {
        if (computerChoice === 'rock') {
            const result = document.querySelector("#result")
            result.textContent = "you lose! rock beats scissors"
            ++computerScore
        }
        else if(computerChoice === 'paper') {
            const result = document.querySelector("#result")
            result.textContent = "you win! scissors beats paper."
            ++humanScore
        }
        else {
            const result = document.querySelector("#result")
            result.textContent = "tie!"
        }
    }
}

function playGame() {
    
    for (x = 1; x <= 5; x++) {
        playRound(getHumanChoice(), getComputerChoice())
        console.log('you: ' + humanScore + ", computer: " + computerScore)
    }

    if (humanScore < computerScore) {
        console.log('you lost the whole game!')
    }
    else if (computerScore < humanScore) {
        console.log('you won the whole game!')
    }
    else {
        console.log('the whole game is a tie!')
    }
}