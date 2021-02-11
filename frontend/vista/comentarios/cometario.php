<?php

function comentario()
{

?>

	<!-- COMENTARIOS........................................ -->

	<!--Comienzo Pestaña de Comentarios -->
	<div class="tab-pane fade show active px-0 pr-md-4 pl-md-4" id="comentarios" role="tabpanel" aria-labelledby="comentarios-tab">
		<div class="container-fluid px-md-5 px-0">
			<div class="row px-md-5 py-3">
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
				<div id="cajaComentario" class="col-12 col-md-8 px-md-4">

					<div id="comentariosCaja">
						<?php

						require_once("../../../backend/clase/comentarios.class.php");
						require_once("../../../backend/clase/like.class.php");

						$obj_lik = new like;

						$obj_com = new comentarios;

						$obj_com->fky_video = 1;/*$_GET["v"];*/ //GET VIDEO 

						// Cuenta los comentarios, muestra el numero

						$obj_com->contador = $obj_com->listarComentario();

						$contador_comentario = $obj_com->count();

						?>

						<h3><?php echo $contador_comentario; ?> Comentarios</h3>

						<div id="cajonNuevo"></div>

						<?php

						// Valida si existen comentarios

						if ($contador_comentario > 0) {

							// Busca los comentarios segun el video

							$obj_com->fky_video = 1;/*$_GET["v"];*/ //GET VIDEO

							// Realiza la busqueda y extrae los datos para hacer un ciclo

							$obj_com->puntero = $obj_com->listarComentario();

							while (($comentario = $obj_com->extractData()) > 0) {

						?>
								<div id="comentario<?php echo "$comentario[cod_com_vid]"; ?>" class="row my-4 py-3 bg-light" style="border-radius: 10px">
									<div class="col-12 mb-3 d-flex justify-content-between">
										<!-- Titulo del comentario -->
										<h4><?php echo $comentario["tit_com_vid"]; ?></h4>
										<?php

										// Verifica si el codigo del usuario del comentario es el mismo de la sesion activa para que permita eliminar el comentario

										if ($comentario["fky_usu_onl"] == 1/*$_SESSION["fky_usu_onl"]*/) {

										?>
											<i class="fas fa-trash-alt px-2 text-danger" style="cursor: pointer" onClick="borrarComentario(<?php echo "$comentario[cod_com_vid]"; ?>)"></i>
										<?php

										}

										?>
									</div>
									<div class="col-12 px-4 px-md-5">
										<div class="row mb-3">
											<div class="col-2 col-md-1 px-0 d-flex justify-content-center align-items-start">
												<!-- Realizar una busqueda para la imagen del usuario para mostrar -->
												<img src="https://aws.glamour.es/prod/designs/v1/assets/620x620/622608.jpeg" class="img-fluid rounded-circle shadow-sm" width="50px" alt="" />
											</div>
											<div class="col-10 col-md-11 pl-2">
												<!-- Realizar una busqueda para el nombre del usuario y mostrarlo -->
												<h5><?php echo /*$_SESSION["usuario"];*/ $comentario["fky_usu_onl"]; ?></h5>
												<!-- Fecha de registro -->
												<small><?php echo $comentario["reg_com_vid"]; ?></small>
											</div>
										</div>
										<div class="row px-md-5 border-bottom my-2">
											<div class="col-12">
												<p class="text-justify">
													<!-- Contenido del comentario -->
													<?php echo $comentario["com_com_vid"]; ?>
												</p>
											</div>
										</div>
										<!-- Botones -->
										<div class="row mt-3">
											<div class="col-12 d-flex justify-content-end">
												<?php

												// Verifica si existen comentarios para mostrar el boton del dropdown

												$obj_com->res_com_vid = $comentario["cod_com_vid"];
												$obj_com->contador = $obj_com->listarRespuestas();

												$contador_respuestas = $obj_com->count();

												if ($contador_respuestas > 0) {

												?>
													<button class="btn btn-primary d-flex justify-content-center align-items-center btn-sm mr-2 mr-md-3" style="background-color: #480080; border-color: #480080" type="button" data-toggle="collapse" data-target="#comentarioRespuesta<?php echo $comentario["cod_com_vid"]; ?>" aria-expanded="false" aria-controls="comentarioRespuesta<?php echo $comentario["cod_com_vid"]; ?>">
														<?php echo $contador_respuestas; ?><i class="fas fa-comments ml-2 mx-md-2"></i><b class="d-none d-md-block">Comentarios</b>
													</button>

												<?php

												}

												// Verifica si existen likes del usuario para mostrar el boton con un color diferente

												$obj_lik->fky_usu_onl = 1;/*$_SESSION["fky_usu_onl"];*/ //SESSION 

												// Likes

												$obj_lik->fky_com_vid = $comentario["cod_com_vid"];
												$obj_lik->contador = $obj_lik->verificarLike();
												$contadorLike = $obj_lik->count() > 0;

												// Dislikes

												$obj_lik->fky_com_vid = $comentario["cod_com_vid"];
												$obj_lik->contador = $obj_lik->verificarDislike();
												$contadorDislike = $obj_lik->count() > 0;

												// Likes

												if ($contadorLike > 0) {
													$verificarLike = "background-color: #480080; border-color: #480080; color: white;";
													$funcionLike = "quitarLike";
													$changeDislike = "CambiarLikeDislike";
												} else {
													$verificarLike = "background-color: white; border-color: #480080; color: #480080;";
													$funcionLike = "agregarLike";
													$changeDislike = "";
												}

												// Dislikes

												if ($contadorDislike > 0) {
													$verificarDislike = "background-color: #480080; border-color: #480080; color: white;";
													$funcionDislike = "quitarDislike";
													$changeLike = "CambiarDislikeLike";
												} else {
													$verificarDislike = "background-color: white; border-color: #480080; color: #480080;";
													$funcionDislike = "agregarDislike";
													$changeLike = "";
												}

												?>

												<!-- Boton de like -->

												<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 like" style="<?php echo $verificarLike ?>" id="like<?php echo "$comentario[cod_com_vid]"; ?>" onClick="like('Like', <?php echo "'$comentario[cod_com_vid]', '$funcionLike', '$changeLike', '1'"; ?>)">
													<?php echo $comentario["lik_com_vid"]; ?><i class="fas fa-thumbs-up ml-2 mx-md-2" id="likeIcono<?php echo $comentario["cod_com_vid"]; ?>"></i><b class="d-none d-md-block">Me gusta</b>
												</button>

												<!-- Boton de Dislike -->

												<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 dislike" style="<?php echo $verificarDislike ?>" id="dislike<?php echo "$comentario[cod_com_vid]"; ?>" onClick="like('Dislike', <?php echo "'$comentario[cod_com_vid]', '$funcionDislike', '$changeDislike', '1'"; ?>)">
													<?php echo $comentario["dis_com_vid"]; ?><i class="fas fa-thumbs-down ml-2 mx-md-2" id="dislikeIcono<?php echo $comentario["cod_com_vid"]; ?>"></i><b class="d-none d-md-block">No me gusta</b>
												</button>

												<!-- Boton de respuesta -->

												<button class="btn btn-primary d-flex justify-content-center align-items-center btn-sm ml-2 ml-md-3" style="background-color: #480080; border-color: #480080" onClick="responder(<?php echo "$comentario[fky_usu_onl], $comentario[cod_com_vid]"; ?>)">
													<i class="fas fa-reply mr-md-2"></i><b class="d-none d-md-block">Responder</b>
												</button>
											</div>
										</div>

										<div class="collapse my-4 px-3" id="comentarioRespuesta<?php echo $comentario["cod_com_vid"]; ?>">
											<?php

											// Si existen respuestas va a habilitar el dropdown

											if ($contador_respuestas > 0) {

												// Lista las respuestas

												$obj_com->res_com_vid = $comentario["cod_com_vid"];
												$obj_com->puntero2 = $obj_com->listarRespuestas();

												while (($respuesta = $obj_com->extractData2()) > 0) {

													// Verifica si el usuario tiene likes o dislikes para pintarlos

													// Likes

													$obj_lik->fky_com_vid = $respuesta["cod_com_vid"];
													$obj_lik->contador = $obj_lik->verificarLike();
													$contadorLike2 = $obj_lik->count() > 0;

													// Dislikes

													$obj_lik->fky_com_vid = $respuesta["cod_com_vid"];
													$obj_lik->contador = $obj_lik->verificarDislike();
													$contadorDislike2 = $obj_lik->count() > 0;

													// Likes

													if ($contadorLike2 > 0) {
														$verificarLike2 = "background-color: #480080; border-color: #480080; color: white;";
														$funcionLike2 = "quitarLike";
														$changeDislike2 = "CambiarLikeDislike";
													} else {
														$verificarLike2 = "background-color: white; border-color: #480080; color: #480080;";
														$funcionLike2 = "agregarLike";
														$changeDislike2 = "";
													}

													// Dislikes

													if ($contadorDislike2 > 0) {
														$verificarDislike2 = "background-color: #480080; border-color: #480080; color: white;";
														$funcionDislike2 = "quitarDislike";
														$changeLike2 = "CambiarDislikeLike";
													} else {
														$verificarDislike2 = "background-color: white; border-color: #480080; color: #480080;";
														$funcionDislike2 = "agregarDislike";
														$changeLike2 = "";
													}
											?>
													<div id="respuesta<?php echo "$respuesta[cod_com_vid]"; ?>" class="row mt-3" style="background-color: #f2f2f2; border-radius: 10px">
														<div class="col-12 py-3">
															<div class="row px-4 mb-3">
																<div class="col-1 px-0 d-flex justify-content-center align-items-start">
																	<!-- Realizar una busqueda para la imagen del usuario para mostrar -->
																	<img src="https://aws.glamour.es/prod/designs/v1/assets/620x620/622608.jpeg" class="img-fluid rounded-circle shadow-sm" width="30px" alt="" />
																</div>
																<div class="col-10 pl-0">
																	<!-- Realizar una busqueda para el nombre del usuario y mostrarlo -->
																	<h5><?php echo /*$_SESSION["usuario"];*/ $respuesta["fky_usu_onl"]; ?></h5>
																	<!-- Fecha de registro -->
																	<small><?php echo $respuesta["reg_com_vid"]; ?></small>
																</div>
																<div class="col-1">
																	<?php

																	if ($respuesta["fky_usu_onl"] == 1) {

																	?>
																		<i class="fas fa-trash-alt px-2 text-danger" style="cursor: pointer" onClick="borrarRespuesta(<?php echo "$respuesta[cod_com_vid]"; ?>)"></i>
																	<?php

																	}

																	?>
																</div>
															</div>
															<div class="row px-md-5 my-2">
																<div class="col-12">
																	<p class="text-justify mb-0">
																		<!-- Contenido del comentario -->
																		<?php echo $respuesta["com_com_vid"]; ?>
																	</p>
																</div>
															</div>
															<div class="row mt-3">
																<div class="col-12 d-flex justify-content-end">

																	<!-- Boton de like -->

																	<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 like" style="<?php echo $verificarLike2 ?>" id="like<?php echo "$respuesta[cod_com_vid]"; ?>" onClick="like('Like', <?php echo "'$respuesta[cod_com_vid]', '$funcionLike2', '$changeLike2', '1'"; ?>)">
																		<?php echo $respuesta["lik_com_vid"]; ?><i class="fas fa-thumbs-up ml-2 mx-md-2" id="likeIcono<?php echo $respuesta["cod_com_vid"]; ?>"></i><b class="d-none d-md-block">Me gusta</b>
																	</button>

																	<!-- Boton de Dislike -->

																	<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 dislike" style="<?php echo $verificarDislike2 ?>" id="dislike<?php echo "$respuesta[cod_com_vid]"; ?>" onClick="like('Dislike', <?php echo "'$respuesta[cod_com_vid]', '$funcionDislike2', '$changeDislike2', '1'"; ?>)">
																		<?php echo $respuesta["dis_com_vid"]; ?><i class="fas fa-thumbs-down ml-2 mx-md-2" id="dislikeIcono<?php echo $respuesta["cod_com_vid"]; ?>"></i><b class="d-none d-md-block">No me gusta</b>
																	</button>
																</div>
															</div>
														</div>
													</div>
											<?php
												}
											}
											?>
										</div>
									</div>
								</div>

							<?php
							}
							?>
						<?php

						}

						?>
					</div>

				</div>
			</div>
		</div>
	</div>

	<script>
		const botonComentario = document.getElementById("botonComentario");
		const botonComentarioAccion = document.getElementById("botonComentarioAccion");
		const cancelarRespuesta = document.getElementById("cancelarRespuesta");
		const tituloCaja = document.getElementById("tituloCaja");
		const tituloInput = document.getElementById("tituloInput");
		const titulo = document.getElementById("titulo");
		const tituloDiv = document.getElementById("tituloDiv");
		const comentario = document.getElementById("comentario");
		const codigoRespuesta = document.getElementById("codigoRespuesta");

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

<?php

}

?>