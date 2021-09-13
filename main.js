
// Overarching rules of the game
    // 1. User clicks piece
    // 2. User clicks desired cell
    // 3. What happens after user makes selection?
            // State data is changed in backend
            // Index of selected piece
            // Index of board
            // 

// It doesn't really make sense to represent the board as an object 
const board = []




// Initialize state variables
let scores;
let winner;
let results;
let pieces;

// Event Listners
let orangeCheckerSelector = document.querySelectorAll(".orange-checker");
let tanCheckerSelector = document.querySelectorAll(".tan-checker");
const tiles = document.querySelectorAll('.tile');
const whosGo = {
    orangeGo:  document.querySelector("#orange-go"),
    tanGo:  document.querySelector("tan-go")
}
let kingMe = document.querySelectorAll(".class")

const reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    init();
})

// State variables
let userGo;
let orangePieces;
let tanPieces;

// User Attributes
const user = {
    orange: {
        numberOfPieces: 12,
        userGo: null,
        color: orangeCheckerSelector
    },
    tan: {
        numberOfPieces: 12,
        userGo: null,
        color: tanCheckerSelector
    }
    }

const checkerProperties = {
    isKing: false,
    color: {
        isOrange: orangeCheckerSelector,
        isTan: tanCheckerSelector
    },
    checkerIndex: null,
    boardIndex: null,
}




function kingMe(){
    if(checkerProperties.isKing === true)
}


    function userSelection(){
        if(user.orange[userGo] === true){
            for(let i = 0; i<orangeCheckerSelector.length; i++){
                orangeCheckerSelector[i].addEventListener("click", selectUser);
            }
        }else{
            for(let i = 0; i<tanCheckerSelector.length; i++){
                tanCheckerSelector[i].addEventListener("click", selectUser)
            }
        }
    }

    function userDeselect(){

    }

    function userGo(){
        if(user.orange){

        }
    }

    function highlightSelectedChecker(){

    }

    function switchUser(){

    }