// State variables
let board; //board is used to populate the board
let selectedPiece = null;
let gameBoard = document.getElementById('board')
let turn = true




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



// for(let i = 0; i < pieces.length; i++){
//     return pieces[i].textContent
// }

gameBoard.addEventListener("click", function(e){
    let idx = e.target.id;
    // console.log(idx)
    let x = Number(idx[1]) //this grabs the second index of the id which is the row number
    let y = Number(idx[3]) //this grabs the 4th index of the board id which is the column number
    if((x + y)%2 === 0){//if the row number + column number have no remainder then do not do anything because that means it's a beige tile, which you shouldn't be able to click on
        return
    }
    let temp = board[x][y] //Create temporary variable and set it equal to board, if board is null then temp will be null
    if(selectedPiece && selectedPiece.name === "Black" && turn === true){ //selected piece will be null on first click, on second click it will not be because 
        if(temp == null){ //if temp is null, temp is only null if 
            board[x][y] = selectedPiece //this is temps previous value
            console.log(x + " " + y +  " <---this is xy")
            let i = selectedPiece.index[1] //this is temps previous row
            let j = selectedPiece.index[3] //this is temps previous column
            board[i][j] = null
            console.log(i + " " + j +  " <---this is ij")

            selectedPiece.index = `r${x}c${y}` //this changes where the the selected piece is
            selectedPiece = null
            turn = false
    

            // board[i][j] = null
            // selectedPiece.index = `r${x}c${y}` //this changes where the the selected piece is
            // selectedPiece = null
        }else{
            selectedPiece = temp
     
     
        }
    }else if(selectedPiece && selectedPiece.name === "Beige" && turn === false){
        if(temp == null){ //if temp is null, temp is only null if 
            board[x][y] = selectedPiece //this is temps previous value
            console.log(x + " " + y +  " <---this is xy")
            let i = selectedPiece.index[1] //this is temps previous row
            let j = selectedPiece.index[3] //this is temps previous column
            board[i][j] = null
            console.log(i + " " + j +  " <---this is ij")

            selectedPiece.index = `r${x}c${y}` //this changes where the the selected piece is
            selectedPiece = null
            turn = true
    

            // board[i][j] = null
            // selectedPiece.index = `r${x}c${y}` //this changes where the the selected piece is
            // selectedPiece = null
        }else{
            selectedPiece = temp
     
     
        }

    }else{
        selectedPiece = temp; //Selected piece is equal to temps previous value
        console.log(selectedPiece.index[1])
    }
    renderBoard()
})

