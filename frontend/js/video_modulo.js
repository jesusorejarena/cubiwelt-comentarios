function seleccionar_video_modulo()
{
    var fky_tipo_curso=document.getElementById('fky_tipo_curso')[document.getElementById('fky_tipo_curso').selectedIndex].value
    //alert(fky_tipo_curso)
    var objAjax=new XMLHttpRequest;

    document.getElementById("modulo").className=document.getElementById("modulo").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
    
    objAjax.open("GET","../../../backend/controlador/video_modulo.php?accion=select_generico&fky_tipo_curso="+fky_tipo_curso)
    objAjax.onreadystatechange=function()
    {
        //alert (objAjax.responseText)

     if(objAjax.status==200 && objAjax.readyState==4)
        {
            document.getElementById("zona_modulo").innerHTML=objAjax.responseText
        }

    }
    objAjax.send(null)
    

}

function modificar_seleccion_video_modulo()
{
    var fky_tipo_curso=document.getElementById('fky_tipo_curso')[document.getElementById('fky_tipo_curso').selectedIndex].value
    //alert(fky_tipo_curso)
    var objAjax=new XMLHttpRequest;

    document.getElementById("modulo_original").innerHTML=""
   
    objAjax.open("GET","../../../backend/controlador/video_modulo.php?accion=select_generico&fky_tipo_curso="+fky_tipo_curso)
    
    objAjax.onreadystatechange=function()
    {
        //alert (objAjax.responseText)

     if(objAjax.status==200 && objAjax.readyState==4)
        {
            document.getElementById("modulo_original").innerHTML=objAjax.responseText
        }

    }
    objAjax.send(null)
}



