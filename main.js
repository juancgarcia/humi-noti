var gpio = require('gpio');
var axios = require('axios');

var sensor;

sensor = gpio.export(2, {
	direction: gpio.DIRECTION.IN,
	interval: 200,
	ready: loop
});

function loop(params) {
	console.log('listening...');
	sensor.on('change', function (val) {
		console.log(`sensor: ${val}`);
	});
}