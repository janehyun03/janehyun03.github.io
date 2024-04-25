let currentPlayer = "X";
let gameSatate = [[], [], []];
let squares = document.querySelectorAll(".squares");
let container = document.getElementById("square-container");
let gameResult = document.querySelector(".game-result");
let gameRestart = document.querySelector(".game-restart");

gameRestart.addEventListener("click", (e) => {
  gameSatate = [[], [], []];
  squares.forEach((e, i) => {
    e.textContent = "";
    e.disabled = false;
    e.style.backgroundColor = "";
    gameResult.innerHTML = "Result";
  });
});

squares.forEach((e, i) => {
  squares[i].addEventListener("click", () => {
    if (currentPlayer == "X") {
      gameSatate[e.value] = currentPlayer;
      squares[i].style.backgroundColor = "pink";
      squares[i].textContent = currentPlayer;
      currentPlayer = "O";
      squares[i].setAttribute("disabled", "true");
      calculateWinner(gameSatate);
      console.log(squares[i]);
      console.log(gameSatate);
    } else if (currentPlayer == "O") {
      gameSatate[e.value] = currentPlayer;
      squares[i].style.backgroundColor = "bisque";
      squares[i].textContent = currentPlayer;
      currentPlayer = "X";
      squares[i].disabled = true;
      calculateWinner(gameSatate);
      console.log(gameSatate);
    }

    if (calculateWinner(gameSatate) == "X") {
      gameResult.innerHTML = "X wins";
      alert("X wins");
      squares.forEach((e) => {
        e.setAttribute("disabled", "true");
      });
    } else if (calculateWinner(gameSatate) == "O") {
      gameResult.innerHTML = "O wins";
      alert("O wins");
      squares.forEach((e) => {
        e.setAttribute("disabled", "true");
      });
    }
  });
});

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
}
