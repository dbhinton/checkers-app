
// Overarching rules of the game
    // 1. User clicks piece
    // 2. User clicks desired cell
    // 3. What happens after user makes selection

// constants
const board = []




// Initialize state variables
let scores;
let winner;
let results;
let pieces;

// Event Listners
let orangeChecker = document.querySelectorAll(".orange-checker");
let tanChecker = document.querySelectorAll(".tan-checker");
const tiles = document.querySelectorAll('.tile');
const whosGo = {
    orangeGo:  document.querySelector("#orange-go"),
    tanGo:  document.querySelector("tan-go")
}

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function{
    init();
})

// State variables
let playerGo;
let orangePieces;
let tanPieces;
let 


// Player Properties
const player = {
    orange: {
        numberOfPieces: 12,
        userGo: true,
        color: "orange"
    },
    tan: {
        numberOfPieces: 12,
        userGo: true
        color: "tan"
    }
function userSelection(){
    if()
}

// What happens when checker is clicked
    // -Grab id of checker
    // -Grab index of tile that the checker is on
    // Is it a king?
    // Possible moves

// Dom references
const boardValue = []