<div id="comentario25" class="row my-4 py-3 bg-light" style="border-radius: 10px">
	<div class="col-12 mb-3 d-flex justify-content-between">
		<h4>hola bebe</h4>
		<i class="fas fa-trash-alt px-2 text-danger" style="cursor: pointer" onclick="borrarComentario(25)"></i>
	</div>
	<div class="col-12 px-4 px-md-5">
		<div class="row mb-3">
			<div class="col-2 col-md-1 px-0 d-flex justify-content-center align-items-start">
				<img src="https://aws.glamour.es/prod/designs/v1/assets/620x620/622608.jpeg" class="img-fluid rounded-circle shadow-sm" alt="" width="50px">
			</div>
			<div class="col-10 col-md-11 pl-2">
				<h5>1</h5>
				<small>2021-02-02 10:44:24</small>
			</div>
		</div>
		<div class="row px-md-5 border-bottom my-2">
			<div class="col-12">
				<p class="text-justify">
					como estas? </p>
			</div>
		</div>
		<div class="row mt-3">
			<div class="col-12 d-flex justify-content-end">
				<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 like" style="background-color: white; border-color: #480080; color: #480080;" id="like25" onclick="like('Like', '25', 'agregarLike', '', '1')">
					0<i class="fas fa-thumbs-up ml-2 mx-md-2" id="likeIcono25"></i><b class="d-none d-md-block">Me gusta</b>
				</button>
				<button class="btn d-flex justify-content-center align-items-center btn-sm mx-2 mx-md-3 dislike" style="background-color: white; border-color: #480080; color: #480080;" id="dislike25" onclick="like('Dislike', '25', 'agregarDislike', '', '1')">
					0<i class="fas fa-thumbs-down ml-2 mx-md-2" id="dislikeIcono25"></i><b class="d-none d-md-block">No me gusta</b>
				</button>
				<button class="btn btn-primary d-flex justify-content-center align-items-center btn-sm ml-2 ml-md-3" style="background-color: #480080; border-color: #480080" onclick="responder(1, 25)">
					<i class="fas fa-reply mr-md-2"></i><b class="d-none d-md-block">Responder</b>
				</button>
			</div>
		</div>

		<div class="collapse my-4 px-3" id="comentarioRespuesta25">
		</div>
	</div>
</div>