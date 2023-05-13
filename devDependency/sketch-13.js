const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

let angle = 0;

canvasSketch(() => {
  return () => {
    background(0);
    translate(width / 2, height / 2);
    rotate(angle);

    for (let i = 0; i < 8; i++) {
      push();
      let offset = map(i, 0, 7, 0, TWO_PI);
      rotate(offset);
      fill(255);
      square(0, 0, 100, 50);
      pop();
    }

    angle += 0.01;
  };
}, settings);
