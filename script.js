const SCORE = document.querySelector("#score")
const CP__SCORE = document.querySelector("#CPscore")
const BATTLE = document.querySelector(".battle")

const COMPUTER__UL = document.querySelector(".computersChoice ul")
const PLAYER__UL = document.querySelector(".playersChoice ul")

const PLAYERS__CHOICE = document.querySelectorAll(".Choice button")
const ROCK = document.querySelector(".rock")
const PAPER = document.querySelector(".paper")
const SCISSORS = document.querySelector(".scissors")

let computersChoice
let playersChoice

let score = 0
SCORE.innerHTML = score

let CPscore = 0
CP__SCORE.innerHTML = CPscore

PLAYERS__CHOICE.forEach(function (choice) {
    choice.addEventListener("click", function () {
        playersChoice = choice

        letComputerChose()

        battle()
    })
})

function letComputerChose() {
    computersChoice = Math.random()
    if (computersChoice <= 0.3333) computersChoice = ROCK
    else if (computersChoice <= 0.6666) computersChoice = PAPER
    else computersChoice = SCISSORS
}

function battle() {
    whoWins()
    BATTLE.style.display = "flex"
    document.querySelector("#playersChoice").innerHTML = playersChoice.innerHTML
    document.querySelector("#computersChoice").innerHTML = ""
    setTimeout(() => {
        document.querySelector("#computersChoice").innerHTML = computersChoice.innerHTML
        setTimeout(() => {
            BATTLE.style.display = "none"
            SCORE.innerHTML = score
            CP__SCORE.innerHTML = CPscore
            createLi(playersChoice, PLAYER__UL)
            createLi(computersChoice, COMPUTER__UL)
        }, 2000);
    }, 1000);
}

function whoWins() {
    let winner
    if (computersChoice === playersChoice) winner = "no one"
    else if (computersChoice === ROCK && playersChoice === SCISSORS
        || computersChoice === PAPER && playersChoice === ROCK
        || computersChoice === SCISSORS && playersChoice === PAPER) winner = "computer"
    else winner = "player"

    if (winner === "computer") CPscore = CPscore + 1
    if (winner === "player") score = score + 1
}

function createLi(theChoice, ul) {
    const LI = document.createElement("li")
    LI.innerHTML = theChoice.innerHTML
    ul.appendChild(LI)
}