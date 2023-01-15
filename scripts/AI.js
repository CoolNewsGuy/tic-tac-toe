const AI = (() => {
   // function to let AI play
   const playAI = () => {
      if (Game.isAITurn) {
         // Choose random spot for the first move except the center
         if (Game.moveNum === 1) {
            let randomSpot = Math.floor(Math.random() * 9);

            while ([1, 3, 4, 5, 7].includes(randomSpot)) {
               randomSpot = Math.floor(Math.random() * 9);
            }

            let firstCorner = GameBoard.squares[randomSpot];
            firstCorner.click();
         } else if (
            Minimax.aiMark === "X" &&
            JSON.stringify(GameBoard.board) ===
               '[[[0,0],[0,1],"X"],[[1,0],"O",[1,2]],[[2,0],[2,1],[2,2]]]'
         ) {
            GameBoard.squares[6].click();
         } else if (
            Minimax.aiMark === "X" &&
            JSON.stringify(GameBoard.board) ===
               '[[[0,0],[0,1],[0,2]],[[1,0],"O",[1,2]],[[2,0],[2,1],"X"]]'
         ) {
            GameBoard.squares[0].click();
         } else if (
            Minimax.aiMark === "X" &&
            JSON.stringify(GameBoard.board) ===
               '[[[0,0],[0,1],[0,2]],[[1,0],"O",[1,2]],["X",[2,1],[2,2]]]'
         ) {
            GameBoard.squares[2].click();
         } else {
            Minimax.minimax(Minimax.aiMark);
            Minimax.results = [];

            let bestSpot = JSON.stringify(Minimax.bestSpot);

            GameBoard.squares.forEach((square) => {
               if (
                  square.getAttribute("data-index").replace(" ", "") ===
                  bestSpot
               ) {
                  square.click();
                  return;
               }
            });
         }

         Game.isAITurn = false;
         Minimax.isFirstTimeTesting = true;
      }
   };

   return {
      playAI,
   };
})();
