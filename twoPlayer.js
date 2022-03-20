
//Global Variables

let score = 0;
let turns = 0;
let currentPlayer;



/* --------- MODAL FUNCTIONALITY ---------*/

//How to Play Modal Elements

let howToPlayButton = document.getElementById("howToPlayButton");
let howToPlayModal = document.querySelector(".howToPlayModal");
let closeHowToPlayButton = document.querySelector(".closeHowToPlay");

//How to Play Modal Functions

const openHowToPlay = () => {
    howToPlayModal.style.display = 'block';
}

const closeHowToPlay = () => {
    howToPlayModal.style.display = 'none';
}

//How to Play Modal Event Listeners
howToPlayButton.addEventListener("click", openHowToPlay);
closeHowToPlayButton.addEventListener("click", closeHowToPlay);


/* --------- CURRENT PLAYER FUNCTIONALITY --------- */

// Grabbing Current Player element
let currentPlayerText = document.getElementById("currentPlayer");

//Setting Current Player
if (turns == 0 || turns % 2 == 0){
    currentPlayer = "Player One"
    currentPlayerText.innerText = currentPlayer;
} else if (turns % 2 !==0){
    currentPlayer = "Player Two"
    currentPlayerText == currentPlayer;
}

//New Turn Functionality
let 