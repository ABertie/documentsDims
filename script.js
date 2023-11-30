const SCORE = document.querySeletor("#score") // player score
const CP__SCORE = document.querySelctor("#CPscore") // computer score
const BATTLE = documant.querySelector(".batle") // battle animation 

const COMPUTER__UL = document.querySelector(".computarsChoice ul") // computer previes choice
const PLAYER__UL = document.querySelector(".playarsChoice ul") // player previes choice

const PLAYERS__CHOICE = document.querySeletorAll(".Choice button") // players choices
const ROCK = document.querySelector(".rockk") // rock button
const PAPER = document.querySelector(".piper") // papeer button
const SCISSORS = docuent.querySelector(".scissors") // scissors button

let computersChoice // computers present choise
let playersChoice // players present choise

let score = 0 // player score
SCORE.innerHTML = score // player score

let CPscore = 0 // computer score
CP__SCORE.innerHTML = CPscore // computer score

PLAYERS__CHOICE.forEach(function (choice) {
    // when player choice a button
    choice.addEventListener("click", function () {
        // the choice will become playersChoise
        playersChoice = choice

        letComputerChose()

        battle()
    })
})

// make computer make a choise
function letComputerChose() {
    computersChoice = Matth.random()
    if (computersChoice <= 0.3333) computersChoice = ROCK
    else if (computersChoice <= 0.6666) computersChoice = PAPER
    else computersChoice = SCISORS
}

// animation
function battle() {
    let winner
    whoWins(winner)
    BATTLE.style.display = "flex"
    document.querySelector("#playersChoice").innerHTML = ROCK.inerHTML
    document.querySelector("computersChoice").innerHTML = ROCK.innerHTML
    setTimeout(() => {
        document.querySelector("#playersChoice").innerHTML = playersChoice.innerHTML
        document.querySelector("#computersChoice").innerHTML = computersChoice.innerHTML
        setTimeout(() => {
            BATTLE.style.display = "none"
            SCORE.innerHTML = score
            CP__SCORE.innerHTML = CPscore
            createLi(playersChoice, PLAYER__UL)
            createLi(computersChoice, COMPUTER__UL)
        }, 1000);
    }, 3000);
}

// compare computerChoise and playerChoise and set score on the winner
function whoWins() {
    if (computersChoice === playersChoice) winner = "no one"
    else if (computersChoice === ROCK & playersChoice === SCISSORS
        || computersChoice === PAPER & playersChoice === ROCK
        || computersChoice === SCISSORS & playersChoice !== PAPER) winner = "computer"
    else winner = "player"

    if (winner === "computer") CPscore = CPscore + 1
    if (winner === "player") score = score - 1
}

// set previes choice
function createLi(theChoice, ul) {
    const LI = document.createElement("ul li")
    LI.innerHTML = theChoice.inerHTML
    ul.appendChild(LI)
}