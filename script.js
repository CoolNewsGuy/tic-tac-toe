const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        squares = document.querySelectorAll(".square"),
        moveNum = 1,
        board = [
            ["", "", ""],
            ["", "", ""],
            ["", "", ""],
        ];

    const firstRow = board[0],
        secondRow = board[1],
        thirdRow = board[2];

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
            checkWinningVertically();
            checkWinningDiagonally();
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

    const checkWinningVertically = () => {
        for (let elem of firstRow) {
            if (
                elem &&
                elem === secondRow[firstRow.indexOf(elem)] &&
                elem === thirdRow[firstRow.indexOf(elem)]
            ) {
                alert("Yep true");
                break;
            }
        }
    };

    const checkWinningDiagonally = () => {
        if (
            firstRow[0] &&
            firstRow[0] === secondRow[1] &&
            firstRow[0] === thirdRow[2]
        ) {
            alert("KO");
        } else if (
            firstRow[2] &&
            firstRow[2] === secondRow[1] &&
            firstRow[2] === thirdRow[0]
        ) {
            alert("Yeahhh");
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
