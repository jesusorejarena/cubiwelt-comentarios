CREATE TABLE `video` (
  `cod_vid` int(11) NOT NULL COMMENT 'Código del Video',
  `nom_vid` varchar(80) NOT NULL COMMENT 'Nombre o Título del Video',
  `pos_vid` int(11) NOT NULL COMMENT 'Posición del Video. Ejemplo 3/11',
  `fky_video_anterior` int(11) DEFAULT NULL,
  `fky_video_siguiente` int(11) DEFAULT NULL,
  `tie_vid` time NOT NULL COMMENT 'Tiempo del Video en Segundos',
  `cal_vid` char(1) NOT NULL COMMENT 'Indica si el video es calificable. Valores S o N',
  `des_vid` text NOT NULL COMMENT 'Descripción Publicitaria del Video',
  `blo_vid` text NOT NULL COMMENT 'Información del Blog',
  `glo_vid` text NOT NULL COMMENT 'Glosario del Video',
  `ata_vid` text NOT NULL COMMENT 'Atajos del teclado de cada video',
  `fky_tipo_curso` int(11) NOT NULL COMMENT 'Curso al que pertenece el video',
  `fky_video_modulo` int(11) DEFAULT 1 COMMENT 'Módulo al que pertenece el video',
  `por_vid` text DEFAULT NULL,
  `url_vid` text DEFAULT NULL COMMENT 'URL del video',
  `arc_vid` text NOT NULL COMMENT 'Archivos a Descargar para el Video',
  `est_vid` char(1) NOT NULL COMMENT 'Estatus del Video. A: Activo I: Inactivo'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Tabla que guarda los videos de los cursos';


ALTER TABLE `video`
  ADD PRIMARY KEY (`cod_vid`),

ALTER TABLE `video`
  MODIFY `cod_vid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del Video';
COMMIT;
