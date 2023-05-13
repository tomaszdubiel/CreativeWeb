const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

const numCircles = 200;
let angle = 0;

canvasSketch(() => {
  return () => {
    background(0);
    translate(width / 2, height / 2);  // Move origin to center of canvas
    rotate(angle);  // Rotate entire canvas

    for (let i = 0; i < numCircles; i++) {
      let radian = map(i, 0, numCircles, 0, TWO_PI);
      let radius = map(i, 0, numCircles, 50, width / 2);
      let x = radius * cos(radian);
      let y = radius * sin(radian);
      let size = map(sin(radian + angle), -1, 1, 10, 50);
      let color = map(sin(radian + angle), -1, 1, 0, 255);

      fill(color, color, 255);
      noStroke();
      ellipse(x, y, size);
    }

    angle += 0.01;
  };
}, settings);
