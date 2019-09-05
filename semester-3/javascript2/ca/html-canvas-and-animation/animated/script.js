const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');
const date = new Date().toLocaleString();
let speed = 8;
let step;
let steps;

init = () => {
	const canvas = document.getElementById('canvas');
	const canvasContext = canvas.getContext('2d');
	canvasContext.font = '24px Verdana'; // Font and font size
	canvasContext.textAlign = 'center'; // Text align
	canvasContext.textBaseline = 'middle'; // Vertical align
	canvasContext.fillStyle = '#52ce90'; // Text color
	step = -130; // Using -130 as it hides the date completely at the beginning
	steps = canvas.width + 130; // Total steps is width of canvas + 130 to hide text after it scrolls by
	animateText();
};

animateText = () => {
	step++; // Increment step
	canvasContext.clearRect(0, 0, canvas.width, canvas.height);
	canvasContext.save();
	canvasContext.translate(step, canvas.height / 2);
	canvasContext.strokeText(date, 0, 0);
	canvasContext.restore();
	if (step == steps) step = -130;
	if (step < steps) var t = setTimeout('animateText()', speed);
};

init(); // invoke init function. Start animation
