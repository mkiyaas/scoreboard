let homeScore = 12
let guestScore = 5

function homeScoreOne() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}

function homeScoreTwo() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}

function homeScoreThree() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}

function guestScoreOne() {
    guestScore += 1
    document.getElementById("guest-score").textContent = guestScore
}

function guestScoreTwo() {
    guestScore += 2
    document.getElementById("guest-score").textContent = guestScore
}

function guestScoreThree() {
    guestScore += 3
    document.getElementById("guest-score").textContent = guestScore
}

function newGame(){
    homeScore = 0
    guestScore = 0
    document.getElementById("home-score").textContent = homeScore
    document.getElementById("guest-score").textContent = guestScore
}