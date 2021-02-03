function subir_video()
{
	var url_vid=document.getElementById("url_vid").value
	var input=document.getElementById("url_vid")

 	if(url_vid=="")
 	{	
 		alert("Debe Seleccionar un Video a Subir")
 		return
 	}else{

        var extension=validar_tipo_extension_video(url_vid);
        var peso=validar_peso_video(input);

        if(extension==true && peso==true)
        {
 			document.getElementById("formulario_video").submit()
 		}


 	}

}


function tipo_curso_video()
{
  var fky_tipo_curso=document.getElementById("fky_tipo_curso").value

  var objAjax=new XMLHttpRequest;
  objAjax.open("GET","../../../backend/controlador/tipo_curso.php?accion=filtrar_tipo_curso&fky_tipo_curso="+fky_tipo_curso)
  objAjax.onreadystatechange=function(){
    //alert("Estatus es = "+objAjax.status+" y readyState es ="+objAjax.readyState)
    if (objAjax.status==200 && objAjax.readyState==4) {

      var respuesta=objAjax.responseText
      //alert(respuesta)
      if (respuesta!=0) {
        document.getElementById("nombre_curso_video").value=respuesta
        //location.reload(forceGet=true)

      }
    }
  }
  objAjax.send(null)

}