function subir_imagen_perfil()
{
	var img_alu=document.getElementById("img_alu").value
  var por_alu=document.getElementById("por_alu").value
  var input_img_alu=document.getElementById("img_alu")
  var input_por_alu=document.getElementById("por_alu")

 	if(img_alu!="")
 	{	

        var extension1=validar_tipo_extension(img_alu);
        var peso1=validar_peso(input_img_alu);

        if(extension1==false || peso1==false){
          document.getElementById("img_alu").focus();
          return
        }
 	}else{

    
  var extension1=true
  var peso1=true

  }

  if(por_alu!="")
  { 
        var extension2=validar_tipo_extension(por_alu);
        var peso2=validar_peso(input_por_alu);

        if(extension2==false || peso2==false){
          document.getElementById("por_alu").focus();
          return
        }
  }else{
  var extension2=true
  var peso2=true

  }

        if(extension1==true && peso1==true && extension2==true && peso2==true)
        {
          document.getElementById("formulario_sobre_ti").submit()
        }

}