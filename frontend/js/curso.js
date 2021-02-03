function desglozar_precio()
{
   //tasa de impuesto	
   var tasa=document.getElementById("fky_iva").value
   var total=document.getElementById("pre_cur").value
   var baseImponible = (total / parseFloat("1."+tasa));
   var iva=baseImponible*parseFloat("0."+tasa)

   document.getElementById("bas_cur").value=baseImponible.toFixed(2)
   document.getElementById("iva_cur").value=iva.toFixed(2)
}

function buscar_datos_curso()
{ 
 	var inscripcion=document.getElementById("fky_inscripcion").value
 	if(inscripcion!="")
 	{	
	 	var objAjax=new XMLHttpRequest()
		objAjax.open("GET","../../../backend/controlador/curso_remoto.php?accion=buscar_datos_curso&fky_inscripcion="+inscripcion)
		objAjax.onreadystatechange=function()
		{
	       if(objAjax.status==200 && objAjax.readyState==4)
	       	{   	
	       		
	       	  curso=objAjax.responseText.split("#");
	       	  precio1=curso[1]
	       	  precio2=precio1/2
	       	  document.getElementById("mon_ing").options[1].text=precio1+' Bs.'
	       	  document.getElementById("mon_ing").options[2].text=precio2+' Bs.'
	       	  document.getElementById("mon_ing").options[1].value=precio1
	       	  document.getElementById("mon_ing").options[2].value=precio2
	       	  document.getElementById("fky_curso").value=curso[0]
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

function buscar_datos_curso_online()
{
  var inscripcion=document.getElementById("fky_inscripcion").value
  if(inscripcion!="")
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
            precio2=precio1/2
            document.getElementById("mon_ing").options[0].text='Seleccione...'
            document.getElementById("mon_ing").options[1].text=precio1+' Bs. o '+curso[4]+' US$'
            document.getElementById("mon_ing").options[1].value=precio1      
            document.getElementById("fky_curso").value=curso[0]
            document.getElementById("est_ins").value=curso[2]
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

