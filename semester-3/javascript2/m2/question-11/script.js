(function() {
	draw();
	setInterval(draw, 120);

	function draw() {
		const my_canvas = document.getElementById('canvas');

		if (my_canvas.getContext) {
			const context = my_canvas.getContext('2d');
			// Circle
			context.clearRect(0, 0, 200, 200);
			context.beginPath();
			context.arc(100, 100, 100, 0, 2 * Math.PI);
			context.stroke();
			context.save();
			context.translate(100, 100);

			// Triangle
			const time = new Date();
			context.rotate(2 * Math.PI / 60 * time.getSeconds() + 2 * Math.PI / 60000 * time.getMilliseconds());
			context.beginPath();
			context.moveTo(0, 0);
			context.lineTo(75, 20);
			context.lineTo(20, 75);
			context.fill();
			context.restore();
		} else {
			const canvas = document.getElementById('canvas');
			const noCanvas = document.getElementById('noCanvas');
			canvas.style.display = 'none';
			noCanvas.style.display = 'block';
			noCanvas.innerHTML = 'Your browser does not support HTML canvas';
		}
	}
})();
