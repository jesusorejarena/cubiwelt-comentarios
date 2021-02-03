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
	FOREIGN KEY (fky_usu_onl) REFERENCES usuario_online(cod_usu_onl) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (fky_video) REFERENCES video(cod_vid) ON DELETE CASCADE ON UPDATE CASCADE
)ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Comentarios de los videos';

DROP TABLE IF EXISTS like_comentario;
CREATE TABLE `like_comentario` (
  `cod_lik_vid` INT(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del like del comentario',
	`tip_lik_vid` ENUM('L','D') NOT NULL COMMENT 'Like o Dislike',
  `fky_usu_onl` INT(11) NOT NULL COMMENT 'Código del usuario',
  `fky_com_vid` INT(11) NOT NULL COMMENT 'Código del comentario',
	PRIMARY KEY (cod_lik_vid),
	INDEX (fky_usu_onl),
	INDEX (fky_com_vid),
	FOREIGN KEY (fky_usu_onl) REFERENCES usuario_online(cod_usu_onl) ON DELETE CASCADE ON UPDATE CASCADE,
	FOREIGN KEY (fky_com_vid) REFERENCES comentario_video(cod_com_vid) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;