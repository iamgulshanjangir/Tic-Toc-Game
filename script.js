
let cells = document.querySelectorAll(".cell");
let statusText = document.getElementById("status");

let currentPlayer = "X";
let gameActive = true;

let winningPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];

// Click on each cell
cells.forEach(cell => {
  cell.addEventListener("click", function () {

    if (cell.innerText !== "" || !gameActive) {
      return;
    }

    cell.innerText = currentPlayer;

    checkWinner();
  });
});

// Check winner
function checkWinner() {
  for (let pattern of winningPatterns) {
    let a = cells[pattern[0]].innerText;
    let b = cells[pattern[1]].innerText;
    let c = cells[pattern[2]].innerText;

    if (a !== "" && a === b && b === c) {
      statusText.innerText = "Player " + currentPlayer + " Wins!";
      gameActive = false;
      return;
    }
  }

  // Check draw
  let isDraw = [...cells].every(cell => cell.innerText !== "");

  if (isDraw) {
    statusText.innerText = "It's a Draw!";
    gameActive = false;
    return;
  }

  // Change player
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  statusText.innerText = "Player " + currentPlayer + "'s Turn";
}

// Restart game
function restartGame() {
  cells.forEach(cell => {
    cell.innerText = "";
  });

  currentPlayer = "X";
  gameActive = true;
  statusText.innerText = "Player X's Turn";
}
