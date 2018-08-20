
const axios = require('axios');


const getClima = async (lat,lng) => {

	

let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=e82515d7e476c46871028444e350c18a`)

	//console.log(resp.data.main.temp);
	//let temp = resp.data.main.temp;

	return resp.data.main.temp;
	
}

module.exports = {
getClima

}