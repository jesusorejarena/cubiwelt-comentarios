(function () {
	'use strict';
	window.addEventListener(
		'load',
		function () {
			let form4 = document.getElementById('fomulario_sobre_ti');

			// Validacion de configuracion de la cuenta
			form4.addEventListener(
				'submit',
				(e) => {
					let cedula = document.getElementById('ide_alu').value;
					let sexo = document.getElementById('sex_alu').value;
					let nombre = document.getElementById('nom_alu').value;
					let apellido = document.getElementById('ape_alu').value;
					let email = document.getElementById('ema_alu').value;
					let pais = document.getElementById('fky_pais').value;
					let codigoPais1 = document.getElementById('pr1_alu').value;
					let telefono1 = document.getElementById('te1_alu').value;
					let codigoPais2 = document.getElementById('pr2_alu').value;
					let telefono2 = document.getElementById('te2_alu').value;
					let dia = document.getElementById('dia_alu').value;
					let mes = document.getElementById('mes_alu').value;
					let anio = document.getElementById('ano_alu').value;

					// Validacion de cedula
					if (cedula == '') {
						mensaje(e, 'cedulaDiv', 'block', 'Ingrese su cédula');
					} else if (cedula.length > 8) {
						mensaje(e, 'cedulaDiv', 'block', 'Ingrese una cédula valida');
					} else if (cedulaValidar(cedula) === false) {
						mensaje(e, 'cedulaDiv', 'block', 'Solo caracteres numericos');
					} else {
						let caja = document.getElementById(`cedulaDiv`);
						caja.style.display = '';
					}

					// Validacion de sexo
					if (sexo == '') {
						mensaje(e, 'sexoDiv', 'block', 'Elija su sexo');
					} else if (sexo == 'Seleccione..') {
						mensaje(e, 'sexoDiv', 'block', 'Elija su sexo');
					} else {
						let caja = document.getElementById(`sexoDiv`);
						caja.style.display = '';
					}

					// Validacion de nombre
					if (nombre == '') {
						mensaje(e, 'nombreDiv', 'block', 'Ingrese su nombre');
					} else if (nombre.length > 70) {
						mensaje(e, 'nombreDiv', 'block', 'El nombre es muy largo');
					} else if (nombreValidar(nombre) === false) {
						console.log('holaaasaaasas');
						mensaje(e, 'nombreDiv', 'block', 'Solo caracteres alfabéticos');
					} else {
						let caja = document.getElementById(`nombreDiv`);
						caja.style.display = '';
					}

					// Validacion de apellido
					if (apellido == '') {
						mensaje(e, 'apellidoDiv', 'block', 'Ingrese su apellido');
					} else if (apellido.length > 70) {
						mensaje(e, 'apellidoDiv', 'block', 'El nombre es muy largo');
					} else if (nombreValidar(apellido) === false) {
						mensaje(e, 'apellidoDiv', 'block', 'Solo caracteres alfabéticos');
					} else {
						let caja = document.getElementById(`apellidoDiv`);
						caja.style.display = '';
					}

					// Validacion de email
					if (email == '') {
						mensaje(e, 'emailDiv', 'block', 'Ingrese un correo');
					} else if (email.length >= 100) {
						mensaje(e, 'emailDiv', 'block', 'El correo es muy largo');
					} else if (emailValidar(email) === false) {
						mensaje(e, 'emailDiv', 'block', 'Ingrese un correo válido');
					} else {
						let caja = document.getElementById(`emailDiv`);
						caja.style.display = '';
					}

					// Validacion de pais
					if (pais == '') {
						mensaje(e, 'paisDiv', 'block', 'Elija su país');
					} else if (pais == 'Seleccione...') {
						mensaje(e, 'paisDiv', 'block', 'Elija su país');
					} else {
						let caja = document.getElementById(`paisDiv`);
						caja.style.display = '';
					}

					// Validacion de telefono 1
					if (telefono1 == '' || codigoPais1 == '' || codigoPais1 == 'Prefijo...') {
						mensaje(e, 'telefonoDiv1', 'block', 'Ingrese su teléfono con el código del país');
					} else if (telefonoValidar(telefono1) === false) {
						mensaje(e, 'telefonoDiv1', 'block', 'Ingrese un teléfono válido');
					} else {
						let caja = document.getElementById(`telefonoDiv1`);
						caja.style.display = '';
					}

					// Validacion de telefono 2
					if (telefono2 == '' || codigoPais2 == '' || codigoPais2 == 'Prefijo...') {
						mensaje(e, 'telefonoDiv2', 'block', 'Ingrese su teléfono con el código del país');
					} else if (telefonoValidar(telefono2) === false) {
						mensaje(e, 'telefonoDiv2', 'block', 'Ingrese un teléfono válido');
					} else {
						let caja = document.getElementById(`telefonoDiv2`);
						caja.style.display = '';
					}

					// Validacion de la fecha
					if (dia == '' || mes == '' || anio == '') {
						mensaje(e, 'nacimientoDiv', 'block', 'Ingrese su fecha de nacimiento');
					} else if (dia == 'Seleccione...' || mes == 'Seleccione...' || anio == 'Seleccione...') {
						mensaje(e, 'nacimientoDiv', 'block', 'Ingrese su fecha de nacimiento');
					} else {
						let caja = document.getElementById(`nacimientoDiv`);
						caja.style.display = '';
					}
				},
				false
			);
		},
		false
	);
})();

function pausa(e) {
	e.preventDefault();
	e.stopPropagation();
}

function emailValidar(texto) {
	let emailExpresion = /[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
	return emailExpresion.test(texto);
}

function claveValidar(texto) {
	let claveExpresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[.*/#$%&!_\-,])(?=.*[a-zA-Z.*/#$%&!_\-,]).{8,20}$/;
	return claveExpresion.test(texto);
}

function nombreValidar(texto) {
	let nombreExpresion = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	return nombreExpresion.test(texto);
}

function cedulaValidar(texto) {
	const cedulaExpresion = /^([0-9]{8})$/;
	return cedulaExpresion.test(texto);
}

function telefonoValidar(texto) {
	const telefonoExpresion = /^([0-9]{11})$/;
	return telefonoExpresion.test(texto);
}

function mensaje(e, elem, display, mensaje) {
	let caja = document.getElementById(`${elem}`);
	caja.style.display = `${display}`;
	pausa(e);
	return (caja.innerHTML = mensaje);
}
