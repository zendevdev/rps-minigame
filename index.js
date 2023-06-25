const playerText = document.querySelector("#playerText");
const pcText = document.querySelector("#pcText");
const resText = document.querySelector("#resultText");

const choiceBtns = document.querySelectorAll(".choiceBTN");

const welcome = document.querySelector("#Welcome");
const gameScore = document.querySelector("#gameScore");

let player;
let computer;
let result;

choiceBtns.forEach(button => {
    button.addEventListener("click", () => {

        player = button.textContent;
        computerTurn();
        playerText.textContent = `${player}`;
        pcText.textContent = `${computer}`;

        resText.textContent = checkWinner();

        if (welcome.style.display == "block") {
            welcome.style.display = "none";
            gameScore.style.display = "grid";
        }
        else {
            welcome.style.display = "none";
            gameScore.style.display = "grid";
        }
    })
})

function checkWinner() {
    if (player == computer) {
        return "Draw! ⚔️"
    }
    else if (computer == "🪨") {
        return (player == "📄") ? "You win! 🔥" : "You lose! 👾"
    }
    else if (computer == "📄") {
        return (player == "✂️") ? "You win! 🔥" : "You lose! 👾"
    }
    else if (computer == "✂️") {
        return (player == "🪨") ? "You win! 🔥" : "You lose! 👾"
    }
}

function computerTurn() {

    const randNum = Math.floor(Math.random() * 3) + 1;

    switch (randNum) {
        case 1:
            computer = "🪨";
            break;
        case 2:
            computer = "📄";
            break;
        case 3:
            computer = "✂️";
            break;

    }
}