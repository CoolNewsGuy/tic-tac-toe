const form = (() => {
   let form = document.querySelector(".information"),
      startBtn = document.getElementById("start-btn");

   const __showGameboard = (e) => {
      e.preventDefault();
      form.id = "information-fade-out";

      setTimeout(() => {
         form.style.display = "none";
         GameBoard.gameContainer.id = "gameboard-fade-in";
         Game.playersInfo.id = "players-info-fade-in";
         document.body.style.justifyContent = "start";
      }, 1000);
   };

   startBtn.onclick = __showGameboard;
})();
