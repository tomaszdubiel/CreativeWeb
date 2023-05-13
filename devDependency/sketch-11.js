const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

const numSpirals = 10;
let angle = 0;

canvasSketch(() => {
  return () => {
    background(0);
    translate(width / 2, height / 2);

    // Simulate music wave as an oscillation over time
    let musicWave = abs(sin(frameCount * 0.05)) * 100;

    for (let i = 0; i < numSpirals; i++) {
      let spiralRadius = map(i, 0, numSpirals, 50, width / 4);
      let spiralAngle = angle + map(i, 0, numSpirals, 0, TWO_PI);

      push();
      rotate(spiralAngle);

      for (let j = 0; j < 100; j++) {
        let radian = map(j, 0, 100, 0, TWO_PI);
        let radius = map(sin(radian + spiralAngle), -1, 1, spiralRadius, spiralRadius + musicWave);  // Use musicWave here
        let x = radius * cos(radian);
        let y = radius * sin(radian);
        let size = map(sin(radian + spiralAngle), -1, 1, 10, 50);
        let color = map(sin(radian + spiralAngle), -1, 1, 0, 255);

        fill(color, color, 255);
        noStroke();
        ellipse(x, y, size);
      }

      pop();
    }

    angle += 0.01;
  };
}, settings);
