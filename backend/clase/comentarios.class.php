<?php

/*
DROP TABLE IF EXISTS comentario_video;
CREATE TABLE `comentario_video` (
	`cod_com_vid` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del comentario',
	`fky_usu_onl` INT(11) NOT NULL COMMENT 'Código del usuario',
	`fky_video` INT(11) NOT NULL COMMENT 'Código del video',
	`tit_com_vid` TEXT NULL COMMENT 'Titulo del Comentario',
	`com_com_vid` TEXT NOT NULL COMMENT 'Comentario',
	`lik_com_vid` INT(11) NOT NULL COMMENT 'Me gusta',
	`dis_com_vid` INT(11) NOT NULL COMMENT 'No me gusta',
	`res_com_vid` INT(11) NULL COMMENT 'Respuesta del comentario, recursividad',
	`ver_com_vid` ENUM('N','V') NOT NULL COMMENT 'Verificación del comentario',
	`est_com_vid` ENUM('A','I') NOT NULL COMMENT 'Estatus del comentario',
	`reg_com_vid` DATETIME DEFAULT 	current_timestamp COMMENT 'Registro del comentario',
	PRIMARY KEY (cod_com_vid),
	INDEX (fky_usu_onl),
	INDEX (fky_video),
	FOREIGN KEY (fky_usu_onl) REFERENCES usuario_online(cod_usu_onl) ON DELETE CASCADE ON UPDATE CASCADE
	FOREIGN KEY (fky_video) REFERENCES video(cod_vid) ON DELETE CASCADE ON UPDATE CASCADE,
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Comentarios de los videos';
*/

require_once("utilidad.class.php");

class comentarios extends utilidad
{

	public $cod_com_vid;
	public $fky_usu_onl;
	public $fky_video;
	public $com_com_vid;
	public $lik_com_vid;
	public $dis_com_vid;
	public $res_com_vid;
	public $ver_com_vid;
	public $est_com_vid;
	public $reg_com_vid;

	//==============================================================================
	public function agregarComentario()
	{
		$fecha_registro = date("y-m-d h:i:s");

		$this->que_bda = "INSERT INTO comentario_video 
		(fky_usu_onl, fky_video, tit_com_vid, com_com_vid, lik_com_vid, dis_com_vid, res_com_vid, ver_com_vid, est_com_vid, reg_com_vid)
		VALUES 
		('$this->fky_usu_onl', '$this->fky_video', '$this->tit_com_vid', '$this->com_com_vid', '0', '0', '0', 
		'N', 'A', '$fecha_registro');";
		// echo json_encode($this->que_bda);
		return $this->run();
	} //Fin Agregar Comentario
	//==============================================================================

	public function agregarRespuesta()
	{
		$fecha_registro = date("y-m-d h:i:s");

		$this->que_bda = "INSERT INTO comentario_video 
		(fky_usu_onl, fky_video, com_com_vid, lik_com_vid, dis_com_vid, res_com_vid, ver_com_vid, est_com_vid, reg_com_vid)
		VALUES 
		('$this->fky_usu_onl', '$this->fky_video', '$this->com_com_vid', '0', '0', '$this->res_com_vid', 
		'N', 'A', '$fecha_registro');";
		return $this->run();
	} //Fin Agregar Respuesta
	//==============================================================================

	public function sumarLike()
	{
		$this->que_bda = "UPDATE comentario_video SET 
												lik_com_vid=lik_com_vid+1
											WHERE 
												cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
	} //Fin sumar Like
	//==============================================================================

	public function restarLike()
	{
		$this->que_bda = "UPDATE comentario_video SET 
												lik_com_vid=lik_com_vid-1
											WHERE 
												cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
	} //Fin restar Like
	//==============================================================================

	public function sumarDislike()
	{
		$this->que_bda = "UPDATE comentario_video SET 
												dis_com_vid=dis_com_vid+1
											WHERE 
												cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
	} //Fin sumar Dislike
	//==============================================================================

	public function restarDislike()
	{
		$this->que_bda = "UPDATE comentario_video SET 
												dis_com_vid=dis_com_vid-1
											WHERE 
												cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
	} //Fin restar Dislike
	//==============================================================================

	public function listarComentario()
	{
		$this->que_bda = "SELECT * FROM comentario_video WHERE fky_video = '$this->fky_video' AND res_com_vid = 0 AND est_com_vid = 'A' ORDER BY cod_com_vid DESC;";
		return $this->run();
	} //Fin Listar Comentario
	//==============================================================================

	public function listarRespuestas()
	{
		$this->que_bda = "SELECT * FROM comentario_video WHERE fky_video = '$this->fky_video' AND res_com_vid = $this->res_com_vid AND est_com_vid = 'A';";
		return $this->run();
	} //Fin Listar Responder
	//==============================================================================

	public function borrarComentarioORespuesta()
	{
		$this->que_bda = "DELETE FROM comentario_video WHERE cod_com_vid = '$this->cod_com_vid';";
		return $this->run();
		// echo json_encode($this->que_bda);
	} //Fin Borrar Comentario
	//==============================================================================

	public function borrarRespuestasComentarios()
	{
		$this->que_bda = "DELETE FROM comentario_video WHERE res_com_vid = '$this->cod_com_vid';";
		return $this->run();
		// echo json_encode($this->que_bda);
	} //Fin Borrar Comentario
	//==============================================================================

}//Fin de la Clase