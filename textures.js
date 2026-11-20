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

  return {array, texture};
}

function update(array, gameState) {
  const key = Number(r.GetKeyPressed()) - 49;

  if (key >= 0 && key <= 8 && array[key] === 2) {
    array[key] = gameState.count % 2;
    gameState.count += 1;
  }
}

function draw(target) {
  for (let i = 0; i < target.array.length; i++) {
    const row = Math.floor(i / 3);
    const column = i % 3;
    const currentTexture = target.texture[target.array[i]];

    r.DrawTexture(currentTexture.texture, column * 200, row * 200, r.WHITE);
  }
}

module.exports = {
  create,
  update,
  draw,
};
