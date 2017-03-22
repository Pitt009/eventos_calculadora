
function mostrarNum(num){
  var guardar = document.formulario.resultado.value;
  document.formulario.resultado.value = guardar +num;
}
 function operacion(datos){
   var resultado = document.getElementById("caja");
   resultado.value = eval(resultado.value);
   }

function validarNumero(event){
  var codigoASCII = event.keyCode;
  if(codigoASCII == 13){
    operacion();
  }
  if(codigoASCII < 42 || codigoASCII > 57) {
    return false;
}
}
