function tipo_moneda() {
	var moneda=document.getElementById('fky_moneda').value
	if (moneda==3 && moneda!="") {
		document.getElementById("cuenta_banco").className =document.getElementById("cuenta_banco").className.replace( /(?:^|\s)d-none(?!\S)/g , ' d-block' )
	}else{
		document.getElementById("cuenta_banco").className =document.getElementById("cuenta_banco").className.replace( /(?:^|\s)d-block(?!\S)/g , ' d-none' )
	}
}