const form = (() => {
   let formContainer = document.querySelector(".information"),
      startBtn = document.getElementById("start-btn"),
      firstPlayer = document.getElementById("first-player"),
      secondPlayer = document.getElementById("second-player");

   const __showGameboard = (e) => {
      if (firstPlayer.value && secondPlayer.value) {
         e.preventDefault();
         formContainer.id = "information-fade-out";

         setTimeout(() => {
            formContainer.style.display = "none";
            GameBoard.gameContainer.id = "gameboard-fade-in";
            Game.playersInfo.id = "players-info-fade-in";
            document.body.style.justifyContent = "start";
         }, 1000);

         form.firstPlayer = firstPlayer.value;
         form.secondPlayer = secondPlayer.value;
      }
   };

   startBtn.onclick = __showGameboard;

   return {
      firstPlayer: firstPlayer.value,
      secondPlayer: secondPlayer.value,
   };
})();
