
const axios = require('axios');


const getLugarLatLng = async (direccion) => {

	let encodedURL = encodeURI(direccion);

	let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }`)
	
	if (resp.data.status === 'ZERO_RESULTS'){
		throw new Error(`No hay resultados para la ciudad ${direccion}`);
	}

			let direc= resp.data.results[0].formatted_address;
			let lat= resp.data.results[0].geometry.location.lat;
			let lng= resp.data.results[0].geometry.location.lng;

	return {
		direccion: direc,
		lat:lat,
		lng:lng
	}
}

module.exports = {
	getLugarLatLng
}


/* //Sin async - await 
const getLugarLatLng = (direccion) => {

	let encodedURL = encodeURI(argv.direccion);

	axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedURL }`)
		.then( resp => {
			
			//let address= resp.data.results[0];
			let direccion= resp.data.results[0].formatted_address;

			let lat= resp.data.results[0].geometry.location.lat;
			let lng= resp.data.results[0].geometry.location.lng;
			console.log(direccion);
			console.log(lat);
			console.log(lng);
		})
		.catch(e => console.log ('Error!', e));



	return {
		direccion,
		lat,
		lng
	}
}
*/
