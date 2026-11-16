const r = require("raylib");

function createCross() {
  const target = r.LoadRenderTexture(180, 180);

  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.DrawLine(40, 40, 140, 140, r.WHITE);
  r.DrawLine(40, 140, 140, 40, r.WHITE);

  r.EndTextureMode();

  return target;
}

function createCircle() {
  const target = r.LoadRenderTexture(180, 180);
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.DrawCircleLines(90, 80, 40, r.WHITE);

  r.EndTextureMode();

  return target;
}

function createBlank() {
  const target = r.LoadRenderTexture(180, 180);
  r.BeginTextureMode(target);
  r.ClearBackground(r.BLACK);

  r.EndTextureMode();

  return target;
}

function create() {

  const array = [2, 2, 2, 2, 2, 2, 2, 2, 2];

  const texture = {
    0: createCircle(),
    1: createCross(),
    2: createBlank(),
  };

  return { array, texture }
}

function update(array, gameState) {

  if (r.IsKeyPressed(r.KEY_ONE) && array[0] === 2) {
    array[0] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_TWO) && array[1] === 2) {
    array[1] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_THREE) && array[2] === 2) {
    array[2] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_FOUR) && array[3] === 2) {
    array[3] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_FIVE) && array[4] === 2) {
    array[4] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_SIX) && array[5] === 2) {
    array[5] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_SEVEN) && array[6] === 2) {
    array[6] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_EIGHT) && array[7] === 2) {
    array[7] = gameState.count % 2;
    gameState.count += 1
  }

  if (r.IsKeyPressed(r.KEY_NINE) && array[8] === 2) {
    array[8] = gameState.count % 2;
    gameState.count += 1
  }

}

function draw(target) {

  for (let i = 0; i < target.array.length; i++) {

    const row = Math.floor(i / 3);
    const column = i % 3;
    const currentTexture = target.texture[target.array[i]]

    r.DrawTexture(currentTexture.texture, column * 200, row * 200, r.WHITE)
  }

}

module.exports = {
  create,
  update,
  draw
};



