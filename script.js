// State variables
let board; //board is used to populate the board
let selectedPiece = null;
let gameBoard = document.getElementById('board')
let turn = true
let blackPieces = 12
let beigePieces = 12




class BeigePiece {
    constructor(team, index) {
        this.team = team
        this.king = false
        this.index = index
        this.turn = false
        this.name = "Beige"

    }
    // add move logic here 

}

class BlackPiece {
    constructor(team, index) {
        this.team = team
        this.king = false
        this.index = index
        this.turn = false
        this.name = "Black"
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

document.querySelector("button").addEventListener("click", function(){
    init()
})

gameBoard.addEventListener("click", function(e){
    let idx = e.target.id;
    let x = Number(idx[1])
    let y = Number(idx[3])
    if((x + y)%2 === 0){
        return
    }
    let temp = board[x][y]
    if(selectedPiece && selectedPiece.name === "Black" && turn === true){
        if(temp == null){
            board[x][y] = selectedPiece
            let i = selectedPiece.index[1]
            let j = selectedPiece.index[3]
            board[i][j] = null
            jumpBeigePiece(i, j, x, y)
            blackTurn()
            selectedPiece.index = `r${x}c${y}`
            selectedPiece = null
            turn = false
        }else{
            selectedPiece = temp
        }
    }else if(selectedPiece && selectedPiece.name === "Beige" && turn === false){
        if(temp == null){
            board[x][y] = selectedPiece
            let i = selectedPiece.index[1]
            let j = selectedPiece.index[3]
            board[i][j] = null  
            jumpBlackPiece(i, j, x, y)
            beigeTurn()
            selectedPiece.index = `r${x}c${y}`
            selectedPiece = null
            turn = true
        }else{
            selectedPiece = temp
        }
    }else{
        selectedPiece = temp; 
    }
    renderBoard()
})

function jumpBeigePiece(fromRow, fromCol, toRow, toCol){
    fromRow = parseInt(fromRow)
    fromCol = parseInt(fromCol)
    toRow = parseInt(toRow)
    toCol = parseInt(toCol)
    if(fromRow-toRow === 2 && (fromCol-toCol === 2 || fromCol-toCol === -2)){
        if(board[fromRow-1][fromCol+1] !== null){
            board[fromRow-1][fromCol+1] = null
            beigePieces -= 1
        }else if(board[fromRow-1][fromCol-1]!==null){
            board[fromRow-1][fromCol-1] = null 
            beigePieces -= 1   
        }else{
            return
        }
     } else {
         return
     }
  }


function jumpBlackPiece(fromRow, fromCol, toRow, toCol){
    fromRow = parseInt(fromRow);
    fromCol = parseInt(fromCol);
    toRow = parseInt(toRow)
    toCol = parseInt(toCol);

    if(fromRow-toRow === -2 && (fromCol - toCol === 2 || fromCol-toCol === -2)){
        if(board[fromRow+1][fromCol+1]!==null){
            board[fromRow+1][fromCol+1] = null
            blackPieces -= 1
            console.log("from row ", fromRow,"to Row ", toRow, " from col ", fromCol, " to Col ", toCol)
        }else if(board[fromRow+1][fromCol-1] !== null){
            board[fromRow+1][fromCol-1] = null
            console.log("from row ", fromRow,"to Row ", toRow, " from col ", fromCol, " to Col ", toCol)
            blackPieces -= 1
        }else{
            return
        }
    }else{
        return
    }


}

function beigeTurn(){
    document.querySelector(".beige-turn").classList.add("hide-beige-text")
    document.querySelector(".black-turn").classList.remove("hide-black-text")
}

function blackTurn(){
    document.querySelector(".black-turn").classList.add("hide-black-text")
    document.querySelector(".beige-turn").classList.remove("hide-beige-text")
}

