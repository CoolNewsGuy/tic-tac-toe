const AI = (() => {
   // function to let AI play
   const playAI = () => {
      if (Game.isAITurn) {
         Minimax.minimax(Minimax.aiMark);
         let bestSpot = JSON.stringify(Minimax.bestSpot);

         GameBoard.squares.forEach((square) => {
            if (
               square.getAttribute("data-index").replace(" ", "") === bestSpot
            ) {
               square.click();
               return;
            }
         });

         Game.isAITurn = false;
         Minimax.isFirstTimeTesting = true;
      }
   };

   return {
      playAI,
   };
})();
