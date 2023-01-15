const ChooseOpponent = (() => {
   let chooseOpponent = document.querySelector(".choose-players");
   let ai = document.querySelector(".ai");
   let human = document.querySelector(".human");

   function __showGameboard() {
      chooseOpponent.id = "choose-opponent-fade-out";

      setTimeout(() => {
         chooseOpponent.style.display = "none";
         GameBoard.gameContainer.id = "gameboard-fade-in";
         Game.playersInfo.id = "players-info-fade-in";
         document.body.style.justifyContent = "start";
      }, 1000);

      Game.isAIOpponent = true;
   }

   function __showInformationSection() {
      chooseOpponent.id = "choose-opponent-fade-out";

      setTimeout(() => {
         chooseOpponent.style.display = "none";
         form.formContainer.id = "information-fade-in";
      }, 1000);
   }

   human.onclick = __showInformationSection;
   ai.onclick = __showGameboard;
})();
