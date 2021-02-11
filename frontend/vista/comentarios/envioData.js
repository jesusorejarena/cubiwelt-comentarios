function like(tipo, cod_com_vid, accion, change, usuario) {
	let data = new FormData();

	/* Aqui verifica si se esta enviando un like para 
	para añadirle el color y verificar si existe una 
	reaccion anterior para cambiarlo, por ejemplo de dislike a like */

	if (tipo == 'Like') {
		data.append('cod_com_vid', cod_com_vid);
		data.append('accion', accion);
		data.append('change', change);
		data.append('fky_usu_onl', usuario);

		let likeBoton = document.getElementById(`like${cod_com_vid}`);
		let dislikeBoton = document.getElementById(`dislike${cod_com_vid}`);

		if (data.get('change') == '' && data.get('accion') == 'agregarLike') {
			likeBoton.style = 'background-color: #480080; border-color: #480080; color: white;';
			data.append('valorAccion', accion);
		} else if (data.get('change') == '' && data.get('accion') == 'quitarLike') {
			likeBoton.style = 'background-color: white; border-color: #480080; color: #480080;';
			data.append('valorAccion', accion);
		} else if (data.get('change') == 'CambiarDislikeLike' && data.get('accion') == 'agregarLike') {
			likeBoton.style = 'background-color: #480080; border-color: #480080; color: white;';
			dislikeBoton.style = 'background-color: white; border-color: #480080; color: #480080;';
			data.append('valorAccion', change);
		}

		/* console.log(data.get('accion'));
		console.log(data.get('change'));
		console.log(data.get('valorAccion')); */
		fetch('../../../backend/controlador/like.php', {
			method: 'POST',
			body: data,
		})
			.then((res) => res.json())
			.then((respuesta) => {
				console.log(respuesta);
				if (respuesta == 'error') {
					console.log('Error');
				} else {
					console.log('Paso');
				}
			});
	} else {
		/* Aqui verifica si se esta enviando un like para 
		para añadirle el color y verificar si existe una 
		reaccion anterior para cambiarlo, por ejemplo de like a dislike */

		data.append('cod_com_vid', cod_com_vid);
		data.append('accion', accion);
		data.append('change', change);
		data.append('fky_usu_onl', usuario);

		let likeBoton = document.getElementById(`like${cod_com_vid}`);
		let dislikeBoton = document.getElementById(`dislike${cod_com_vid}`);

		if (data.get('change') == '' && data.get('accion') == 'agregarDislike') {
			dislikeBoton.style = 'background-color: #480080; border-color: #480080; color: white;';
			data.append('valorAccion', accion);
		} else if (data.get('change') == '' && data.get('accion') == 'quitarDislike') {
			dislikeBoton.style = 'background-color: white; border-color: #480080; color: #480080;';
			data.append('valorAccion', accion);
		} else if (data.get('change') == 'CambiarLikeDislike' && data.get('accion') == 'agregarDislike') {
			dislikeBoton.style = 'background-color: #480080; border-color: #480080; color: white;';
			likeBoton.style = 'background-color: white; border-color: #480080; color: #480080;';
			data.append('valorAccion', change);
		}

		/* console.log(data.get('accion'));
		console.log(data.get('change'));
		console.log(data.get('valorAccion')); */
		fetch('../../../backend/controlador/like.php', {
			method: 'POST',
			body: data,
		})
			.then((res) => res.json())
			.then((respuesta) => {
				console.log(respuesta);
				if (respuesta == 'error') {
					console.log('Error');
				} else {
					console.log('Paso');
				}
			});
	}
}

function borrarComentario(codigo) {
	// Borra el comentario de la vista
	let comentario = document.getElementById(`comentario${codigo}`);
	comentario.remove();
	let data = new FormData();

	data.append('cod_com_vid', codigo);
	data.append('accion', 'borrarComentario');

	fetch('../../../backend/controlador/comentarios.php', {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())
		.then((respuesta) => {
			console.log(respuesta);
			if (respuesta == 'error') {
				console.log('Error');
			} else {
				console.log('Paso');
			}
		});
}

function borrarRespuesta(codigo) {
	// Borra la respuesta

	let respuesta = document.getElementById(`respuesta${codigo}`);
	respuesta.remove();
	let data = new FormData();

	data.append('cod_com_vid', codigo);
	data.append('accion', 'borrarRespuesta');

	fetch('../../../backend/controlador/comentarios.php', {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())
		.then((respuesta) => {
			console.log(respuesta);
			if (respuesta == 'error') {
				console.log('Error');
			} else {
				console.log('Paso');
			}
		});
}

// Realiza el envio del comentario/respuesta y lo muestra en la vista, y manda la alerta si se envio correctamente

let formulario = document.getElementById('formulario');
let respuestaCaja = document.getElementById('respuestaCaja');

formulario.addEventListener('submit', function (e) {
	e.preventDefault();

	let data = new FormData(formulario);

	fetch('../../../backend/controlador/comentarios.php', {
		method: 'POST',
		body: data,
	})
		.then((res) => res.json())
		.then((respuesta) => {
			if (respuesta == 'error') {
				respuestaCaja.innerHTML = `
					<div class="alert alert-danger alert-dismissible fade show" role="alert">
						<strong>Hubo un error.</strong> Recarga la página.
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				`;
			} else {
				respuestaCaja.innerHTML = `
					<div class="alert alert-success alert-dismissible fade show" role="alert">
						<strong>Enviado correctamente.</strong>
						<button type="button" class="close" data-dismiss="alert" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
				`;

				let hoy = new Date();
				let fecha = hoy.getFullYear() + '-' + (hoy.getMonth() + 1) + '-' + hoy.getDate();
				let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
				let fechaYHora = fecha + ' ' + hora;

				let comentarioNuevo = `
			<div id="" class="row my-4 py-3 bg-light" style="border-radius: 10px">
				<div class="col-12 mb-3 d-flex justify-content-between">
					<h4>${data.get('tit_com_vid')}</h4>
					<i class="fas fa-trash-alt px-2 text-danger" style="cursor: pointer"></i>
				</div>
				<div class="col-12 px-4 px-md-5">
					<div class="row mb-3">
						<div class="col-2 col-md-1 px-0 d-flex justify-content-center align-items-start">
							<img src="https://aws.glamour.es/prod/designs/v1/assets/620x620/622608.jpeg" class="img-fluid rounded-circle shadow-sm" alt="" width="50px">
						</div>
						<div class="col-10 col-md-11 pl-2">
							<h5>${data.get('nombre_usuario')}</h5>
							<small>${fechaYHora}</small>
						</div>
					</div>
					<div class="row px-md-5 border-bottom my-2">
						<div class="col-12">
							<p class="text-justify">
								${data.get('com_com_vid')} </p>
						</div>
					</div>
					<div class="row mt-3">
						<div class="col-12 d-flex justify-content-end">
							<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 like" style="background-color: white; border-color: #480080; color: #480080;" id="" >
								0<i class="fas fa-thumbs-up ml-2 mx-md-2" id=""></i><b class="d-none d-md-block">Me gusta</b>
							</button>
							<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 dislike" style="background-color: white; border-color: #480080; color: #480080;" id="">
								0<i class="fas fa-thumbs-down ml-2 mx-md-2" id=""></i><b class="d-none d-md-block">No me gusta</b>
							</button>
							<button class="btn btn-primary d-flex justify-content-center align-items-center btn-sm ml-2 ml-md-3" style="background-color: #480080; border-color: #480080" >
								<i class="fas fa-reply mr-md-2"></i><b class="d-none d-md-block">Responder</b>
							</button>
						</div>
					</div>

					<div class="collapse my-4 px-3" id="">
					</div>
				</div>
			</div>
		`;
				/* 
				const comentariosCaja = document.getElementById('comentariosCaja'); */
				const cajonNuevo = document.getElementById('cajonNuevo');

				cajonNuevo.innerHTML = comentarioNuevo;
			}
		});
});