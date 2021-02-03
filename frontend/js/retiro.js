function retiro_formulario()
{
	
	if(document.getElementById("ide_alu").value!="")
	    document.getElementById("ingresar_cedula").submit()
	     else
	     	alert("Debe ingresar el numero de cedula")
}

function conciliar_pago(cod_ret)
{

	var estatus=document.getElementById('cod_ret_'+cod_ret).value
	var objAjax=new XMLHttpRequest()
	objAjax.open("GET","../../../backend/controlador/retiro_conciliacion.php?cod_ret="+cod_ret+"&est_ret="+estatus,true)
	objAjax.onreadystatechange=function() {
		
		if(objAjax.status==200 && objAjax.readyState==4){
			respuesta=objAjax.responseText

			if (respuesta==true){

				alert("Reembolso Procesado Correctamente")

				if (estatus=='P'){
					document.getElementById("cod_ret_"+cod_ret).style.background="yellow"
				    document.getElementById("cod_ret_"+cod_ret).style.color="black"
				}
				else
					if (estatus=='R'){
					document.getElementById("cod_ret_"+cod_ret).style.background="green"
				    document.getElementById("cod_ret_"+cod_ret).style.color="white"

				    if(confirm("Deseas avisar al alumno email?"))
					{
						var objAjax2=new XMLHttpRequest()
						objAjax2.open("GET","../../vista/retiro/envio_correo.php?cod_ret="+cod_ret,true)
						objAjax2.onreadystatechange=function() {
							
							if (objAjax2.status==200 && objAjax2.readyState==4) {

								respuesta2=objAjax2.responseText

								if (respuesta2==true) {

									alert("El correo se envió correctamente")

								}else{
									alert("EL correo no se envió")
								}

							}

						}
						objAjax2.send(null)
					}
							
					}
					else
						if (estatus=='N'){
							document.getElementById("cod_ret_"+cod_ret).style.background="red"
				    		document.getElementById("cod_ret_"+cod_ret).style.color="white"
						}

			}else{
				alert('Error al Procesar el Reembolso')
			}
		}

		

	}
	objAjax.send(null)
}
