const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
let result = document.querySelector("#result");
let counter = document.querySelector("#counter");
let countUp = 1;

rock.onclick = rockChosen;
paper.onclick = paperChosen;
scissors.onclick = scissorsChosen;

function rockChosen() {
    result.innerHTML = "Your Opponent Chose PAPER, You Lose!";
    counter.innerHTML = countUp++;
}

function paperChosen() {
    result.innerHTML = "Your Opponent Chose SCISSORS, You Loser!";
    counter.innerHTML = countUp++;
}

function scissorsChosen() {
    result.innerHTML = "Your Opponent Chose ROCK, You Fucking Looser!";
    counter.innerHTML = countUp++;
}
