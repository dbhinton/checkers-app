
// Overarching rules of the game
    // 1. User clicks checker
    // 2. User clicks desired cell
    // 3. What happens after user makes selection?
            // State data is changed in backend
            // Index of selected checker
            // Index of board
            // 

// It doesn't really make sense to represent the board as an object 
// const board = [null, null, null, null, null, null, null, null, //row 1
// null,null, null, null, null, null, null, null, //row 2
// null, null, null, null, null, null, null, null, //row 3
// null, null, null, null, null, null, null, null ,//row 4
// null, null, null, null, null, null, null, null,//row 5
// null, null, null, null, null, null, null, null, null, //row 6
// null, null, null, null, null, null, null,//row 7
// null, null, null, null, null, null, null, null//row 8
//  ]

let board;
let gameBoard = document.getElementById('board')

function init() {
    
    board = new Array(8).fill(new Array(8).fill(null))

    renderBoard()
}


// Initialize state variables
let scores;
let checkers;

// State Variables
let selectOneOrange = document.querySelector(".orange-checker")
let selectAllOrange = document.querySelectorAll(".orange-checker");
let selectOneTan = document.querySelector(".tan-checker")
let selectAllTan = document.querySelectorAll(".tan-checker");
let selectOneTile = document.querySelector(".tile");
const selectAllTiles = document.querySelectorAll('.tile');
// Event Listners
// function clickOrange(){
//     selectAllOrange.addEventListener("click", function(){
//         selectOneOrange.classList.add("tile-selected")
//     });
// }
// const clickTan = selectAllTan.addEventListener("click", addCheckerHighlight);
// const unclickOrange = selectAllOrange.addEventListener("click", removeCheckerHighlight);
// const unclickTan = selectAllTan.addEventListener("click", removeCheckerHighlight);
// const clickTile = selectAllTiles.addEventListener("click", addTileHighlight);
// const unClickTile = selectAllTiles.addEventListener("click", removeTileHighlight);

// let kingMe = document.querySelectorAll(".class")

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", function(){
    init();
})

// State variables
let checkerChoices;
let itsYourGo = true

// User Attributes
const user = {
    orange: {
        checkerIndex: -1,
        selectorIdOfChecker: null,
        userGo: true,
        color: selectAllOrange,
        kingMe: false,
        moveForwardSeven: false,
        moveForwardNine: false,
        moveForwardFourteen: false,
        moveForwardEighteen: false,
        moveOppositeSeven: false,
        moveOppositeNine: false,
        moveOppositeFourteen: false,
        moveOppositeEighteen: false
    },
    tan: {
        checkerIndex: -1,
        selectorIdOfChecker: -1,
        userGo: false,
        color: selectAllTan,
        moveForwardSeven: false,
        moveForwardNine: false,
        moveForwardFourteen: false,
        moveForwardEighteen: false,
        moveOppositeSeven: false,
        moveOppositeNine: false,
        moveOppositeFourteen: false,
        moveOppositeEighteen: false
    }
    }
function Pawn (x, y, width, height, color, type){
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.type = type;

    this.render = function () {
        document.createElement('div')
        // this.x
        // this.y
        // this.width
        // this.height;
        
    }
}
// Class for active and class for disabled that's assigned to a selected piece for a players turn
// Create function for turn
// If it's your turn all of your pieces are active
// Then select a piece
// Turn function checks to see if other tiles nearby are occupied or not

let pawn1 = new Pawn(200, 200, 200, 200, "red", "attacker")
pawn1.render()
console.log(pawn1.render())

// function resetUser(color){
//     user.color.index = -1;
//     user.color.selectorIdOfChecker = -1;
//     user.color.
// }

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
// Select checkers depending on whos turn it is
    function giveCheckersEventListeners(){
        if(itsYourGo){
            for(let i = 0; i<selectAllOrange.length; i++){
                selectAllOrange[i].addEventListener("click", selectUserCheckers);
            }
        }else{
            for(let i = 0; i< selectAllTan.length; i++){
                selectAllTan[i].addEventListener("click", selectUserCheckers)
            }
        }
        removeTileHighlight()
        removeCheckerHighlight()
        console.log("it works")
    }

    function selectUserCheckers(){
        if(itsYourGo){
            checkerChoices = selectAllOrange;
        }else{
            checkerChoices = selectAllTan;
        }   
    }

    // Add and remove checker highlights



    function addCheckerHighlight(){
        selectOneOrange.classList.add("checker-selected")

    }

function addTileHighlight(){
    for (let i = 0; i<selectAllTiles.length; i++){
        selectAllTiles[i].addEventListener("click", function(){
            this.classList.add("tile-selected")
            console.log("23452wdf")
        })
    }
}
addTileHighlight()


function removeTileHighlight(){
    for(let i = 0; i < selectAllTiles.length; i++){
        selectAllTiles[i].addEventListener("click", function(){
            this.classList.remove("tile-selected")
            console.log("hello")
        })
    }
}

    function removeCheckerHighlight(){
            resetButton.classList.remove("pressed")
    }





    function legalMove(from, to){
        if(2){
            return
        }

    }



    function switchUserGo(){


    }
    function winner(){
        if(user.orange.numPieces === 0){
            alert("its a tie")
        }
        if(user.orange.numPieces > user.tan.numPieces){
            alert(user.orange.name + " wins")
        }else{
            alert(user.tan.name + " wins")
        }
    }

