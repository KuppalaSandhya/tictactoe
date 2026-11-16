const r = require("raylib");

function create() {
    const count = 0;
    const isGameOver = false;
    const result = "0";
    return { count, isGameOver, result }
}

function checksGameState(array) {
    return (
        array[0] !== 2 && array[0] === array[1] && array[0] === array[2] ||
        array[3] !== 2 && array[3] === array[4] && array[3] === array[5] ||
        array[6] !== 2 && array[6] === array[7] && array[6] === array[8] ||
        array[0] !== 2 && array[0] === array[3] && array[0] === array[6] ||
        array[1] !== 2 && array[1] === array[4] && array[1] === array[7] ||
        array[2] !== 2 && array[2] === array[5] && array[2] === array[8] ||
        array[0] !== 2 && array[0] === array[4] && array[0] === array[8] ||
        array[2] !== 2 && array[2] === array[4] && array[2] === array[6]
    )

}

function getResult(count, hasOwn) {

    if (hasOwn) return (count % 2 === 0) ? "Player2 Wins" : "Player1 Wins"
    return "Draw"
}

function update(array, game) {
    const isPlayerWin = checksGameState(array)
    game.isGameOver = isPlayerWin || game.count >= 9
    if (game.isGameOver) game.result = getResult(game.count, isPlayerWin)
}

function draw(game) {

    if (game.isGameOver) {
        r.DrawText(game.result, 200, 200, 50, r.RED)
        r.DrawText("Press Enter to Restart", 50, 300, 40, r.WHITE)
    }
}

module.exports = {
    create,
    update,
    draw
}