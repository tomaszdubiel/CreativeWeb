const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

canvasSketch(() => {
  return () => {
    background(0);
    noStroke();
    const rhombusSize = 50;
    const rhombusCount = width / rhombusSize;
    const time = millis() * 0.001;

    // Calculate the colors outside the loop
    let r = map(sin(time), -1, 1, 0, 255);
    let g = map(cos(time), -1, 1, 0, 255);
    let b = map(sin(time + PI / 2), -1, 1, 0, 255);

    for (let i = 0; i < rhombusCount; i++) {
      for (let j = 0; j < rhombusCount; j++) {
        push();
        translate(i * rhombusSize + rhombusSize / 2, j * rhombusSize + rhombusSize / 2);
        rotate(time);

        // Use the calculated colors
        fill(r, g, b);
        beginShape();
        vertex(-rhombusSize / 2, 0);
        vertex(0, -rhombusSize / 2);
        vertex(rhombusSize / 2, 0);
        vertex(0, rhombusSize / 2);
        endShape(CLOSE);
        pop();
      }
    }
  };
}, settings);
