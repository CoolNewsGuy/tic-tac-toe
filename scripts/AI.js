const AI = (() => {
   const playAI = () => {
      if (Game.isAITurn) {
         let randomSpot = Math.floor(Math.random() * 9);

         while (
            GameBoard.squares[randomSpot].classList.contains("x") ||
            GameBoard.squares[randomSpot].classList.contains("o")
         ) {
            randomSpot = Math.floor(Math.random() * 9);
         }

         GameBoard.squares[randomSpot].click();

         Game.isAITurn = false;
      }
   };

   return {
      playAI,
   };
})();
