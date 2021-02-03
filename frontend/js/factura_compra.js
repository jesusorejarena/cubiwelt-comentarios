function desglozar_precio()
{
   //tasa de impuesto	
   var t=document.getElementById("fky_iva")
   var ta=t.options[t.selectedIndex].text;
   var total=document.getElementById("tot_fac").value
   var tasa=parseInt(ta)
   var baseImponible = (total / parseFloat("1."+tasa));
   var iva=baseImponible*parseFloat("0."+tasa)

   //alert('Tasa = '+tasa)
   //alert('Base Imponible = '+baseImponible)
   //alert('IVA = '+iva)
   

   document.getElementById("bas_fac").value=baseImponible.toFixed(2)
   document.getElementById("iva_fac").value=iva.toFixed(2)
}


function iva_exento()
{
	var exento=document.getElementById("exento").checked
    var iva=document.getElementById("iva")

    		if(exento==true)
    		{	
				var objAjax=new XMLHttpRequest;
				objAjax.open("GET","../../../backend/controlador/factura_compra.php?accion=select_factura_compra&estatus=I&condicion= and val_iva=0&clase=required")
				objAjax.onreadystatechange=function()
				{

				 if(objAjax.status==200 && objAjax.readyState==4)
				 	{
				 		document.getElementById("iva").innerHTML=objAjax.responseText
				 	}

				}
				objAjax.send(null)	

    		}else
    		{
				var objAjax=new XMLHttpRequest;
				objAjax.open("GET","../../../backend/controlador/factura_compra.php?accion=select_factura_compra&estatus=A&condicion=order by cod_iva&clase=required")
				objAjax.onreadystatechange=function()
				{

				 if(objAjax.status==200 && objAjax.readyState==4)
				 	{
				 		document.getElementById("iva").innerHTML=objAjax.responseText
				 	}

				}
				objAjax.send(null)		
    		}
    	
}