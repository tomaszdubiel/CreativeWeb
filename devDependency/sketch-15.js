const canvasSketch = require('canvas-sketch');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [1080, 720],
  animate: true,
  duration: 3,
  fps: 35
};

const sketch = () => {
  const lines = [];
  const numLines = 100;
  const amplitude = 100;
  const frequency = 0.005;
  const speed = 0.1;

  for (let i = 0; i < numLines; i++) {
    lines[i] = {
      y: i * (settings.dimensions[1] / numLines),
      offset: random.value(),
    };
  }

  return ({ context, width, height, playhead }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = 'white';
    context.lineWidth = 2;

    for (let i = 0; i < numLines; i++) {
      const line = lines[i];
      const x = Math.sin(line.offset + playhead * speed) * amplitude;
      const y = line.y;

      context.beginPath();
      context.moveTo(0, y);
      for (let j = 0; j < width; j += 10) {
        const curveX = j + x * Math.sin(j * frequency + playhead * speed);
        const curveY = y + x * Math.cos(j * frequency + playhead * speed);
        context.lineTo(curveX, curveY);
      }
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
