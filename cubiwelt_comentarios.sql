-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-01-2021 a las 17:37:19
-- Versión del servidor: 5.7.23
-- Versión de PHP: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `cubiwelt_comentarios`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentario_video`
--

DROP TABLE IF EXISTS `comentario_video`;
CREATE TABLE IF NOT EXISTS `comentario_video` (
  `cod_com_vid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del comentario',
  `fky_usu_onl` int(11) NOT NULL COMMENT 'Código del usuario',
  `fky_video` int(11) NOT NULL COMMENT 'Código del video',
  `tit_com_vid` text COMMENT 'Titulo del Comentario',
  `com_com_vid` text NOT NULL COMMENT 'Comentario',
  `lik_com_vid` int(11) NOT NULL COMMENT 'Me gusta',
  `dis_com_vid` int(11) NOT NULL COMMENT 'No me gusta',
  `res_com_vid` int(11) DEFAULT NULL COMMENT 'Respuesta del comentario, recursividad',
  `ver_com_vid` enum('N','V') NOT NULL COMMENT 'Verificación del comentario',
  `est_com_vid` enum('A','I') NOT NULL COMMENT 'Estatus del comentario',
  `reg_com_vid` datetime DEFAULT CURRENT_TIMESTAMP COMMENT 'Registro del comentario',
  PRIMARY KEY (`cod_com_vid`),
  KEY `fky_usu_onl` (`fky_usu_onl`),
  KEY `fky_video` (`fky_video`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 COMMENT='Comentarios de los videos';

--
-- Volcado de datos para la tabla `comentario_video`
--

INSERT INTO `comentario_video` (`cod_com_vid`, `fky_usu_onl`, `fky_video`, `tit_com_vid`, `com_com_vid`, `lik_com_vid`, `dis_com_vid`, `res_com_vid`, `ver_com_vid`, `est_com_vid`, `reg_com_vid`) VALUES
(15, 1, 1, 'hola', 'hola', 1, 0, 0, 'N', 'A', '2021-01-21 01:16:24'),
(17, 1, 1, NULL, 'hola', 0, 0, 15, 'N', 'A', '2021-01-21 01:18:12');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `like_comentario`
--

DROP TABLE IF EXISTS `like_comentario`;
CREATE TABLE IF NOT EXISTS `like_comentario` (
  `cod_lik_vid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del like del comentario',
  `tip_lik_vid` enum('L','D') NOT NULL COMMENT 'Like o Dislike',
  `fky_usu_onl` int(11) NOT NULL COMMENT 'Código del usuario',
  `fky_com_vid` int(11) NOT NULL COMMENT 'Código del comentario',
  PRIMARY KEY (`cod_lik_vid`),
  KEY `fky_usu_onl` (`fky_usu_onl`),
  KEY `fky_com_vid` (`fky_com_vid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `like_comentario`
--

INSERT INTO `like_comentario` (`cod_lik_vid`, `tip_lik_vid`, `fky_usu_onl`, `fky_com_vid`) VALUES
(2, 'L', 1, 15);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tipo_curso`
--

DROP TABLE IF EXISTS `tipo_curso`;
CREATE TABLE IF NOT EXISTS `tipo_curso` (
  `cod_tip_cur` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del Tipo de Curso. Autoincremental',
  `nom_tip_cur` varchar(50) NOT NULL COMMENT 'Nombre del tipo de curso',
  `fky_usu_onl` int(11) NOT NULL COMMENT 'Código del profesor',
  `hor_tip_cur` int(11) NOT NULL COMMENT 'Numero de Horas Académicas',
  `can_tip_cur` int(11) NOT NULL COMMENT 'Cantidad de clases del curso',
  `cer_tip_cur` varchar(50) NOT NULL COMMENT 'Nombre que aparecerá en el certificado',
  `des_tip_cur` text NOT NULL COMMENT 'Sirve para aclarar de qué se trata el curso.',
  `dir_tip_cur` varchar(80) NOT NULL COMMENT 'Curso Dirigido a?',
  `cla_tip_cur` int(11) NOT NULL COMMENT 'Cantidad de Clases',
  `obj_tip_cur` varchar(255) NOT NULL COMMENT 'Objetivo del Curso',
  `min_tip_cur` int(11) NOT NULL COMMENT 'Número mínimo de cupos',
  `max_tip_cur` int(11) NOT NULL COMMENT 'Numero maximo de cupos',
  `ava_tip_cur` char(1) NOT NULL COMMENT 'Valores: A: Certificado Avalado por el Ministerio de Educación N: Certificado No Avalado por el Ministerio de Educación',
  `mat_tip_cur` text COMMENT 'URL del material del curso comprimido en un .zip',
  `con_tip_cur` text COMMENT 'URL del contenido del curso',
  `ico_tip_cur` text NOT NULL COMMENT 'Icono del Curso',
  `car_tip_cur` text NOT NULL COMMENT 'Foto de la Card',
  `sli_tip_cur` text NOT NULL COMMENT 'Foto del Slider',
  `cao_tip_cur` text NOT NULL COMMENT 'URL para card de cursos online',
  `arc_tip_cur` text COMMENT 'URL del material completo del curso online',
  `vid_tip_cur` text COMMENT 'Video promocional del curso online',
  `fky_area` int(11) NOT NULL COMMENT 'Area a la que pertenece el curso: - Diseño Gráfico - Informática - Arquitectura - Comunicación Social',
  `fky_empresa` int(11) NOT NULL COMMENT 'Empresa que organiza el curso',
  `was_tip_cur` text COMMENT 'URL del grupo de Whatsapp del Curso',
  `est_tip_cur` char(1) NOT NULL COMMENT 'Valores: A: Activo I: Inactivo',
  PRIMARY KEY (`cod_tip_cur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='Guarda los datos generales de los diferentes cursos que impa';

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario_online`
--

DROP TABLE IF EXISTS `usuario_online`;
CREATE TABLE IF NOT EXISTS `usuario_online` (
  `cod_usu_onl` int(11) NOT NULL AUTO_INCREMENT,
  `nom_usu_onl` varchar(45) DEFAULT NULL,
  `ape_usu_onl` varchar(45) DEFAULT NULL,
  `ema_usu_onl` varchar(60) DEFAULT NULL,
  `cla_usu_onl` varchar(45) DEFAULT NULL,
  `reg_usu_onl` datetime DEFAULT NULL,
  `est_usu_onl` char(1) DEFAULT NULL,
  PRIMARY KEY (`cod_usu_onl`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario_online`
--

INSERT INTO `usuario_online` (`cod_usu_onl`, `nom_usu_onl`, `ape_usu_onl`, `ema_usu_onl`, `cla_usu_onl`, `reg_usu_onl`, `est_usu_onl`) VALUES
(1, 'Jesus', 'Orejarena', 'jesusorejarena@gmail.com', 'Jesus1712.*', '2021-01-01 00:00:00', 'A');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `video`
--

DROP TABLE IF EXISTS `video`;
CREATE TABLE IF NOT EXISTS `video` (
  `cod_vid` int(11) NOT NULL AUTO_INCREMENT COMMENT 'Código del Video',
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
  `fky_video_modulo` int(11) DEFAULT '1' COMMENT 'Módulo al que pertenece el video',
  `por_vid` text,
  `url_vid` text COMMENT 'URL del video',
  `arc_vid` text NOT NULL COMMENT 'Archivos a Descargar para el Video',
  `est_vid` char(1) NOT NULL COMMENT 'Estatus del Video. A: Activo I: Inactivo',
  PRIMARY KEY (`cod_vid`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COMMENT='Tabla que guarda los videos de los cursos';

--
-- Volcado de datos para la tabla `video`
--

INSERT INTO `video` (`cod_vid`, `nom_vid`, `pos_vid`, `fky_video_anterior`, `fky_video_siguiente`, `tie_vid`, `cal_vid`, `des_vid`, `blo_vid`, `glo_vid`, `ata_vid`, `fky_tipo_curso`, `fky_video_modulo`, `por_vid`, `url_vid`, `arc_vid`, `est_vid`) VALUES
(1, 'Emprendimiento', 1, NULL, NULL, '05:00:00', 'A', 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 1, 1, 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'loremmmmmmmmmmmmmmmmmmmmmmloremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'loremmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm', 'A');

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentario_video`
--
ALTER TABLE `comentario_video`
  ADD CONSTRAINT `comentario_video_ibfk_1` FOREIGN KEY (`fky_usu_onl`) REFERENCES `usuario_online` (`cod_usu_onl`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `comentario_video_ibfk_2` FOREIGN KEY (`fky_video`) REFERENCES `video` (`cod_vid`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `like_comentario`
--
ALTER TABLE `like_comentario`
  ADD CONSTRAINT `like_comentario_ibfk_1` FOREIGN KEY (`fky_usu_onl`) REFERENCES `usuario_online` (`cod_usu_onl`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `like_comentario_ibfk_2` FOREIGN KEY (`fky_com_vid`) REFERENCES `comentario_video` (`cod_com_vid`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
