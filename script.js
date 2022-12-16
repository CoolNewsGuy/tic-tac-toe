const Game = (() => {
    let moveNum = 1;

    const checkWinning = () => {
        moveNum++;
        if (moveNum >= 5) {
            _checkWinningHorizontally();
            _checkWinningVertically();
            _checkWinningDiagonally();
        }
    };

    const _checkWinningHorizontally = () => {
        for (let row of GameBoard.board) {
            if (
                row.every((elem) => elem === "X") ||
                row.every((elem) => elem === "O")
            ) {
                alert("Someone has won");
                break;
            }
        }
    };

    const _checkWinningVertically = () => {
        for (let elem of GameBoard.firstRow) {
            if (
                elem &&
                elem ===
                    GameBoard.secondRow[GameBoard.firstRow.indexOf(elem)] &&
                elem === GameBoard.thirdRow[GameBoard.firstRow.indexOf(elem)]
            ) {
                alert("Yep true");
                break;
            }
        }
    };

    const _checkWinningDiagonally = () => {
        if (
            GameBoard.firstRow[0] &&
            GameBoard.firstRow[0] === GameBoard.secondRow[1] &&
            GameBoard.firstRow[0] === GameBoard.thirdRow[2]
        ) {
            alert("KO");
        } else if (
            GameBoard.firstRow[2] &&
            GameBoard.firstRow[2] === GameBoard.secondRow[1] &&
            GameBoard.firstRow[2] === GameBoard.thirdRow[0]
        ) {
            alert("Yeahhh");
        }
    };

    return {
        checkWinning,
        moveNum,
    };
})();

const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        _squares = document.querySelectorAll(".square"),
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];

    const firstRow = board[0],
        secondRow = board[1],
        thirdRow = board[2];

    const __updateSquare = (e) => {
        let squareIndex = JSON.parse(e.target.getAttribute("data-index"));

        if (!e.target.innerText)
            Game.moveNum % 2 !== 0
                ? (e.target.innerText = "X")
                : (e.target.innerText = "O");

        Game.moveNum++;
        board[squareIndex[0]][squareIndex[1]] = e.target.innerText;
        Game.checkWinning();
    };

    _squares.forEach((square) =>
        square.addEventListener("click", __updateSquare, false)
    );

    return {
        gameContainer,
        board,
        firstRow,
        secondRow,
        thirdRow,
    };
})();
