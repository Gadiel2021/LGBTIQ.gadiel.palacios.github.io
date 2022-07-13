let correctas = [2,3,1,2];
let opcion_elegida = [];
function respuesta(num_pregunta, seleccionada) {
	opcion_elegida[num_pregunta-1] = seleccionada.value;
}

function corregir() {
	let cantCorrectas = 0;
	for(let i = 0; i < correctas.length; i++) {
		if(opcion_elegida[i] == correctas[i]) {
			cantCorrectas++;
		}
	}

	document.getElementById("resultado").innerHTML = cantCorrectas;
}