const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        squares = document.querySelectorAll(".square"),
        moveNum = 1,
        spots = [
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
        spots[squareIndex[0]][squareIndex[1]] = e.target.innerText;
    };

    squares.forEach((square) =>
        square.addEventListener("click", updateSquare, false)
    );

    return {
        gameContainer,
        spots,
    };
})();
