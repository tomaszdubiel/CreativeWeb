const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [1600, 800],
  fps: 35
};

const numCircles = 100;
let circles = [];

canvasSketch(() => {
  for (let i = 0; i < numCircles; i++) {
    circles[i] = {
      x: width / 2,
      y: height / 2,
      size: random(10, 50),
      speedX: random(-3, 3),
      speedY: random(-3, 3),
      color: [random(255), random(255), random(255)]
    };
  }

  return () => {
    background(0);

    for (let i = 0; i < numCircles; i++) {
      let circle = circles[i];

      fill(circle.color);
      noStroke();
      ellipse(circle.x, circle.y, circle.size);

      circle.x += circle.speedX;
      circle.y += circle.speedY;

      // Reset circle position to center if it goes off canvas
      if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
        circle.x = width / 2;
        circle.y = height / 2;
        circle.speedX = random(-3, 3);
        circle.speedY = random(-3, 3);
      }
    }
  };
}, settings);
