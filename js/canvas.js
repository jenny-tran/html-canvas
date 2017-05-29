var canvas = document.querySelector('canvas');

// Set canvas to full width/height of screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// c = context
var c = canvas.getContext('2d');

// c.fillRect(x, y, width, height);
c.fillStyle = 'rgba(255, 0, 0, 0.5)';
c.fillRect(100, 100, 100, 100);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(50, 50, 10, 10);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(200, 200, 50, 50);

// Line
c.beginPath();
// c.moveTo(x, y);
c.moveTo(50, 300);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = '#00a99f';
c.stroke();

// Randomise colours of circles
var colours = ['red', 'orange', 'blue', 'pink', 'black', 'teal'];

for (var i = 0; i < 100; i++) {
	var x = Math.random() * window.innerWidth;
	var y = Math.random() * window.innerHeight;
	c.beginPath();
	c.arc(x, y, 30, 0, Math.PI * 2, false); // Outline
	c.strokeStyle = colours[Math.floor(Math.random() * colours.length)];
	c.stroke();
}
