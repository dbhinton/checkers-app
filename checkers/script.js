// State variables
let board;
let selectedPiece = null;
let gameBoard = document.getElementById('board')

let numCheckers = 12;
let turn = true;

// Event listeners:



class BeigePiece {
    constructor(team, index) {
        this.team = team
        this.king = false
        this.index = index
        this.turn = false

    }
    // add move logic here 

}

class BlackPiece {
    constructor(team, index) {
        this.team = team
        this.king = false
        this.index = index
        this.turn = false
    }
     // add move logic here 
}


function init() {
    
    board = new Array(8).fill(new Array(8).fill(null))
    board = board.map((row, i) => {
        return row.map((sq, j) => {
            if (i < 3 && ((j+i) % 2)) return new BeigePiece('♔', `r${i}c${j}`)
            if (i > 4 && ((j+i) % 2))  return new BlackPiece('♚',`r${i}c${j}`)

            return sq
        })
    })
    renderBoard()
}
function renderBoard() {
    gameBoard.textContent = ''
    board.forEach((row , i) => {
        row.forEach((sq, j) => {
            // sq ? console.log(sq) : []
            let square = document.createElement('div')
            square.setAttribute('id', `r${i}c${j}`)
            square.setAttribute('class', 'square')
            let x = (j + i) % 2
            x ? square.style.backgroundColor = 'brown'
                : square.style.backgroundColor = 'beige'
            square.textContent = sq ? sq.team : ''

            gameBoard.appendChild(square)
        })
    })

}

init()

let pieces = document.querySelectorAll(".square")
let boardPiece;
function onlyPieces(){
    for(let i = 0; i < pieces.length; i++){
        if(i%2 !== 0){
        boardPiece = pieces[i].textContent
    }
    }
    return boardPiece
}

// for(let i = 0; i < pieces.length; i++){
//     return pieces[i].textContent
// }

gameBoard.addEventListener("click", function(e){
    let idx = e.target.id;
    let x = Number(idx[1])
    let y = Number(idx[3])
    if((x + y)%2 === 0){
        return
    }
    console.log(board)
    let temp = board[x][y]

    if(selectedPiece){
        if(temp == null){
            board[x][y] = selectedPiece
            let i = selectedPiece.index[1]
            let j = selectedPiece.index[3]
            board[i][j] = null
            selectedPiece.index = `r${x}c${y}`
            selectedPiece = null
        }else{
            selectedPiece = temp
        }

    }else{
        selectedPiece = temp;
    }
    renderBoard()
})




// pieces.addEventListener("click")

// Functions:
// When a piece is clicked find the possible moves
function findCells(event, ui){

}
