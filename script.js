const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        squares = document.querySelectorAll(".square"),
        moveNum = 1,
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];

    const updateSquare = (e) => {
        let squareIndex = JSON.parse(e.target.getAttribute("data-index"));

        if (!e.target.innerText)
            moveNum % 2 !== 0
                ? (e.target.innerText = "X")
                : (e.target.innerText = "O");

        moveNum++;
        board[squareIndex[0]][squareIndex[1]] = e.target.innerText;
        checkWinning();
    };

    const checkWinning = () => {
        if (moveNum >= 5) {
            checkWinningHorizontally();
        }
    };

    const checkWinningHorizontally = () => {
        for (let row of board) {
            if (
                row.every((elem) => elem === "X") ||
                row.every((elem) => elem === "O")
            ) {
                alert("Someone has won");
                break;
            }
        }
    };

    squares.forEach((square) =>
        square.addEventListener("click", updateSquare, false)
    );

    return {
        gameContainer,
        board,
    };
})();
