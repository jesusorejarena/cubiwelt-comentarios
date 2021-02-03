function crear_proveedor()
{
 var objAjax=new XMLHttpRequest;
 var proveedor=document.getElementById("fky_proveedor").value

 if(proveedor=="nuevo")
 {
     var rif=prompt("Ingrese el RIF del Proveedor")
     while(rif==""){var rif=prompt("Ingrese el RIF del Proveedor")}    
     var nombre=prompt("Ingrese el Nombre del Proveedor")
     while(nombre==""){var nombre=prompt("Ingrese el Nombre del Proveedor")}    

 
     objAjax.open("GET","../../../backend/controlador/proveedor.php?accion=crear_proveedor_express&rif_pro="+rif+"&nom_pro="+nombre)
     objAjax.onreadystatechange=function()
     {
        if(objAjax.status==200 && objAjax.readyState==4)
        {
              var respuesta=objAjax.responseText
              if(respuesta=!0 && !isNaN(respuesta))
                {
                    //alert(objAjax.responseText)
                    var proveedor=document.getElementById("fky_proveedor")
                    proveedor[0].value=objAjax.responseText
                    proveedor[0].innerHTML=nombre
                    proveedor.selectedIndex=0
                    alert("Proveedor Agregado Correctamente")
                }else{
                    //alert(objAjax.responseText)
                    alert("Error al agregar Proveedor o Proveedor Duplicado")
                }
        }


     }
     objAjax.send(null)

 }


}