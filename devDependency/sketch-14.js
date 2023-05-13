const canvasSketch = require('canvas-sketch');
const p5 = require('p5');
new p5();

const settings = {
  p5: true,
  animate: true,
  dimensions: [800, 800],
  fps: 35
};

let stars = [];
let fallingStars = [];

function Star() {
  this.x = random(width);
  this.y = random(height);
  this.size = random(0.25, 3);
  this.twinkleSpeed = random(0.02, 0.05);

  this.twinkle = function() {
    this.size += this.twinkleSpeed;
    if (this.size > 3 || this.size < 0.25) {
      this.twinkleSpeed = -this.twinkleSpeed;
    }
  }

  this.display = function() {
    stroke(255);
    strokeWeight(this.size);
    point(this.x, this.y);
  }
}

function FallingStar() {
  this.x = random(width);
  this.y = 0;
  this.speed = random(2, 6);
  this.tailLength = random(10, 30); // Added this line

  this.fall = function() {
    this.y += this.speed;
    if (this.y > height) {
      this.y = 0;
      this.x = random(width);
    }
  }

  this.display = function() {
    stroke(255);
    strokeWeight(2);
    line(this.x, this.y, this.x, this.y + this.tailLength); // Modified this line
  }
}

canvasSketch(() => {
  for (let i = 0; i < 200; i++) {
    stars[i] = new Star();
  }

  for (let i = 0; i < 3; i++) { // Reduced the number of falling stars
    fallingStars[i] = new FallingStar();
  }

  return () => {
    background(0);

    for (let i = 0; i < stars.length; i++) {
      stars[i].twinkle();
      stars[i].display();
    }

    for (let i = 0; i < fallingStars.length; i++) {
      fallingStars[i].fall();
      fallingStars[i].display();
    }
  };
}, settings);
