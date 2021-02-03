CREATE TABLE `usuario_online` (
  `cod_usu_onl` int(11) NOT NULL,
  `nom_usu_onl` varchar(45) DEFAULT NULL,
  `ape_usu_onl` varchar(45) DEFAULT NULL,
  `ema_usu_onl` varchar(60) DEFAULT NULL,
  `cla_usu_onl` varchar(45) DEFAULT NULL,
  `reg_usu_onl` datetime DEFAULT NULL,
  `est_usu_onl` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `usuario_online`
  ADD PRIMARY KEY (`cod_usu_onl`);

ALTER TABLE `usuario_online`
  MODIFY `cod_usu_onl` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

