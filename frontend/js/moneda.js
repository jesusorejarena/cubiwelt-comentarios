function precio_curso()
{ 
   var mo=document.getElementById("fky_moneda")
   var moneda=mo.options[mo.selectedIndex].text;

 	var inscripcion=document.getElementById("fky_inscripcion").value
 	//alert (moneda)
 	if(moneda=="VEB")
 	{	
	 	var objAjax=new XMLHttpRequest()
		objAjax.open("GET","../../../backend/controlador/curso_remoto.php?accion=buscar_datos_curso&fky_inscripcion="+inscripcion)
		objAjax.onreadystatechange=function()
		{
	       if(objAjax.status==200 && objAjax.readyState==4)
	       	{   	
	       		
	       	  curso=objAjax.responseText.split("#");
	       	  //alert(curso)
	       	  precio1=curso[3]
	       	  var i=1;
	       	  var a="<option onclick='agregar_monto("+precio1+")'>Agregar Monto</option>";
			    	while(precio1>0){ 
			    		i++;
			    		var a = a+"<option value='"+precio1+"'>"+precio1+"</option>"
	       	  			//document.getElementById("mon_ing").options[i].value=precio1
			    		precio1=precio1-10000;
			    	}
	       	  			document.getElementById("mon_ing").innerHTML="<option value=''>Seleccione...</option><option value='1'>Apartar cupo a familiares y amigos</option>"+a

	       	}else
	          {
	          //document.getElementById("barra").style.width=25*objAjax.readyState+"%"
	          //document.getElementById("porcentaje").innerHTML=document.getElementById("barra").style.width        
	          }
		}
		objAjax.send(null)
	}
 	if(moneda=="COP")
 	{	
	 	var objAjax=new XMLHttpRequest()
		objAjax.open("GET","../../../backend/controlador/curso_remoto.php?accion=buscar_datos_curso&fky_inscripcion="+inscripcion)
		objAjax.onreadystatechange=function()
		{
	       if(objAjax.status==200 && objAjax.readyState==4)
	       	{   	
	       		
	       	  curso=objAjax.responseText.split("#");
	       	  //alert(curso)
	 		  var objAjax1=new XMLHttpRequest()
	       	  objAjax1.open("GET","../../../backend/controlador/moneda.php?accion=buscar_cambio_divisa&sig_pai="+moneda)
			  objAjax1.onreadystatechange=function()
				{
					if(objAjax1.status==200 && objAjax1.readyState==4)
	       			{
		       	  		precio1=curso[3]
		       	  		var precio="";
	       	  			tasa_cambio=objAjax1.responseText.split("#");
	       	  			//alert("Tasa de cambio = "+tasa_cambio[0]+" y la operacion = "+tasa_cambio[1]+"...")
		       	  		if(tasa_cambio[1]=="/"){
		       	  			var precio= precio1/tasa_cambio[0];
		       	  		}
		       	  		if(tasa_cambio[1]=="*"){
		       	  			var precio= precio1*tasa_cambio[0];
		       	  		}
		       	  		var i=1;
	       	  			var a="<option onclick='agregar_monto("+precio+")'>Agregar Monto</option>";
	       	  			//alert(precio+"...")
	       	  			var precio1=precio/1000;
	       	  			//alert("Precio sin redondeo = "+precio1)
	       	  			var precio_final=Math.round(precio1)*1000;
	       	  			//alert("Precio con Redondeo = "+precio_final)
				    	while(precio_final>0){ 
			    			i++;
			    			var a = a+"<option value='"+precio_final+"'>"+precio_final+"</option>"
				    		precio_final=precio_final-1000;
				    	}
	       	  			document.getElementById("mon_ing").innerHTML="<option value=''>Seleccione...</option><option value='1'>Apartar cupo a familiares y amigos</option>"+a

	       			} 

				}

			  objAjax1.send(null)
	       	  //document.getElementById("est_ins").value=curso[0]
	          //document.getElementById("zona_barra").className =document.getElementById("zona_barra").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
	          //document.getElementById("boton").disabled=false
	       	}else
	          {
	          //document.getElementById("barra").style.width=25*objAjax.readyState+"%"
	          //document.getElementById("porcentaje").innerHTML=document.getElementById("barra").style.width        
	          }
		}
		objAjax.send(null)
	}
 	if(moneda=="USD")
 	{	
	 	var objAjax=new XMLHttpRequest()
		objAjax.open("GET","../../../backend/controlador/curso_remoto.php?accion=buscar_datos_curso&fky_inscripcion="+inscripcion)
		objAjax.onreadystatechange=function()
		{
	       if(objAjax.status==200 && objAjax.readyState==4)
	       	{   	
	       		
	       	  curso=objAjax.responseText.split("#");
	       	  //alert(curso)
	 		  var objAjax1=new XMLHttpRequest()
	       	  objAjax1.open("GET","../../../backend/controlador/moneda.php?accion=buscar_cambio_divisa&sig_pai="+moneda)
			  objAjax1.onreadystatechange=function()
				{
					if(objAjax1.status==200 && objAjax1.readyState==4)
	       			{
		       	  		precio1=curso[3]
		       	  		var precio="";
	       	  			tasa_cambio=objAjax1.responseText.split("#");
	       	  			//alert("Tasa de cambio = "+tasa_cambio[0]+" y la operacion = "+tasa_cambio[1]+"...")
		       	  		if(tasa_cambio[1]=="/"){
		       	  			var precio= precio1/tasa_cambio[0];
		       	  		}
		       	  		if(tasa_cambio[1]=="*"){
		       	  			var precio= precio1*tasa_cambio[0];
		       	  		}
		       	  		var i=1;
	       	  			var a="<option onclick='agregar_monto("+precio+")'>Agregar Monto</option>";
	       	  			//alert(precio+"...")
	       	  			//var precio1=precio/1000;
	       	  			//alert("Precio sin redondeo = "+precio1)
	       	  			var precio_final=Math.round(precio);
	       	  			//alert("Precio con Redondeo = "+precio_final)
				    	while(precio_final>0){ 
			    			i++;
			    			var a = a+"<option value='"+precio_final+"'>"+precio_final+"</option>"
				    		precio_final=precio_final-1;
				    	}
	       	  			document.getElementById("mon_ing").innerHTML="<option value=''>Seleccione...</option><option value='1'>Apartar cupo a familiares y amigos</option>"+a

	       			} 

				}

			  objAjax1.send(null)
	       	  //document.getElementById("est_ins").value=curso[0]
	          //document.getElementById("zona_barra").className =document.getElementById("zona_barra").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
	          //document.getElementById("boton").disabled=false
	       	}else
	          {
	          //document.getElementById("barra").style.width=25*objAjax.readyState+"%"
	          //document.getElementById("porcentaje").innerHTML=document.getElementById("barra").style.width        
	          }
		}
		objAjax.send(null)
	}
}


function validar_curso()
{
   	var inscripcion=document.getElementById("fky_inscripcion").value
 	if(inscripcion=="")
 	{	
 		alert("Debe seleccionar un curso previamente")
 	}

}


function paso3()
{
   	var inscripcion=document.getElementById("fky_curso").value
 	if(inscripcion=="")
 	{	
 		alert("Debe llenar los datos obligatorios")
 	}else
 		{
 			document.getElementById("paso3").submit()
 		}

}


function paso4()
{
	
   	var inscripcion=document.getElementById("fky_medio_publicidad").value
 	if(inscripcion=="")
 	{	
 		alert("Debe llenar los datos obligatorios")
 	}else
 		{
 			document.getElementById("paso4").submit()
 		}

}


function seleccionar_todos()
{
	var sel=document.getElementById("todos").checked
    var tam=document.getElementsByTagName("input").length
    for(i=0;i<tam;i++)
    {
    	if(document.getElementsByTagName("input")[i].type=="checkbox")
    	{
    		if(sel==true)
    		{
    			document.getElementsByTagName("input")[i].checked=true
    		}else
    		{
    			document.getElementsByTagName("input")[i].checked=false
    		}
    	}	
    }
}


function subir_lista_primer_dia()
{
	var url_ini_cur=document.getElementById("url_ini_cur").value

 	if(url_ini_cur=="")
 	{	
 		alert("Debe Seleccionar un Archivo a Subir")
 		return
 	}else{
 		document.getElementById("accion").value="subir_lista_primer_dia"
 		document.getElementById("formulario").submit()
 	}

}


function subir_lista_seis_firmas()
{
	var url_fin_cur=document.getElementById("url_fin_cur").value

 	if(url_fin_cur=="")
 	{	
 		alert("Debe Seleccionar un Archivo a Subir")
 		return
 	}else{
 		document.getElementById("accion").value="subir_lista_seis_firmas"
 		document.getElementById("formulario").submit()
 	}

}


function subir_factura_curso()
{
	var url_fac_cur=document.getElementById("url_fac_cur").value

 	if(url_fac_cur=="")
 	{	
 		alert("Debe Seleccionar un Archivo a Subir")
 		return
 	}else{
 		document.getElementById("accion").value="subir_factura_curso"
 		document.getElementById("formulario").submit()
 	}

}

function agregar_monto(precio_tope)
{
	var monto=prompt("Por favor ingrese el monto, Si el numero tiene decimales use el simbolo punto .")
	
	do
	{
		if(isNaN(monto))
		{
			alert("El numero no es valido. Si el numero tiene decimales use el simbolo punto .")
			var monto=prompt("Por favor ingrese el monto, Si el numero tiene decimales use el simbolo punto .")
			
		}else
		if(parseFloat(monto)>parseFloat(precio_tope))
		{
			alert("El monto no puede superar el precio del curso.")
			var monto=prompt("Por favor ingrese el monto, Si el numero tiene decimales use el simbolo punto .")
		}

	}while(isNaN(monto))

	document.getElementById("mon_ing")[0].innerHTML=monto;
	document.getElementById("mon_ing")[0].value=monto;
	document.getElementById("mon_ing").selectedIndex=0
}