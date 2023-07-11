let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

function initializeGame(cellClickCallback, restartCallback) {
  cellClickCallback();
  restartCallback();
  running = true;
}

function cellClicked(cellIndex, updateCellCallback, checkWinnerCallback) {
  if (options[cellIndex] !== "" || !running) {
    return;
  }

  updateCell(cellIndex);
  checkWinnerCallback();
}

function updateCell(index) {
  options[index] = currentPlayer;
  changePlayer();
}

function changePlayer() {
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkWinner() {
  let roundWon = false;
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < winConditions.length; i++) {
    const [a, b, c] = winConditions[i];
    if (options[a] !== "" && options[a] === options[b] && options[a] === options[c]) {
      roundWon = true;
      break;
    }
  }

  if (roundWon) {
    running = false;
  } else if (!options.includes("")) {
    running = false;
  }
}

function restartGame() {
  currentPlayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  running = true;
}

module.exports = {
  updateCell,
  checkWinner,
  restartGame,
  options,
  currentPlayer,
  running,
};
