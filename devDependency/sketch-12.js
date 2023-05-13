const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

const gridCount = 10;
let time = 0;

canvasSketch(() => {
  return () => {
    background(0);
    noStroke();
    time += 0.01;

    for (let i = 0; i < gridCount; i++) {
      for (let j = 0; j < gridCount; j++) {
        let x = map(i, 0, gridCount - 1, 50, width - 50);
        let y = map(j, 0, gridCount - 1, 50, height - 50);
        let size = map(sin(time + (i + j) / 2), -1, 1, 10, 50);
        let color = map(i + j, 0, 2 * (gridCount - 1), 0, 255);

        fill(color, color, 255);
        ellipse(x, y, size);
      }
    }
  };
}, settings);
