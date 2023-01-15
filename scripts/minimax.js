const Minimax = (() => {
   // ! This will be used for recursive testing
   let virtualBoard;

   return {
      getCurrentBoardState,
      getCurrentEmptySpots,
      checkWinningInVirtualBoard,
      minimax,
      virtualBoard,
      results: [],
      bestSpot: null,
      isFirstTimeTesting: true,
      humanMark: "X",
      aiMark: "O",
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
   function checkWinningInVirtualBoard(currentPlayingMark) {
      // + Check if AI won
      if (
         Game.checkWinning(Minimax.virtualBoard) &&
         currentPlayingMark === Minimax.aiMark
      ) {
         return 1;
      }
      // + Check if Human won
      else if (
         Game.checkWinning(Minimax.virtualBoard) &&
         currentPlayingMark === Minimax.humanMark
      ) {
         return -1;
      }
      // + Check for tie or any other shit
      else {
         return 0;
      }
   }

   // ! Minimax where AI is MAXIMIZER and Human is MINIMIZER
   function minimax(currentPlayingMark) {
      Minimax.virtualBoard = getCurrentBoardState();
      let availableSpots = getCurrentEmptySpots();
      let bestSpot = new Map();
      let results = new Map();

      // + Check if AI won
      if (Game.checkWinning(Minimax.virtualBoard)[1] === Minimax.aiMark) {
         return 1;
      }
      // + Check if Human won
      else if (
         Game.checkWinning(Minimax.virtualBoard)[1] === Minimax.humanMark
      ) {
         return -1;
      }
      // + Check for tie or any other shit
      else if (availableSpots.length === 0) {
         return 0;
      }

      for (let spot of availableSpots) {
         let spotRow = spot[0];
         let spotCol = spot[1];

         Minimax.virtualBoard[spotRow][spotCol] = currentPlayingMark;

         let result = Minimax.minimax(
            currentPlayingMark === Minimax.aiMark
               ? Minimax.humanMark
               : Minimax.aiMark
         );

         if (result === undefined) {
            let lastElement = Minimax.results.at(-1);

            // min
            if (currentPlayingMark === Minimax.aiMark) {
               lastElement.forEach((value) => {
                  if (value === Math.min(...[...lastElement.values()])) {
                     result = value;
                  }
               });
            }
            // max
            else {
               lastElement.forEach((value) => {
                  if (value === Math.max(...[...lastElement.values()])) {
                     result = value;
                  }
               });
            }
         }

         results.set(spot, result);
         Minimax.virtualBoard[spotRow][spotCol] = spot;
      }

      Minimax.results.push(results);

      if (currentPlayingMark === Minimax.aiMark) {
         results.forEach((value, key) => {
            if (value === Math.max(...[...results.values()])) {
               Minimax.bestSpot = key;
            }
         });
      } else {
         results.forEach((value, key) => {
            if (value === Math.min(...[...results.values()])) {
               Minimax.bestSpot = key;
            }
         });
      }
   }
})();

// Minimax.minimax(
//    [
//       [[0, 0], [0, 1], "X"],
//       [[1, 0], "O", [1, 2]],
//       [
//          [2, 0],
//          [2, 1],
//          [2, 2],
//       ],
//    ],
//    Minimax.aiMark // ! X
// );

// Minimax.minimax(
//    [
//       ["X", [0, 1], "O"],
//       ["O", "O", [1, 2]],
//       ["X", [2, 1], "X"],
//    ],
//    Minimax.aiMark
// );

// Minimax.minimax(
//    [
//       ["O", "O", "X"],
//       ["X", "x", "O"],
//       [[2, 0], [2, 1], "X"],
//    ],
//    Minimax.humanMark
// );
