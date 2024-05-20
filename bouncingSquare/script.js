const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let squareSize = 50;
let x = Math.random();
let y = Math.random();
let dx = 2;
let dy = 2;

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "blue";
	ctx.fillRect(x, y, squareSize, squareSize);

	x += dx;
	y += dy;

	if (x + squareSize > canvas.width || x < 0) {
		dx = -dx;
	}
	if (y + squareSize > canvas.height || y < 0) {
		dy = -dy;
	}

	requestAnimationFrame(draw);
}

draw();
