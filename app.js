
const argv = require('yargs').options({
	direccion:{
		alias:'d',
		desc:'Ciudad',
		demand: true
	}
}).argv;

const lugar = require('./lugar/lugar');

const clima = require('./clima/clima');


let getInfo = async (direccion) => {

	try{
		let coordenadas = await lugar.getLugarLatLng(direccion);
		let temp = await clima.getClima(coordenadas.lat,coordenadas.lng);
		return `el clima en ${coordenadas.direccion} es de : ${temp} ºC`;
	}
	catch(e){
		return `No se pudo determinar el clima en ${direccion} `;
	}

	
} 



getInfo(argv.direccion) 
	.then( mensaje => console.log(mensaje))
	.catch(e => console.log(e));

/*

lugar.getLugarLatLng(argv.direccion)
	.then (respuesta => {
		console.log(respuesta);
	})
	.catch( e => console.log(e));


clima.getClima(17.0542297,-96.7132304)
.then(temp=>console.log(temp))
.catch(e=>console.log(e));

*/