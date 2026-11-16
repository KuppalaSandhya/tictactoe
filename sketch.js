const r = require("raylib");
const config = require("./config")
const Grid = require("./grid")
const Texture = require("./textures")
const Game = require("./game")


function running() {
  return !r.WindowShouldClose();
}

function setup() {

  r.SetTraceLogLevel(r.LOG_NONE);
  r.InitWindow(config.window.width, config.window.height, "ticTacToe");
  r.SetTargetFPS(20);

  const grid = Grid.create()
  const target = Texture.create()
  const game = Game.create()

  return { grid, target, game };
}

function reset(w) {
  w.grid = Grid.create()
  w.target = Texture.create()
  w.game = Game.create()
}

function update(w) {
  if (w.game.isGameOver) {
    if (r.IsKeyPressed(r.KEY_ENTER)) {
      reset(w)
    }
    return;
  }
  Texture.update(w.target.array, w.game)
  Game.update(w.target.array, w.game)
}

function draw(w) {
  r.BeginDrawing();
  r.ClearBackground(r.BLACK);

  Grid.draw(w.grid);
  Texture.draw(w.target)
  Game.draw(w.game)

  r.EndDrawing();
}

function teardown() {
  r.CloseWindow();
}

module.exports = {
  running,
  setup,
  update,
  draw,
  teardown,
};