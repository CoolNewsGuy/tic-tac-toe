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

   const __fillSquareByHuman = (e) => {
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

      Game.isAITurn = true;
      if (Game.checkWinning() || Game.checkTie()) {
         if (Game.checkWinning()) Game.increasePlayerScore();

         setTimeout(() => {
            _cleanTheBoard();
            Game.changeStarterPlayer();
         }, 1000);
      }
   };

   // get rows of the board as DOM elements
   const getBoardRowsAsDOMElements = () => {
      let rows = [[], [], []];

      for (let i = 0; i < GameBoard.squares.length; i++) {
         if (i < 3) rows[0].push(GameBoard.squares[i]);
         else if (i < 6) rows[1].push(GameBoard.squares[i]);
         else rows[2].push(GameBoard.squares[i]);
      }

      return rows;
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

   gameContainer.addEventListener("click", (e) => {
      __fillSquareByHuman(e);

      if (Game.checkWinning() || Game.checkTie()) setTimeout(AI.playAI, 1200);
      else setTimeout(AI.playAI, 200);
   });

   return {
      gameContainer,
      squares,
      board,
      getArrayOfEmptySpots,
      getBoardRowsAsDOMElements,
      firstRow,
      secondRow,
      thirdRow,
   };
})();
