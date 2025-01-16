let humanScore = 0
let computerScore = 0

playGame()

function getComputerChoice() {

    let rand = Math.floor((Math.random() * 3));

    if (rand === 0) {
        console.log('rock')
        return 'rock'
    }
    else if (rand === 1) {
        console.log('paper')
        return 'paper'
    }
    else {
        console.log('scissors')
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
            console.log("tie!")
        }
        else if(computerChoice === 'paper') {
            console.log("you lose! paper beats rock.")
            ++computerScore
        }
        else {
            console.log("you win! rock beats scissors.")
            ++humanScore
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'paper') {
            console.log("tie!")
        }
        else if(computerChoice === 'rock') {
            console.log("you win! paper beats rock.")
            ++humanScore
        }
        else {
            console.log("you lose! scissors beats paper.")
            ++computerScore
        }
    }
    else {
        if (computerChoice === 'rock') {
            console.log("you lose! rock beats scissors")
            ++computerScore
        }
        else if(computerChoice === 'paper') {
            console.log("you win! scissors beats paper.")
            ++humanScore
        }
        else {
            console.log("tie!")
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