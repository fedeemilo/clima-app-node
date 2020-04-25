const axios = require('axios');

const getLugarLatLon = async (dir) => {
	const encodedUrl = encodeURI(dir);

	const instance = axios.create({
		baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
		headers: {
			'x-rapidapi-key': 'f8b2d99ee2msh61829914ea430b7p17594ajsn63c0c352ccd5'
		}
	});

	const resp = await instance.get();

	if (resp.data.Results.length === 0) {
		throw new Error(`No hay resultados para ${dir}`);
	}

	const data = resp.data.Results[0];
	const direccion = data.name;
	const lat = data.lat;
	const lon = data.lon;

	return {
		direccion,
		lat,
		lon
	};
};

module.exports = {
	getLugarLatLon
};
