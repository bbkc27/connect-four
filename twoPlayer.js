
//Global Variables

let score = 0;
let turns = 0;
let currentPlayer= "Player One";



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
let currentPlayerToken = document.querySelector(".currentPlayerToken");

currentPlayerToken.style.backgroundColor = "red";


if (turns % 2 == 0){
    currentPlayer = "Player One"; 
} else if (turns % 2 !==0){
    currentPlayer = "Player Two";    
}

currentPlayerText.innerHTML = currentPlayer;




//New Turn Functionality
let boxes = document.querySelectorAll(".box");

//Functions making Boxes Droppable
const allowDrop = (ev) => {
    ev.preventDefault();
}

//Dropping new token
const drop = (ev) => {

    ev.preventDefault();

    turns += 1

    let token = document.createElement('div')
    
        if (currentPlayer = 'Player One'){
            token.style.backgroundColor = "red";
            token.classList.add("droppedToken")
        } else if (currentPlayer = 'Player Two'){
            token.style.backgroundColor = 'green';
            token.classList.add("droppedToken")
        }

    console.log(token)

    //Setting Current Player
    if (turns == 0 || turns % 2 == 0){
    currentPlayer = "Player One"
    currentPlayerText.innerText = currentPlayer;
    currentPlayerToken.style.backgroundColor = "red";
    } else if (turns % 2 !==0){
    currentPlayer = "Player Two"
    currentPlayerText == currentPlayer;
    currentPlayerToken.style.backgroundColor = "green";
    }

    console.log(turns, currentPlayer, currentPlayerText.innerHTML)
    return turns;
}


