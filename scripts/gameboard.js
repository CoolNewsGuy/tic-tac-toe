const GameBoard = (() => {
   let gameContainer = document.querySelector(".gameboard"),
      _squares = document.querySelectorAll(".square"),
      board = [
         ["", "", ""],
         ["", "", ""],
         ["", "", ""],
      ];

   const firstRow = board[0],
      secondRow = board[1],
      thirdRow = board[2];

   const __updateSquare = (e) => {
      let squareIndex = JSON.parse(e.target.getAttribute("data-index"));

      if (!e.target.innerText)
         Game.moveNum % 2 !== 0
            ? (e.target.innerText = "X")
            : (e.target.innerText = "O");

      Game.moveNum++;
      board[squareIndex[0]][squareIndex[1]] = e.target.innerText;
      Game.checkWinning();
   };

   _squares.forEach((square) =>
      square.addEventListener("click", __updateSquare, false)
   );

   return {
      gameContainer,
      board,
      firstRow,
      secondRow,
      thirdRow,
   };
})();
