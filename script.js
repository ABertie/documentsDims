const PLAYERS__CHOICE = document.querySelectorAll(".playersChoice button")
const ROCK = document.querySelector(".rock")
const PAPER = document.querySelector(".paper")
const SCISSORS = document.querySelector(".scissors")

let computersChoice
let playersChoice

PLAYERS__CHOICE.forEach(function (choice){ 
    choice.addEventListener("click", function () {
        letComputerChoose()
        if (choice == ROCK) playersChoice = "rock"
        else if (choice == PAPER) playersChoice = "paper"
        else if (choice == SCISSORS) playersChoice = "scissors"
        else return
        whoWins()
    })
})

function letComputerChoose() {
    computersChoice = Math.random()
    if (computersChoice <= 0.3333) computersChoice = "rock"
    else if (computersChoice <= 0.6666) computersChoice = "paper"
    else computersChoice = "scissors"
    telWhatComputerChosse(computersChoice)
}

function whoWins() {
    let winner
    if (computersChoice == playersChoice ) winner = "no one"
    else if (computersChoice == "rock" && playersChoice == "scissors") winner = "computer"
    else if (computersChoice == "paper" && playersChoice == "rock") winner = "computer"
    else if (computersChoice == "scissors" && playersChoice == "paper") winner = "computer"
    else winner = "player" 
    tellWhoWon(winner)
}

function tellWhoWon(winner) {
    if (winner == "computer") alert("you lost! try again")
    else if (winner == "player") alert("you won")
    else if (winner == "no one") alert("no winner! try again")
}



