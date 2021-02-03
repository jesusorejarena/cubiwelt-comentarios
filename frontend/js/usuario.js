function seleccionar_instructor()
{
    var rol=document.getElementById('fky_rol')[document.getElementById('fky_rol').selectedIndex].innerHTML

    var objAjax=new XMLHttpRequest;
    if(rol=="Instructor" || rol=="Instructor(Oficina)")
    {
    document.getElementById("instructor").className =document.getElementById("instructor").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
    document.getElementById("empleado").className =document.getElementById("empleado").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
    objAjax.open("GET","../../../backend/controlador/instructor.php?accion=select_generico")
    objAjax.onreadystatechange=function()
    {

     if(objAjax.status==200 && objAjax.readyState==4)
        {
            document.getElementById("zona_instructor").innerHTML=objAjax.responseText
        }

    }
    objAjax.send(null)
    }   
    else
    if(rol=="Seleccione..."){
        document.getElementById("empleado").className=document.getElementById("empleado").className.replace(/(?:^|\s)d-block(?!\S)/g , ' d-none')
        document.getElementById("instructor").className=document.getElementById("instructor").className.replace(/(?:^|\s)d-block(?!\S)/g , ' d-none')
    }
    else
    if(rol!="Instructor" || rol!="Instructor(Oficina)")
    {
        document.getElementById("empleado").className =document.getElementById("empleado").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
        document.getElementById("instructor").className =document.getElementById("instructor").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
        objAjax.open("GET","../../../backend/controlador/empleado.php?accion=select_generico")
        objAjax.onreadystatechange=function()
        {
         if(objAjax.status==200 && objAjax.readyState==4)
            {
                document.getElementById("zona_empleado").innerHTML=objAjax.responseText
            }
        }
        objAjax.send(null)
    }
}
