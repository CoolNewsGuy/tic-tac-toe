const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        _squares = document.querySelectorAll(".square"),
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];

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
    };
})();

const Game = (() => {
    const _firstRow = GameBoard.board[0],
        _secondRow = GameBoard.board[1],
        _thirdRow = GameBoard.board[2];

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
        for (let elem of _firstRow) {
            if (
                elem &&
                elem === _secondRow[_firstRow.indexOf(elem)] &&
                elem === _thirdRow[_firstRow.indexOf(elem)]
            ) {
                alert("Yep true");
                break;
            }
        }
    };

    const _checkWinningDiagonally = () => {
        if (
            _firstRow[0] &&
            _firstRow[0] === _secondRow[1] &&
            _firstRow[0] === _thirdRow[2]
        ) {
            alert("KO");
        } else if (
            _firstRow[2] &&
            _firstRow[2] === _secondRow[1] &&
            _firstRow[2] === _thirdRow[0]
        ) {
            alert("Yeahhh");
        }
    };

    return {
        checkWinning,
        moveNum,
    };
})();
