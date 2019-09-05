const canvas = document.getElementById('canvas');
const canvasContext = canvas.getContext('2d');

if (canvasContext) {
	const x = canvas.width / 2;
	const y = canvas.height / 2;
	const date = new Date().toLocaleString();

	canvasContext.font = '24px Verdana';
	canvasContext.textAlign = 'center';
	canvasContext.textBaseline = 'middle';
	canvasContext.fillStyle = '#52ce90';
	canvasContext.strokeText(date, x, y);
} else {
	alert('Your browser does not support HTML canvas.');
}
