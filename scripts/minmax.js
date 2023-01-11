const Minimax = (() => {
   // ! This will be used for recursive testing
   let virtualBoard;

   return {
      getCurrentBoardState,
      getCurrentEmptySpots,
      checkWinningInVirtualBoard,
      minimax,
      virtualBoard,
      isFirstTimeTesting: true,
      humanMark: "O",
      aiMark: "X",
      currentPlayingMark: "X",
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

            return Minimax.virtualBoard;

         // * For the second test and so on, we'll be getting the current state of the virtualBoard
         case false:
            return Minimax.virtualBoard;
      }
   }

   // * Get current empty spots in virtual board
   function getCurrentEmptySpots() {
      let arr = [];

      Minimax.virtualBoard.forEach((row) => {
         row.forEach((spot) =>
            spot instanceof Array ? arr.push(spot) : false
         );
      });

      return arr;
   }

   // * function to check winning
   function checkWinningInVirtualBoard() {
      // + Check if AI won
      if (
         Game.checkWinning(Minimax.virtualBoard) &&
         Minimax.currentPlayingMark === Minimax.aiMark
      ) {
         return 1;
      }
      // + Check if Human won
      else if (
         Game.checkWinning(Minimax.virtualBoard) &&
         Minimax.currentPlayingMark === Minimax.humanMark
      ) {
         return -1;
      }
      // + Check for tie or any other shit
      else {
         return 0;
      }
   }

   // ! Minimax where AI is MAXIMIZER and Human is MINIMIZER
   function minimax(currentBoardState, currentPlayingMark) {}
})();

Minimax.minimax(
   [
      ["X", [0, 1], "O"],
      ["X", [1, 1], "X"],
      ["O", "O", [2, 2]],
   ],
   "O"
);
