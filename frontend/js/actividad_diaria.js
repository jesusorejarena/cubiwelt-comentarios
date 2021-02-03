function tarea_completa(actividad) {

	document.getElementById(actividad).checked==true

	var objAjax=new XMLHttpRequest;
	objAjax.open("GET","../../../backend/controlador/actividad_diaria.php?accion=tarea_completa&cod_act="+actividad)
	objAjax.onreadystatechange=function(){

		if (objAjax.status==200 && objAjax.readyState==4) {

			respuesta=objAjax.responseText

			

 			if (respuesta==1) {
 			 	alert("Tarea Completadaa")
 			 	document.getElementById("calendario").submit()
 			 	//location.reload(forceGet=true)

 			}
		}
	}
	objAjax.send(null)
}

function calendario_maestro() {

//Tomar el valor del Checkbox

	if(document.getElementById('calendario_super1').checked==true){
		respuesta1='M'
	}else{
		respuesta1=""
	}

	if(document.getElementById('calendario_super2').checked==true){
		respuesta2='P'
	}else{
		respuesta2="";
	}

//Mostrar Calendario


	if (respuesta1=='M') {
		document.getElementById("mi_calendario").className =document.getElementById("mi_calendario").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
	}else{
		document.getElementById("mi_calendario").className =document.getElementById("mi_calendario").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
	}

	if (respuesta2=='P') {
		document.getElementById("calendario_personal").className =document.getElementById("calendario_personal").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
	}else{
		document.getElementById("calendario_personal").className =document.getElementById("calendario_personal").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
	}
}