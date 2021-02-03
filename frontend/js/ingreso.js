function conciliar_pago(cod_ing)
{
	var estatus=document.getElementById("cod_ing_"+cod_ing).value
	var objAjax=new XMLHttpRequest()
	objAjax.open("GET","../../../backend/controlador/ingreso_conciliacion.php?cod_ing="+cod_ing+"&est_ing="+estatus)
	objAjax.onreadystatechange=function()
	{   
		if(objAjax.status==200 && objAjax.readyState==4)
		{
			respuesta=objAjax.responseText
		
			if(respuesta==true)
			{
				alert("Pago Procesado Correctamente")
				if(estatus=="V")
					{
				    document.getElementById("cod_ing_"+cod_ing).style.background="green"
				    document.getElementById("cod_ing_"+cod_ing).style.color="white"
				    }
				    else
				    	if(estatus=="R")
				    		{
				    		document.getElementById("cod_ing_"+cod_ing).style.background="red"
				    		document.getElementById("cod_ing_"+cod_ing).style.color="white"
				    		}else
				    			if(estatus=="N")
						    		{
						    		document.getElementById("cod_ing_"+cod_ing).style.background="yellow"
						    		document.getElementById("cod_ing_"+cod_ing).style.color="black"
						    		}


			}else
			{
				alert("Error al Procesar Pago")
			}
		}

	}
	objAjax.send(null)
}


function guardar_pago()
{
	var sel1=document.getElementById("fky_inscripcion").selectedIndex
	var sel2=document.getElementById("fky_tipo_pago").selectedIndex
	var sel3=document.getElementById("fky_banco_origen").selectedIndex
	var sel4=document.getElementById("fky_banco_destino").selectedIndex
	var inp1=document.getElementById("nec_fac").selectedIndex
	var inp2=document.getElementById("fec_ing").value
	var inp3=document.getElementById("ref_ing").value
	var inp4=document.getElementById("ced_ing").value
	var inp5=document.getElementById("mon_ing").value

	if(sel1>0 && sel2>0 && sel3>0 && sel4>0 && inp1!="" &&  inp2!="" && inp3!="" &&  inp4!="" && inp5!="")
	{
		document.getElementById("ing_rem").submit()
	}else
	{
		alert("Debes llenar todos los campos que sean obligatorios.");
		return
	}

}

function vailidar_archivo(){
    var fileInput=document.getElementById('url_ing');
    var filePath=fileInput.value;
    var extensionPermitida = /(.jpg|.jpeg|.png|.gif|.png|.pdf|.doc|.docx|.jfif)$/i;
    if(!extensionPermitida.exec(filePath)){
        alert('Solo se permiten archivos con formato .jpg, .jpeg, .gif, .png, .pdf, .doc, .docx, .jfif');
        fileInput.value = '';
        return false;
    }else{
		if(!validar_peso(fileInput)){
			fileInput.value = '';
        	return false;
		}
        return true;
	}
}