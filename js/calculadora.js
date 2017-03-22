
function mostrarNum(num){
  var guardar = document.formulario.resultado.value;
  document.formulario.resultado.value = guardar +num;
}
 function operacion(datos){
   var resultado = document.getElementById("caja");
   resultado.value = eval(resultado.value);
   }
