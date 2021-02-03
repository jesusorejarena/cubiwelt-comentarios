function ver_saldo_cuenta_egreso()
{

    var cuenta=document.getElementById("fky_cuenta_egreso").value
    if(cuenta!="")
    {

			//alert("cuenta"+cuenta);
			var objAjax=new XMLHttpRequest;   
		 /*Creamos un puente entre cliente y servidor*/
		     accion="ver_saldo"
			 objAjax.open("GET","../../../backend/controlador/saldo_cuenta.php?accion="+accion+"&fky_cuenta="+cuenta)
			 objAjax.onreadystatechange=function(){
			    /*Cuando tengamos respuesta correcta del servidor*/
			 	if(objAjax.status==200 && objAjax.readyState==4)
			 	{
			 		var respuesta=objAjax.responseText
			 		//alert(respuesta)
			 		if(respuesta!=0)
			 		{
		 	
		 				document.getElementById("zona_saldo_cuenta_egreso").innerHTML="<input type='text' class='form-control' id='zona_saldo_cuenta_egreso_input' readonly value='"+respuesta+"'>"
		 	
			 		}else{
	                    alert("Error al Buscar el Saldo de la Cuenta elegida.")
	                    document.getElementById("zona_saldo_cuenta_egreso").innerHTML=objAjax.responseText=" Seleccione Cuenta Bancaria primero..."
	                }
			 	}
			 }
			 objAjax.send(null)	
	}else{
		var objAjax=new XMLHttpRequest;   
		 /*Creamos un puente entre cliente y servidor*/
		     accion="ver_saldo"
			 objAjax.open("GET","../../../backend/controlador/saldo_cuenta.php?accion="+accion+"&fky_cuenta="+cuenta)
			 objAjax.onreadystatechange=function(){

			 	document.getElementById("zona_saldo_cuenta_egreso").innerHTML=objAjax.responseText=" Seleccione Cuenta Bancaria primero..."
			 
			 }
			 objAjax.send(null)	
	}
  
}

function ver_saldo_cuenta_ingreso()
{

    var cuenta=document.getElementById("fky_cuenta_ingreso").value
    if(cuenta!="")
    {

			//alert("cuentaaaaaa"+cuenta);
			var objAjax=new XMLHttpRequest;   
		 /*Creamos un puente entre cliente y servidor*/
		     accion="ver_saldo"
			 objAjax.open("GET","../../../backend/controlador/saldo_cuenta.php?accion="+accion+"&fky_cuenta="+cuenta,true)
			 objAjax.onreadystatechange=function(){
			    /*Cuando tengamos respuesta correcta del servidor*/
			 	if(objAjax.status==200 && objAjax.readyState==4)
			 	{
			 		var respuesta=objAjax.responseText
			 		//alert(respuesta)
			 		if(respuesta!=0 && !isNaN(respuesta))
			 		{
		 				document.getElementById("zona_saldo_cuenta_ingreso").innerHTML="<input type='text' class='form-control' readonly value='"+parseFloat(objAjax.responseText).toFixed(2)+"'>"
			 		}else{
	                    alert("Error al Buscar el Saldo de la Cuenta elegida.")
	                    document.getElementById("zona_saldo_cuenta_ingreso").innerHTML="Seleccione Cuenta Bancaria primero..."
	                }
			 	}
			 }
			 objAjax.send(null)	
	}
  
}
