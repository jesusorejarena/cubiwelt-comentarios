# Documentación

---

## Backend

### Clases

#### Comentarios

###### Ruta del archivo

```bash
backend/clase/comentario.class.php
```

1. Hace que liste las respuestas segun el codigo del comentario raiz.

```php

	public function listarRespuestas()
	{
		$this->que_bda = "SELECT * FROM comentario_video 
		WHERE fky_video = '$this->fky_video' AND 
		res_com_vid = $this->res_com_vid AND est_com_vid = 'A';";
		return $this->run();
	} //Fin Listar Responder

```

2. Borra los comentarios o respuestas segun el id.

```php

	public function borrarComentarioORespuesta()
	{
		$this->que_bda = "DELETE FROM comentario_video 
		WHERE cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
		// echo json_encode($this->que_bda);
	} //Fin Borrar Comentario

```

3. Borra las respuestas anidadas al comentario.

```php

	public function borrarRespuestasComentarios()
	{
		$this->que_bda = "DELETE FROM comentario_video 
		WHERE res_com_vid = '$this->cod_com_vid';";
		return $this->run();
		// echo json_encode($this->que_bda);
	} //Fin Borrar Comentario

```

#### Likes

###### Ruta del archivo

```bash
backend/clase/like.class.php
```

1. Verifica que reaccion ha dado el usuario para mostrarlo en la interfaz.

```php

	public function verificarLike()
	{
		$this->que_bda = "SELECT * FROM like_comentario WHERE
		fky_usu_onl = '$this->fky_usu_onl' AND
		fky_com_vid = '$this->fky_com_vid' AND
		tip_lik_vid = 'L';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Verificar Like

	public function verificarDislike()
	{
		$this->que_bda = "SELECT * FROM like_comentario WHERE
		fky_usu_onl = '$this->fky_usu_onl' AND
		fky_com_vid = '$this->fky_com_vid' AND
		tip_lik_vid = 'D';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Verificar Dislike

```

2. Hace que el usuario si tiene alguna reaccion y el quiera cambiar se actualice a la que a presionado.

```php

	public function CambiarLikeDislike()
	{
		$this->que_bda = "UPDATE like_comentario SET
		tip_lik_vid = 'D'
		WHERE
		cod_lik_vid = '$this->cod_lik_vid';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Cambiar like a dislike

	public function CambiarDislikeLike()
	{
		$this->que_bda = "UPDATE like_comentario SET
		tip_lik_vid = 'L'
		WHERE
		cod_lik_vid = '$this->cod_lik_vid';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Cambiar dislike a like

```

3. Hace que el usuario si tiene alguna reaccion y el quiera cambiar se actualice a la que a presionado.

```php

	public function CambiarLikeDislike()
	{
		$this->que_bda = "UPDATE like_comentario SET
		tip_lik_vid = 'D'
		WHERE
		cod_lik_vid = '$this->cod_lik_vid';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Cambiar like a dislike

	public function CambiarDislikeLike()
	{
		$this->que_bda = "UPDATE like_comentario SET
		tip_lik_vid = 'L'
		WHERE
		cod_lik_vid = '$this->cod_lik_vid';";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Cambiar dislike a like

```

#### Utilidad

###### Ruta del archivo

```bash
backend/clase/utilidad.class.php
```

1. Realice dos extraer data para que no tuvieran problemas.

```php

	public  $puntero;
	public  $puntero2;

	public function extractData()
	{
		return $this->puntero->fetch_assoc();
	}

	public function extractData2()
	{
		return $this->puntero2->fetch_assoc();
	}

```

### Controladores

#### Comentarios

###### Ruta del archivo

```bash
backend/controlador/comentarios.php
```

1. Borra el comentario raiz, verifica si se pudo borrar el comentario raiz para luego borrar las respuestas y luego borra los likes guardados.

```php

	case 'borrarComentario':
		$obj_com->cod_com_vid = $_POST["cod_com_vid"];
		$mensaje = $obj_com->borrarComentarioORespuesta();
		if ($mensaje == true) {
			$obj_com->borrarRespuestasComentarios();
			echo json_encode("paso");
		} else {
			echo json_encode("error");
		}
		break;

```

2. Borra la respuesta "solo la respuesta" del comentario raiz.

```php

	case 'borrarComentario':
		$obj_com->cod_com_vid = $_POST["cod_com_vid"];
		$mensaje = $obj_com->borrarComentarioORespuesta();
		if ($mensaje == true) {
			$obj_com->borrarRespuestasComentarios();
			echo json_encode("paso");
		} else {
			echo json_encode("error");
		}
		break;

```

#### Likes

###### Ruta del archivo

```bash
backend/controlador/like.php
```

1. Verifica si hay likes anteriores, si no los hay, agrega el like del usuario y los suma a los comentarios.

```php

	case 'agregarLike':
		$obj_lik->contador = $obj_lik->verificarLike();
		if ($obj_lik->count() >= 1) {
			// echo json_encode("error");
		} else {
			$obj_lik->agregarLike();
			$obj_com->sumarLike();
			// echo json_encode("paso");
		}
		break;

	case 'agregarDislike':
		$obj_lik->contador = $obj_lik->verificarDislike();
		if ($obj_lik->count() >= 1) {
			// echo json_encode("error");
		} else {
			$obj_lik->agregarDislike();
			$obj_com->sumarDislike();
			// echo json_encode("paso");
		}
		break;

```

2. Cambia de reaccion, segun como este anteriormente, verifica, cambia de reaccion del usuario y suma o resta segun la reaccion en los comentario.

```php

	case 'agregarLike':
		$obj_lik->contador = $obj_lik->verificarLike();
		if ($obj_lik->count() >= 1) {
			// echo json_encode("error");
		} else {
			$obj_lik->agregarLike();
			$obj_com->sumarLike();
			// echo json_encode("paso");
		}
		break;

	case 'agregarDislike':
		$obj_lik->contador = $obj_lik->verificarDislike();
		if ($obj_lik->count() >= 1) {
			// echo json_encode("error");
		} else {
			$obj_lik->agregarDislike();
			$obj_com->sumarDislike();
			// echo json_encode("paso");
		}
		break;

```

3. Quita la reaccion segun donde se haya presionado, verifica, quita el like del usuario y resta de los comentarios.

```php

	case 'quitarLike':
		$obj_lik->contador = $obj_lik->verificarLike();
		if ($obj_lik->count() >= 1) {
			$obj_lik->puntero = $obj_lik->verificarLike();
			$like = $obj_lik->extractData();
			$obj_lik->cod_lik_vid = $like['cod_lik_vid'];
			$obj_lik->quitarLike();
			$obj_com->restarLike();
			// echo json_encode("paso");
		} else {
			// echo json_encode("error");
		}
		break;

	case 'quitarDislike':
		$obj_lik->contador = $obj_lik->verificarDislike();
		if ($obj_lik->count() >= 1) {
			$obj_lik->puntero = $obj_lik->verificarDislike();
			$dislike = $obj_lik->extractData();
			$obj_lik->cod_lik_vid = $dislike['cod_lik_vid'];
			$obj_lik->quitarlike();
			$obj_com->restarDislike();
			// echo json_encode("paso");
		} else {
			// echo json_encode("error");
		}
		break;

```

****

## Frontend

#### Vistas

###### Ruta del archivo

```bash
frontend/vista/comentarios/curso_online.php
```

1. Se tiene que agregar una nueva seccion para los comentarios en las pestañas.

```html

	<!-- MENU Del VIDEO ................................-->

	<li class="nav-item">
		<a class="nav-link vin-ho" id="comentarios-tab" 
		data-toggle="tab" href="#comentarios" role="tab"
		aria-controls="comentarios" 
		aria-selected="false">
			<strong>Comentarios</strong>
		</a>
	</li>

```

2. Agregar el contenido del tab por medio de la función que imprime los comentarios.

```html

	<!-- COMENTARIOS........................................ -->

	<!--Comienzo Pestaña de Comentarios -->

	<div class="tab-pane fade show active px-0 pr-md-4 pl-md-4" 
	id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab">
		<div class="container-fluid px-md-5 px-0">
			<div class="row px-md-5 py-3">

				<!-- Contenido/funcionamiento de los comentarios -->

			</div>
		</div>
	</div>

	<script>

		// Variables

		const botonComentario = document.getElementById("botonComentario");
		const botonComentarioAccion = document.getElementById("botonComentarioAccion");
		const cancelarRespuesta = document.getElementById("cancelarRespuesta");
		const tituloCaja = document.getElementById("tituloCaja");
		const tituloInput = document.getElementById("tituloInput");
		const titulo = document.getElementById("titulo");
		const tituloDiv = document.getElementById("tituloDiv");
		const comentario = document.getElementById("comentario");
		const codigoRespuesta = document.getElementById("codigoRespuesta");

		// Vistas para cambio entre comentar/responder

		function responder(usuario, codigo) {
			cancelarRespuesta.style.display = "block";
			tituloCaja.innerHTML = "Respuesta";
			tituloInput.style.display = "none";
			titulo.removeAttribute("id");
			tituloDiv.removeAttribute("id");
			comentario.innerHTML = `@${usuario} `;
			botonComentarioAccion.setAttribute("value", "agregarRespuesta");
			codigoRespuesta.setAttribute("value", codigo);
			botonComentario.innerText = "Responder";
		}

		cancelarRespuesta.addEventListener("click", () => {
			cancelarRespuesta.style.display = "none";
			tituloCaja.innerHTML = "Comentario";
			tituloInput.style.display = "block";
			titulo.setAttribute("id", "titulo")
			tituloDiv.setAttribute("id", "tituloDiv")
			comentario.innerHTML = "";
			botonComentarioAccion.setAttribute("value", "agregarComentario");
			codigoRespuesta.setAttribute("value", "");
			botonComentario.innerText = "Comentar";
		})
	</script>

	<script src="validaciones.js"></script>
	<script src="envioData.js"></script>

	<!--Fin Pestaña de Comentarios -->

```

3. Formulario que cambia segun se haya presionado si se va a responder o a comentar.

```html

	<div class="col-12 col-md-4 px-md-4">
		<div class="row my-4 py-3 bg-light" style="border-radius: 10px; position: -webkit-sticky; position: sticky; top: 90px">
			<div class="col-12" id="respuestaCaja"></div>
			<div class="col-12" id="cancelarRespuesta" style="display: none">
				<div class="d-flex justify-content-end align-item-center">
					<i class="fas fa-times px-2 text-danger" style="cursor: pointer"></i>
				</div>
			</div>
			<div class="col-12">
				<form action="../../../backend/controlador/comentarios.php" method="POST" class="was-validation" id="formulario" novalidate>
					<input type='hidden' name='fky_usu_onl' value='<?php echo 1;/*$_SESSION["fky_usu_onl"];*/ ?>'>
					<input type='hidden' name='fky_video' value='<?php echo 1;/* $_GET["v"];*/ ?>'>
					<input type='hidden' name='nombre_usuario' value='<?php echo 1;/* $_GET["v"];*/ ?>'>
					<h4 class="text-center" id="tituloCaja">Comentario</h4>
					<input type="hidden" id="codigoRespuesta" name="res_com_vid" value="">
					<div class="row mt-3">
						<div class='col-12' id="tituloInput">
							<div class='form-group'>
								<label for='titulo'>Titulo</label>
								<input type='text' class='form-control' name='tit_com_vid' id='titulo' />
								<small id='tituloDiv' class='invalid-feedback'></small>
							</div>
						</div>
						<div class="col-12">
							<div class="form-group">
								<label for="comentario">Comentario</label>
								<textarea class="form-control" id="comentario" name="com_com_vid" rows="3"></textarea>
								<small id="comentarioDiv" class="invalid-feedback"></small>
							</div>
						</div>
						<input id="botonComentarioAccion" type='hidden' name='accion' value='agregarComentario'>
						<div class="col-12">
							<button id="botonComentario" class="btn btn-primary btn-block" style="background-color: #480080; border-color: #480080">
								Comentar
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	</div>

```

4. Inicio de la caja de comentarios.

```html

	<div id="cajaComentario" class="col-12 col-md-8 px-md-4">
		<div id="comentariosCaja">

			<!-- Contenido/funcionamiento de los comentarios -->

		</div>
	</div>

```

5. Todas las lineas que tienen el \$_SESSION/\$_GET, es para quitar el valor de al lado y dejar el \$_SESSION/\$_GET.

```php

	require_once("../../../backend/clase/comentarios.class.php");
	require_once("../../../backend/clase/like.class.php");

	$obj_lik = new like;

	$obj_lik->fky_usu_onl = 1;/*$_SESSION["fky_usu_onl"];*/ //SESSION 

	$obj_com = new comentarios;

	$obj_com->fky_video = 1;/*$_GET["v"];*/ //GET VIDEO 

	$obj_com->contador = $obj_com->listarComentario();

	$contador_comentario = $obj_com->count();

```