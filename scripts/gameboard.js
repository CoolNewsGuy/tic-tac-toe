const GameBoard = (() => {
   let gameContainer = document.querySelector(".gameboard"),
      squares = document.querySelectorAll(".square"),
      board = [
         [
            [0, 0],
            [0, 1],
            [0, 2],
         ],
         [
            [1, 0],
            [1, 1],
            [1, 2],
         ],
         [
            [2, 0],
            [2, 1],
            [2, 2],
         ],
      ];

   let firstRow = board[0],
      secondRow = board[1],
      thirdRow = board[2];

   const getArrayOfEmptySpots = () => {
      let arr = [];

      GameBoard.board.forEach((row) => {
         row.forEach((spot) =>
            spot instanceof Array ? arr.push(spot) : false
         );
      });

      return arr;
   };

   const __fillSquare = (e) => {
      let squareIndex = JSON.parse(e.target.getAttribute("data-index"));

      if (!e.target.innerText)
         if (Game.moveNum % 2 !== 0) {
            e.target.classList.add("x");
            e.target.innerText = "X";
            Game.numOfX++;
         } else {
            e.target.classList.add("o");
            e.target.innerText = "O";
            Game.numOfO++;
         }

      Game.moveNum++;
      board[squareIndex[0]][squareIndex[1]] = e.target.innerText;

      if (Game.checkWinning() || Game.checkTie()) {
         if (Game.checkWinning()) Game.increasePlayerScore();

         _cleanTheBoard();
         Game.changeStarterPlayer();
      }
   };

   const _cleanTheBoard = () => {
      squares.forEach((square) => {
         square.innerText = "";
         square.classList.remove("x");
         square.classList.remove("o");
      });
      board = [
         [
            [0, 0],
            [0, 1],
            [0, 2],
         ],
         [
            [1, 0],
            [1, 1],
            [1, 2],
         ],
         [
            [2, 0],
            [2, 1],
            [2, 2],
         ],
      ];

      GameBoard.board = board;
      GameBoard.firstRow = board[0];
      GameBoard.secondRow = board[1];
      GameBoard.thirdRow = board[2];
      Game.moveNum = 1;
   };

   gameContainer.addEventListener("click", (e) => __fillSquare(e));

   return {
      gameContainer,
      squares,
      board,
      getArrayOfEmptySpots,
      firstRow,
      secondRow,
      thirdRow,
   };
})();
