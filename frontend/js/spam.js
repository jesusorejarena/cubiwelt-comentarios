function CambiarEstatus(tipo, estatus) {

	var objAjax=new XMLHttpRequest;
	objAjax.open("GET","../../../backend/controlador/spam.php?tip_spa="+tipo+"&est_spa="+estatus,true)
	objAjax.onreadystatechange=function() {
		
		if (objAjax.status==200 && objAjax.readyState==4) {

			respuesta=objAjax.responseText

			if (respuesta==true) {

				if (estatus=='P') {

					alert("Envio de Correo Programado")
				}else
				if (estatus=='A'){

					alert("Envio de Correo Cancelado")
				}

			}else{
				alert("Error, no se pudo cancelar/reniciar")
			}
		}
	}
	objAjax.send(null)
}