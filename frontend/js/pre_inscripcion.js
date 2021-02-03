function pre_inscripcion()
{
	document.location.href="frontend/vista/inscripcion/modalidad_inscripcion.php"
}

function registrar_pago()
{
	document.location.href="frontend/vista/ingreso/modalidad_ingreso.php"
}

function inscripcion()
{
	var lectura=document.getElementById("lectura").checked

	if(lectura==true)
		{document.location.href="paso1_ingresar_cedula.php"}
		else
			{ alert("Debes aceptar los terminos y condiciones")
			  return false
		    }
}


function retiro()
{
	document.location.href="frontend/vista/retiro/retiro_ingresar_cedula.php"
}
