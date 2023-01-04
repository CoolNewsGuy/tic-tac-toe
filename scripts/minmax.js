const Minimax = (() => {
   // ! This will be used for recursive testing
   let virtualBoard;

   return {
      getCurrentBoardState,
      getCurrentEmptySpots,
      virtualBoard,
      isFirstTimeTesting: true,
   };

   function getCurrentBoardState() {
      switch (Minimax.isFirstTimeTesting) {
         // * Create a copy of the board just for the first test
         case true:
            let boardCopy = [
               GameBoard.firstRow.slice(0),
               GameBoard.secondRow.slice(0),
               GameBoard.thirdRow.slice(0),
            ];

            Minimax.isFirstTimeTesting = false;
            Minimax.virtualBoard = boardCopy;
            break;

         // * For the second test and so on, we'll be getting the current state of the virtualBoard
         case false:
            return Minimax.virtualBoard;
      }
   }

   function getCurrentEmptySpots() {
      let arr = [];

      Minimax.virtualBoard.forEach((row) => {
         row.forEach((spot) =>
            spot instanceof Array ? arr.push(spot) : false
         );
      });

      return arr;
   }

   // ! Minimax where AI is MAXIMIZER and Human is MINIMIZER
   const minimax = (currentBoardState, currentPlayingMark) => {
      let moveNum = Game.moveNum;

      // + Check if AI won
      if (checkWinning(boardCopy) && !Game.isAITurn) return 1;
      // + Check if Human won
      else if (checkWinning(boardCopy) && Game.isAITurn) return -1;
      // + Check for tie
      else if (checkTie(moveNum)) return 0;
   };
})();
