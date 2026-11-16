const r = require("raylib")
const config = require("./config")

function create() {
    const width = config.grid.width;
    const height = config.grid.height;
    const noOfRows = config.grid.noOfRows;
    const noOfColumns = config.grid.noOfColumns;
    const color = config.grid.color

    return { width, height, noOfRows, noOfColumns, color }
}

function draw(grid) {

    const width = grid.width;
    const height = grid.height;

    for (let row = 1; row < grid.noOfRows; row++) {
        r.DrawLine(0, row * height, height * grid.noOfRows, row * height, grid.color)
    }

    for (let column = 1; column < grid.noOfColumns; column++) {
        r.DrawLine(column * width, 0, column * width, width * grid.noOfColumns, grid.color)
    }

}

module.exports = {
    create,
    draw
}