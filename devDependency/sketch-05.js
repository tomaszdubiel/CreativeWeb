const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [ 800, 800 ],
  fps: 35
};

canvasSketch(() => {
  // setup
  return () => {
    // draw
    background(0);
    noStroke();
    const chevronSize = 50;
    const chevronCount = width / chevronSize;
    const time = millis() * 0.001;

    for (let i = 0; i < chevronCount; i++) {
      for (let j = 0; j < chevronCount; j++) {
        push();
        translate(i * chevronSize, j * chevronSize);
        fill((i + j) * 10 + time * 100 % 255, (i + j) * 5 + time * 50 % 255, 100, 200);
        beginShape();
        vertex(0, chevronSize / 2);
        vertex(chevronSize / 2, 0);
        vertex(chevronSize, chevronSize / 2);
        vertex(chevronSize / 2, chevronSize);
        endShape(CLOSE);
        pop();
      }
    }
  };
}, settings);
