
// Overarching rules of the game
    // 1. User clicks piece
    // 2. User clicks desired cell
    // 3. What happens after user makes selection?
            // State data is changed in backend
            // Index of selected piece
            // Index of board
            // 

// It doesn't really make sense to represent the board as an object 
const board = [null, "one", null, "two", null, "three", null, "four", 
null, "five", null, "six", null, "seven", null, "eight", 
null, "nine", null, "ten", null, "eleven", null, "twelve", 
null, null, null, null, null, null, null, null ,
null, null, null, null, null, null, null, null,
null, "thirteen", null, "fourteen", null, "fifteen", null, "sixteen", null, 
"seventeen", null, "eighteen", null, "nineteen", null, "twenty",
null, "twenty-one", null, "twenty-two", null, "twenty-three", null, "twenty-four"
 ]




// Initialize state variables
let scores;
let results;
let pieces;

// State Variables
let selectOneOrange = document.querySelector(".orange-checker")
let selectOneTan = document.querySelector(".tan-checker")
let selectAllOrange = document.querySelectorAll(".orange-checker");
let selectAllTan = document.querySelectorAll(".tan-checker");
let selectOneTile = document.querySelector(".tile");
const selectAllTiles = document.querySelectorAll('.tile');
const whosGo = {
    orangeGo:  document.querySelector("#orange-go"),
    tanGo:  document.querySelector("tan-go")
}

// Event Listners
selectOneOrange.addEventListener("click", addCheckerHighlight)
selectOneOrange.addEventListener("click", removeCheckerHighlight)

// let kingMe = document.querySelectorAll(".class")

const reset = document.querySelector("#reset");
reset.addEventListener("click", function(){
    init();
})

// State variables
let userCheckerChoices;

// User Attributes
const user = {
    orange: {
        name : "Orange"
        numPieces: 12,
        userGo: true,
        color: selectAllOrange
    },
    tan: {
        name: "Tan"
        numPieces: 12,
        userGo: false,
        color: selectAllTan
    }
    }

const checkerProperties = {
    isKing: false,
    color: {
        isOrange: selectAllOrange,
        isTan: selectAllTan
    },
    checkerIndex: null,
    boardIndex: null,
}

// functions
function init(){
    scores = {
        tan: user.tan.numPieces,
        orange: user.orange.numPieces
    }
}


function kingMe(){
    if(checkerProperties.isKing === true){
        return

    }
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

    function tileSelection(){
        if(tile){
            return
        }
    }

    

    function userDeselect(){
        if(user.orange.userGo === true){
            return

        }

    }

    function legalMove(from, to){
        if(2){
            return
        }

    }

    function userGo(){
        if(user.orange.userGo){
            for(let i = 0; i < selectAllOrange.length; i++){
                selectAllOrange[i].addEventListener("click", highlightSelectedChecker)
            }
        }else{
            for(let i = 0; i < selectAllTan.length; i++){
                    selectAllTan[i].addEventListener("click", highlightSelectedChecker)
                }
            }
            removeTileHighlight()
        }

    function usersTurn(){
        if(user.orange.userGo){
            userCheckerChoices = selectAllOrange
        }else{
            userCheckerChoices = selectAllTan
        }   
    }

    function addCheckerHighlight(){
        selectOneOrange.classList.add("checker-selected")

    }
    function removeCheckerHighlight(){
        selectOneOrange.classList.remove("checker-selected")

    }

    function addTileHighlight(){
        selectOneOrange.classList.add("tile-selected")
    }

    function removeTileHighlight(){
        for(let i = 0; i < selectAllTiles; i++){
            selectOneTile.classList.remove("tile-selected")
        }

    }

    function switchUserGo(){

    }
    function winner(){
        if(user.orange.numPieces === user.tan.numPieces){
            alert("its a tie")
        }
        if(user.orange.numPieces > user.tan.numPieces){
            alert(user.orange.name + " wins")
        }else{
            alert(user.tan.name + " wins")
        }
    }
    