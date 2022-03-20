
//Reset Game Button Functionality for Easier Testing
const resetGameButton = document.querySelector(".resetGame");

const resetGameFunc = () => {
    location.reload();
}

resetGameButton.addEventListener("click", resetGameFunc);


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

// Grabbing Game Elements
let currentPlayerText = document.querySelector("#currentPlayer");
let currentPlayerToken = document.querySelector(".currentPlayerToken");
let boxes = document.querySelectorAll(".box");

//Grabbing Game Board Columns
const columnOne = document.querySelector(".columnOne");
const columnTwo = document.querySelector(".columnTwo");
const columnThree = document.querySelector(".columnThree");
const columnFour = document.querySelector(".columnFour");
const columnFive = document.querySelector(".columnFive");
const columnSix = document.querySelector(".columnSix");
const columnSeven = document.querySelector(".columnSeven");

currentPlayerText.innerHTML = 'Player One';
currentPlayerToken.style.backgroundColor = 'red';

//FUNCTION FOR CHANGING CURRENT PLAYER DEFINED
const setCurrentPlayer = () => {
    if (turns % 2 == 0){
           currentPlayer = "Player One"; 
           currentPlayerText.innerHTML = "Player One";
           currentPlayerToken.style.backgroundColor = 'red';
       } else if (turns % 2 == 1){
           currentPlayer = "Player Two"; 
           currentPlayerText.innerHTML = "Player Two"  
           currentPlayerToken.style.backgroundColor = 'green';
       }
}

/* --------- DROP FUNCTIONALITY ---------  */
//Functions making Boxes Droppable
const allowDrop = (ev) => {
    ev.preventDefault();
}

//Dropping new token
const drop = (ev) => {

ev.preventDefault();  

    //IF statement so tokens can't stack on top of each other or have more than one token dropped in a box
    if (ev.target.classList[0] === 'droppedToken' || ev.target.children.length > 0){

        console.log("Can't drop ball here.")

    //ELSE statement to create token if an open column is selected    
    }else if (ev.target.children.length < 1){
        ev.preventDefault();

             let token = document.createElement('div')
    
                 if (turns % 2 == 0){
                     token.style.backgroundColor = "red";
                     token.classList.add("droppedToken")
                 } else if (turns % 2 == 1){
                     token.style.backgroundColor = 'green';
                     token.classList.add("droppedToken")
                }

    //IF ELSE STATEMENTS SO BALL DROPS TO LOWEST EMPTY SLOT
            if (ev.target.parentElement.children[0].children.length < 1){

                ev.target.parentElement.children[0].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            } else if (ev.target.parentElement.children[1].children.length < 1){
                
                ev.target.parentElement.children[1].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            } else if (ev.target.parentElement.children[2].children.length < 1){

                ev.target.parentElement.children[2].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            } else if (ev.target.parentElement.children[3].children.length < 1){
                
                ev.target.parentElement.children[3].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            } else if (ev.target.parentElement.children[4].children.length < 1){

                ev.target.parentElement.children[4].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            } else if (ev.target.parentElement.children[5].children.length < 1){
                
                ev.target.parentElement.children[5].appendChild(token);
                turns += 1
                setCurrentPlayer(); 
            }
    }

    //CHECK FOR WIN CONDITION USING # OF TURNS

    
    console.log(turns)
}

console.log(gameBoard)
