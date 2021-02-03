/*Recibimos la opcion y el rol seleccionados
 como parámetro*/
function guardarPermisoRol(opcion,rol)
{
 document.getElementById("alerta1").className="d-none"
 document.getElementById("alerta2").className="d-none"	

if(document.getElementById(opcion).checked==true)
	accion="agregar"
else
   accion="eliminar"	

/*Instanciamos un objeto AJAX*/
 var objAjax=new XMLHttpRequest;   
 /*Creamos un puente entre cliente y servidor*/
 objAjax.open("GET","../../../backend/controlador/permiso_rol.php?accion="+accion+"&opcion="+opcion+"&rol="+rol,true)
 objAjax.onreadystatechange=function(){

    /*Cuando tengamos respuesta correcta del servidor*/
 	if(objAjax.status==200 && objAjax.readyState==4)
 	{
        alert(objAjax.responseText)
 		var respuesta=parseInt(objAjax.responseText)
    
 		alert("Se proceso el permiso a "+respuesta+" usuarios")
 		if(respuesta>0 && accion=="agregar")
 			{
 			 document.getElementById("alerta1").className="d-block"
 			 document.getElementById("alerta2").className="d-none"
 			}else
 				if(respuesta>0 && accion=="eliminar")
 					{
  					 document.getElementById("alerta1").className="d-none"
 					 document.getElementById("alerta2").className="d-block"		
 					}

 	}

 }
 objAjax.send(null)

}

function seleccionar_todos()
{
	var formulario=document.getElementById("asignar_permisos_rol")

	for(i=0;i<formulario.length;i++)
		{
			alert(formulario[i].type)
		}
}