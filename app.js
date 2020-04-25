const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

// Ejemplo Openweather API
// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={your api key}

const getInfo = async (direccion) => {
	try {
		const coords = await lugar.getLugarLatLon(direccion);
		const temp = await clima.getClima(coords.lat, coords.lon);
		return `El clima de ${coords.direccion} es de ${temp}`;
	} catch (e) {
		return `No se puedo determinar el clima de ${direccion}`;
	}
};

getInfo(argv.direccion).then(console.log).catch(console.log);
