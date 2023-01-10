let counter = 0;

const Minimax = (() => {
   // ! This will be used for recursive testing
   let virtualBoard;

   return {
      getCurrentBoardState,
      getCurrentEmptySpots,
      checkWinningInVirtualBoard,
      minimax,
      virtualBoard,
      results: {
         spotScores: [],
      },
      isFirstTimeTesting: true,
      humanMark: "X",
      aiMark: "O",
      currentPlayingMark: "O",
      moveNum: 1,
   };

   // TODO This function hasn't been used yet
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
         Minimax.currentPlayingMark === "O"
      )
         return 1;
      // + Check if Human won
      else if (
         Game.checkWinning(Minimax.virtualBoard) &&
         Minimax.currentPlayingMark === "X"
      )
         return -1;
      // + Check for tie
      else return 0;
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
