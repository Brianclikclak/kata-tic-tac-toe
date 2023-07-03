//Tablero
let gameBoard = [
    ['', '',''],
    ['', '',''],
    ['', '',''],
];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let playerX = 'x';


// Funcion para crear el tablero
function drawGameBoard(){
    for( let i = 0; i < 3; i++ ) {
        let row = '';
        for ( let j = 0; j < 3; j++ ) {
            if (gameBoard[i][j] === '') {
                row += ' - ';
            }  else{
                row += `${gameBoard[i][j]}`;
            }
        }
        console.log(row);
    }   
}

drawGameBoard();


