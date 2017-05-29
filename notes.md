# HTML Canvas

Source: [Chris Courses on Youtube](https://www.youtube.com/watch?v=EO6OkltgudE)

## Skills required:
1. Create and resizing your canvas
2. Drawing Elements
3. Animating Elements
4. Interact with Elements

## Setting up the size of the canvas
- Setting up the height and width through JS will ensure that the canvas is actually meeting the browsers height and width at 100%.
- context: Passing methods and functions to draw 2d objects

## Shapes
- Rectangle = `context.fillRect(x, y, width, height);`
- Line = begin:`c.beginPath();`, starting point: `c.moveTo(x, y);`, vertices: `c.lineTo(300, 100);`, draw: `c.stroke();`
- Arc: `c.arc(x, y, radius, startAngle, endAngle, counterclockwise);`
- For every new shape/stroke, write `c.beginPath();` or else it's just going to continue on from the last.
- Use a for-loop to create multiple;

```
// Example: Drawing a line
c.beginPath();
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = '#00a99f';
c.stroke();
```

## Add to colours to our canvas
- Line: `c.strokeStyle = any css colour` before `c.stroke()`
- Shape-fill: `c.fillStyle = 'rgba(255, 0, 0, 0.1)';` before shape

Up to [Video 3](https://www.youtube.com/watch?v=yq2au9EfeRQ).
