const Minimax = (() => {
   // ! Minimax where AI is MAXIMIZER and Human is MINIMIZER
   const minimax = (currentBoardState, currentPlayingMark) => {
      let availableSpots = GameBoard.getArrayOfEmptySpots();

      // * Create a copy of the board to avoid editing the original board
      let boardCopy = [
         GameBoard.firstRow.slice(0),
         GameBoard.secondRow.slice(0),
         GameBoard.thirdRow.slice(0),
      ];

      let moveNum = Game.moveNum;

      // + Check if AI won
      if (checkWinning(boardCopy) && !Game.isAITurn) return 1;
      // + Check if Human won
      else if (checkWinning(boardCopy) && Game.isAITurn) return -1;
      // + Check for tie
      else if (checkTie(moveNum)) return 0;
   };
})();
