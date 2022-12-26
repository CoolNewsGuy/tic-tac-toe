const Game = (() => {
   let playersInfo = document.querySelector(".players-info"),
      _players = {
         firstPlayer: Player(
            ".player-1",
            ".player-1-name",
            ".player-1-score",
            true
         ),

         secondPlayer: Player(
            ".player-2",
            ".player-2-name",
            ".player-2-score",
            false
         ),
      };

   // functions to check winning
   const checkWinning = () => {
      if (Game.moveNum >= 5) {
         if (
            _checkWinningHorizontally() ||
            _checkWinningVertically() ||
            _checkWinningDiagonally()
         ) {
            return true;
         }
      }
   };

   const _checkWinningHorizontally = () => {
      let winRow = 0;

      for (let row of GameBoard.board) {
         if (
            row.every((elem) => elem === "X") ||
            row.every((elem) => elem === "O")
         ) {
            GameBoard.getBoardRowsAsDOMElements()[winRow].forEach((spot) =>
               spot.classList.add("winning-line")
            );
            return true;
         }

         winRow++;
      }
   };

   const _checkWinningVertically = () => {
      for (let i = 0; i < 3; i++) {
         if (
            GameBoard.firstRow[i] &&
            GameBoard.firstRow[i] === GameBoard.secondRow[i] &&
            GameBoard.firstRow[i] === GameBoard.thirdRow[i]
         ) {
            let DOMBoard = GameBoard.getBoardRowsAsDOMElements();
            for (let j = 0; j < 3; j++)
               DOMBoard[j][i].classList.add("winning-line");

            return true;
         }
      }
   };

   const _checkWinningDiagonally = () => {
      // Check on the main diagonal
      if (
         GameBoard.firstRow[0] &&
         GameBoard.firstRow[0] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[0] === GameBoard.thirdRow[2]
      ) {
         let DOMBoard = GameBoard.getBoardRowsAsDOMElements();
         for (let i = 0; i < 3; i++)
            DOMBoard[i][i].classList.add("winning-line");

         return true;
      }
      // check on the secondary diagonal
      else if (
         GameBoard.firstRow[2] &&
         GameBoard.firstRow[2] === GameBoard.secondRow[1] &&
         GameBoard.firstRow[2] === GameBoard.thirdRow[0]
      ) {
         let DOMBoard = GameBoard.getBoardRowsAsDOMElements();
         for (let i = 0, j = 2; i < 3; i++, j--)
            DOMBoard[i][j].classList.add("winning-line");

         return true;
      }
   };

   // Check for tie
   const checkTie = () => {
      return Game.moveNum === 10 ? true : false;
   };

   // Display players info under the board
   const setPlayersInfo = () => {
      _players.firstPlayer.name.innerText = form.firstPlayer;
      _players.secondPlayer.name.innerText = form.secondPlayer;
   };

   // Change the starter player when winning or tie
   const changeStarterPlayer = () => {
      if (_players.firstPlayer.isStarter) {
         _players.firstPlayer.isStarter = false;
         _players.firstPlayer.info.classList.remove("starter-player");
         _players.secondPlayer.info.classList.add("starter-player");
         _players.secondPlayer.isStarter = true;
      } else {
         _players.secondPlayer.isStarter = false;
         _players.secondPlayer.info.classList.remove("starter-player");
         _players.firstPlayer.info.classList.add("starter-player");
         _players.firstPlayer.isStarter = true;
         Game.isAITurn = false;
      }
   };

   // Increase the winning player's score
   const increasePlayerScore = () => {
      if (Game.numOfX > Game.numOfO) {
         if (_players.firstPlayer.isStarter)
            _players.firstPlayer.score.innerText =
               +_players.firstPlayer.score.innerText + 1;
         else
            _players.secondPlayer.score.innerText =
               +_players.secondPlayer.score.innerText + 1;
      } else {
         if (!_players.firstPlayer.isStarter)
            _players.firstPlayer.score.innerText =
               +_players.firstPlayer.score.innerText + 1;
         else
            _players.secondPlayer.score.innerText =
               +_players.secondPlayer.score.innerText + 1;
      }

      Game.numOfO = 0;
      Game.numOfX = 0;
   };

   return {
      playersInfo,
      moveNum: 1,
      numOfX: 0,
      numOfO: 0,
      checkWinning,
      checkTie,
      setPlayersInfo,
      changeStarterPlayer,
      increasePlayerScore,
      isAITurn: false,
   };
})();
