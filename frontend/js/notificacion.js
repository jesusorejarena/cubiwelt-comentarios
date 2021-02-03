function preparar_notificacion()
{
	var tipo_notificacion=document.getElementById('tipo_notificacion').value
	var cod_cur=document.getElementById('cod_cur').value
	location.href="../notificacion/preparar_notificacion.php?cod_tip_not="+tipo_notificacion+"&fky_curso="+cod_cur
}