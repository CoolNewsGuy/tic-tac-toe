const Game = (() => {
   let moveNum = 1;

   const checkWinning = () => {
      moveNum++;
      if (moveNum >= 5) {
         _checkWinningHorizontally();
         _checkWinningVertically();
         _checkWinningDiagonally();
      }
   };

   const _checkWinningHorizontally = () => {
      for (let row of GameBoard.board) {
         if (
            row.every((elem) => elem === "X") ||
            row.every((elem) => elem === "O")
         ) {
            alert("Someone has won");
            break;
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
            alert("Yep true");
            break;
         }
      }
   };

   const _checkWinningDiagonally = () => {
      if (
         GameBoard.firstRow[0] &&
         GameBoard.firstRow[0] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[0] === GameBoard.thirdRow[2]
      ) {
         alert("KO");
      } else if (
         GameBoard.firstRow[2] &&
         GameBoard.firstRow[2] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[2] === GameBoard.thirdRow[0]
      ) {
         alert("Yeahhh");
      }
   };

   return {
      checkWinning,
      moveNum,
   };
})();
