const axios = require('axios');

const getClima = async (lat, lon) => {
	const resp = await axios.get(
		`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fae37271319415b85d9559d5d4a4dcd2&units=metric`
	);

	return resp.data.main.temp;
};

module.exports = {
	getClima
};
