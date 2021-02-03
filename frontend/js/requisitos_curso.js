function buscar_requisitos_curso()
{
    var sel_idx=document.getElementById("fky_curso").selectedIndex
    if(sel_idx>0)
    {	

	var fky_curso=document.getElementById("fky_curso").value
	var objAjax=new XMLHttpRequest()
  document.getElementById("zona_barra").className =document.getElementById("zona_barra").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )

	objAjax.open("GET","../../../backend/controlador/requisito_inscripcion.php?accion=filtrar&fky_curso="+fky_curso)
	objAjax.onreadystatechange=function(){

       if(objAjax.status==200 && objAjax.readyState==4)
       	{
       		
       		document.getElementById("requisitos").innerHTML=objAjax.responseText
          document.getElementById("zona_barra").className =document.getElementById("zona_barra").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
          document.getElementById("boton").disabled=false
       	}else
          {
          document.getElementById("barra").style.width=25*objAjax.readyState+"%"
          document.getElementById("porcentaje").innerHTML=document.getElementById("barra").style.width        
          }

	}
	objAjax.send(null)
   }else
   	alert("Debe seleccionar un curso")
	
}