const r = require("raylib");

const window = {
    width: 600,
    height: 600,
}

const grid = {
    noOfRows : 3,
    noOfColumns : 3,
    color : r.WHITE
}
  grid.width = window.width / grid.noOfColumns;
  grid.height = window.height / grid.noOfRows;

module.exports = {
    window,
    grid
}