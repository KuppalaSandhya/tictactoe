const sketch = require("./sketch");

function loop(w) {
  while (sketch.running()) {
    sketch.update(w);
    sketch.draw(w);
  }
}

function main() {
  const w = sketch.setup();
  loop(w);
  sketch.teardown();
}

main();