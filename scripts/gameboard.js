const GameBoard = (() => {
   let gameContainer = document.querySelector(".gameboard"),
      squares = document.querySelectorAll(".square"),
      board = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""],
      ];

   let firstRow = board[0],
      secondRow = board[1],
      thirdRow = board[2];

   const __updateSquare = (e) => {
      let squareIndex = JSON.parse(e.target.getAttribute("data-index"));

      if (!e.target.innerText)
         if (Game.moveNum % 2 !== 0) {
            e.target.classList.add("x");
            e.target.innerText = "X";
         } else {
            e.target.innerText = "O";
         }

      Game.moveNum++;
      board[squareIndex[0]][squareIndex[1]] = e.target.innerText;

      if (Game.checkWinning() || Game.checkTie()) {
         _cleanTheBoard();
         Game.changeStarterPlayer();
      }
   };

   const _cleanTheBoard = () => {
      squares.forEach((square) => {
         square.innerText = "";
         square.classList.remove("x");
      });
      board = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""],
      ];

      GameBoard.board = board;
      GameBoard.firstRow = board[0];
      GameBoard.secondRow = board[1];
      GameBoard.thirdRow = board[2];
      Game.moveNum = 1;
   };

   squares.forEach((square) =>
      square.addEventListener("click", __updateSquare, false)
   );

   return {
      gameContainer: gameContainer,
      squares: squares,
      board: board,
      firstRow: firstRow,
      secondRow: secondRow,
      thirdRow: thirdRow,
   };
})();
