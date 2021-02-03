function cambio_estatus(cod_sol) {

	var estatus=document.getElementById('cod_sol_'+cod_sol).value
	var objAjax=new XMLHttpRequest

	objAjax.open("GET","../../../backend/controlador/solicitud_cambio_estatus.php?cod_sol="+cod_sol+"&est_sol="+estatus)

	objAjax.onreadystatechange=function() {
		
		if (objAjax.status==200 && objAjax.readyState==4){
			respuesta=objAjax.responseText

			if (respuesta==true) {

				alert("Se cambió el estatus correctamente")

				if (estatus=='P'){
					document.getElementById("cod_sol_"+cod_sol).style.background="yellow"
				    document.getElementById("cod_sol_"+cod_sol).style.color="black"
				}
				else
					if (estatus=='A'){
					document.getElementById("cod_sol_"+cod_sol).style.background="green"
				    document.getElementById("cod_sol_"+cod_sol).style.color="white"
					}
					else
						if (estatus=='C'){
							document.getElementById("cod_sol_"+cod_sol).style.background="red"
				    		document.getElementById("cod_sol_"+cod_sol).style.color="white"
						}
			}else{
				alert('Error al cambiar el estatus')
			}
		}

	}
	objAjax.send(null)
}