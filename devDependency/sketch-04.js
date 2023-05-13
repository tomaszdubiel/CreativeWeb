
const canvasSketch = require('canvas-sketch');
const { lerp } = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  const createGrid = () => {
    const points = [];
    const count = 30; // Adjust this for more/less rectangles
    for (let x = 0; x < count; x++) {
      for (let y = 0; y < count; y++) {
        const u = count <= 1 ? 0.5 : x / (count - 1);
        const v = count <= 1 ? 0.5 : y / (count - 1);
        points.push({
          color: 'hsl(' + 360 * random.value() + ', 50%, 50%)',
          rotation: random.noise2D(u, v),
          position: [ u, v ]
        });
      }
    }
    return points;
  };

  const points = createGrid();
  const margin = 200; // Margin around the pattern

  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    points.forEach(data => {
      const {
        color,
        position,
        rotation
      } = data;

      const [ u, v ] = position;

      const x = lerp(margin, width - margin, u);
      const y = lerp(margin, height - margin, v);

      // Draw the rectangle
      context.save();
      context.fillStyle = color;
      context.translate(x, y);
      context.rotate(rotation);
      context.fillRect(-15, -15, 30, 30); // Adjust these for rectangle size
      context.restore();
    });
  };
};

canvasSketch(sketch, settings);
