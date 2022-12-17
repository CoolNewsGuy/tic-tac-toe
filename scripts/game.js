const Game = (() => {
   const checkWinning = () => {
      if (Game.moveNum >= 5) {
         if (
            _checkWinningHorizontally() ||
            _checkWinningVertically() ||
            _checkWinningDiagonally()
         ) {
            return true;
         }
      }
   };

   const _checkWinningHorizontally = () => {
      for (let row of GameBoard.board) {
         if (
            row.every((elem) => elem === "X") ||
            row.every((elem) => elem === "O")
         ) {
            return true;
         }
      }
   };

   const _checkWinningVertically = () => {
      for (let elem of GameBoard.firstRow) {
         if (
            elem &&
            elem === GameBoard.secondRow[GameBoard.firstRow.indexOf(elem)] &&
            elem === GameBoard.thirdRow[GameBoard.firstRow.indexOf(elem)]
         ) {
            return true;
         }
      }
   };

   const _checkWinningDiagonally = () => {
      if (
         GameBoard.firstRow[0] &&
         GameBoard.firstRow[0] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[0] === GameBoard.thirdRow[2]
      ) {
         return true;
      } else if (
         GameBoard.firstRow[2] &&
         GameBoard.firstRow[2] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[2] === GameBoard.thirdRow[0]
      ) {
         return true;
      }
   };

   return {
      checkWinning,
      moveNum: 1,
   };
})();
