const GameBoard = (() => {
    let gameContainer = document.querySelector(".gameboard"),
        squares = document.querySelectorAll(".square"),
        moveNum = 1,
        spots = [];

    const updateSquare = (e) => {
        moveNum % 2 !== 0
            ? (e.target.innerText = "X")
            : (e.target.innerText = "O");

        moveNum++;
    };

    squares.forEach((square) => square.addEventListener("click", updateSquare));

    return {
        gameContainer,
        squares,
    };
})();
