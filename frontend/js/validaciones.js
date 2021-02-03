(function () {
	'use strict';
	window.addEventListener(
		'load',
		function () {
			let form1 = document.getElementById('form1');
			let form2 = document.getElementById('registrar');
			let form3 = document.getElementById('form3');

			//Iniciar Sesion

			form1.addEventListener(
				'submit',
				(e) => {
					let email = document.getElementById('inputLoginEmail').value;
					let clave = document.getElementById('inputLoginPassword').value;

					//Validacion de email

					if (email == '') {
						mensaje(e, 'emailDiv', 'block', 'Ingrese un correo');
					} else if (email.length >= 100) {
						mensaje(e, 'emailDiv', 'block', 'El correo es muy largo');
					} else if (emailValidar(email) === false) {
						mensaje(e, 'emailDiv', 'block', 'Ingrese un correo valido');
					} else {
						let caja = document.getElementById(`emailDiv`);
						caja.style.display = '';
					}

					//Validacion de contraseña

					if (clave == '') {
						mensaje(e, 'claveDiv', 'block', 'Ingrese la clave');
					} /* else if (claveValidar(clave) === false) {
						mensaje(e, 'claveDiv', 'block', 'Ingrese una contraseña valida');
					} */ // Validaciones de contraseña en iniciar sesion se podria ahorrar el uso del servidor
					/* else if (clave.length > 20) {
						mensaje(e, 'claveDiv', 'block', 'La contraseña es muy larga');
					} */
					else {
						let caja = document.getElementById(`claveDiv`);
						caja.style.display = '';
					}
				},
				false
			);

			// Registrarse

			form2.addEventListener(
				'submit',
				(e) => {
					let email2 = document.getElementById('email_registro').value;
					let clave2 = document.getElementById('pass_registro').value;
					let repetirClave = document.getElementById('repetirPass_registro').value;
					let nombre = document.getElementById('nombre_registro').value;
					let apellido = document.getElementById('apellido_registro').value;

					if (email2 == '') {
						mensaje(e, 'emailDiv2', 'block', 'Ingrese un correo');
					} else if (email2.length >= 100) {
						mensaje(e, 'emailDiv2', 'block', 'El correo es muy largo');
					} else if (emailValidar(email2) === false) {
						mensaje(e, 'emailDiv2', 'block', 'Ingrese un correo valido');
					} else {
						let caja = document.getElementById(`emailDiv2`);
						caja.style.display = '';
					}

					//Validacion de contraseña 2
					if (clave2 == '') {
						mensaje(e, 'claveDiv2', 'block', 'Ingrese la clave');
					} else if (clave2.length > 20) {
						mensaje(e, 'claveDiv2', 'block', 'La contraseña es muy larga');
					} else if (claveValidar(clave2) === false) {
						mensaje(e, 'claveDiv2', 'block', 'Ingrese una contraseña valida segun las reglas');
					} else {
						let caja = document.getElementById(`claveDiv2`);
						caja.style.display = '';
					}

					//Validacion de repita contraseña

					if (repetirClave == '') {
						mensaje(e, 'repetirClaveDiv', 'block', 'Repita la contraseña');
					} else if (clave2 == repetirClave) {
						console.log(clave2);
						console.log(repetirClave);
						console.log('iguales');
						let caja = document.getElementById(`repetirClaveDiv`);
						caja.style.display = '';
					} else {
						mensaje(e, 'repetirClaveDiv', 'block', 'Las contraseñas deben ser iguales');
						console.log('no iguales');
					}

					//Validacion de nombre

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

					//Validacion de apellido
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
				},
				false
			);

			// Recuperar cuenta

			form3.addEventListener(
				'submit',
				(e) => {
					let email3 = document.getElementById('ema_usu3').value;

					if (email3 == '') {
						mensaje(e, 'emailDiv3', 'block', 'Ingrese un correo');
					} else if (email3.length >= 100) {
						mensaje(e, 'emailDiv3', 'block', 'El correo es muy largo');
					} else if (emailValidar(email3) === false) {
						mensaje(e, 'emailDiv3', 'block', 'Ingrese un correo valido');
					} else {
						let caja = document.getElementById(`emailDiv3`);
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
	let claveExpresion = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[.*/#$%&¡!_\-,@:;?¿])(?=.*[a-zA-Z.*/#$%&¡!_\-,@:;?¿]).{8,20}$/;
	return claveExpresion.test(texto);
}

function nombreValidar(texto) {
	let nombreExpresion = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
	return nombreExpresion.test(texto);
}

function mensaje(e, elem, display, mensaje) {
	let caja = document.getElementById(`${elem}`);
	caja.style.display = `${display}`;
	pausa(e);
	return (caja.innerHTML = mensaje);
}

function interaccion(valor) {
	if (valor == 'abrir') {
		document.getElementById('avisoPass').className = document
			.getElementById('avisoPass')
			.className.replace(/(?:^|\s)d-none(?!\S)/g, ' d-block');
		document.getElementById('passIncorrecta').className = document
			.getElementById('passIncorrecta')
			.className.replace(/(?:^|\s)d-block(?!\S)/g, ' d-none');
	}
	if (valor == 'pass') {
		document.getElementById('passIncorrecta').className = document
			.getElementById('passIncorrecta')
			.className.replace(/(?:^|\s)d-block(?!\S)/g, ' d-none');
		document.getElementById('avisoPass').className = document
			.getElementById('avisoPass')
			.className.replace(/(?:^|\s)d-block(?!\S)/g, ' d-none');
	}
}
