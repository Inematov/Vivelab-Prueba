var numeros = [];
var ciclo = 0;
var ordenado = [];
var mayor = 0;


function numeroNumeros(){
  swal({
    title: "Hola!",
    text: "Escribe cuantos numeros vas a ingresar:",
    type: "input",
    showCancelButton: true,
    closeOnConfirm: false,
    animation: "slide-from-top",
    inputPlaceholder: "Cantidad de numeros a ingresar"
  },
// Este es un evento que al darle aceptar al input se envia function(inputValue)
function(inputValue){
  // Esta condicion se lanza cuando el boton se le da cancel
  if (inputValue === false){    
    return false;}
  // Esta condicion se lanza cuando el numero es negativo
  if (inputValue < 0) {
    swal.showInputError("Tu numero debe ser un numero positivo");

    return false
  }
  // Esta condicion se lanza cuando no es un numero
  if (isNaN(inputValue)) {
    swal.showInputError("Tu debes ingresar un numero");
    return false
  }
  
  // Aqui comienza a correr el codigo
  swal("Bien!", "Vamos a ingresar: " + inputValue + " numeros", "success");
// Ciclo es igual al numero que ingreso el usuario
ciclo = inputValue;
pedirNumero();

});
}


function pedirNumero(){
  // Esta funcion sirve para pedir los numeros que el usuario desea evaluar
  // este if es para hacerlo la cantidad de veces que el usuario ingreso
  if(ciclo > 0){ 
    swal({
      title: "Hola!",
      text: "Escribe el numero que deseas ingresar:",
      type: "input",
      showCancelButton: true,
      closeOnConfirm: false,
      animation: "slide-from-top",
      inputPlaceholder: "Numeros a ingresar"
    },
    function(inputValue){
      if (inputValue === false){
        swal('Ok sera la proxima vez.');    
        return false;}

        if (inputValue < 0) {
          swal.showInputError("Tu numero debe ser un numero positivo");
          return false
        }
        if (isNaN(inputValue)) {
          swal.showInputError("Tu debes ingresar un numero");
          return false
        }

  // Aqui comienza a correr el codigo
  swal("Bien!", "Has ingresado: " + inputValue + "", "success");
  // Se almacenan en este arreglo llamado numeros
  numeros.push(inputValue);
  // Aqui se logra que el ciclo sea finito
  ciclo =  ciclo-1;
  pedirNumero();
});
  }
}


function verificar(){
// Este ciclo nos ayuda a ver cual es el primer caracter  mayor entre todos los elementos 
  var mayor = 0;
for (var i = numeros.length - 1; i >= 0; i--) {
  var aux = 0;
  aux = numeros[i].charAt(0);
  if(mayor < aux){
    mayor = aux;
  }
    // la variable se llama mayor
    console.log('mayor');
    console.log(mayor);
  }
  var auxiliar = [];
  // Este ciclo nos sirve para saber cuales elementos del arreglo inician con el caracter mayor
  for (var i = numeros.length - 1; i >= 0; i--) {

    if(numeros[i].charAt(0)==mayor){
      // Este arreglo tiene todos los elementos con el caracter mayor
      auxiliar.push(numeros[i]);
    }
  }

  console.log("verificar");
  console.log(auxiliar);
  // llamamos una funcion RECURSIVA para sacar el elmento mayor
  ordenar(auxiliar, 1);  

  console.log('ordenado prueba 1: ');
  swal('El orden es '+ordenado.toString());
}



function ordenar(arreglo, indice){
arreglo2=[];
  max= 0 ;
if (arreglo.length>1) {
  console.log('entro caso 1');
for (var i = arreglo.length - 1; i >= 0; i--) {
  if (arreglo[i].charAt(indice) > max) {
  console.log("caso 1a");
    max = arreglo[i].charAt(indice);
  }

}

console.log('maximo' + max);
console.log('comparativo' +arreglo[0].charAt(indice-1));
if (max >= arreglo[0].charAt(indice-1)) {  
  console.log("caso 1b");
for (var i = arreglo.length - 1; i >= 0; i--) {  
    if(arreglo[i].charAt(indice)==max){
      console.log("caso 1b2");
      arreglo2.push(arreglo[i]);
    }
}
}
else{
console.log("caso 2");
for (var i = arreglo.length - 1; i >= 0; i--) {
  if (arreglo[i].length<arreglo[0].length) {
    console.log("caso 2a");
    arreglo2.push(arreglo[i]);

  }
}
if(arreglo2.length == 0){
  console.log("caso 2b");
 for (var i = arreglo.length - 1; i >= 0; i--) {
  console.log('caso 2b1');
    if(arreglo[i].charAt(indice)==max){
      console.log('caso 2b1A');
      arreglo2.push(arreglo[i]);
    }
  } 
}
}
console.log("ciclo terminado");
console.log(arreglo2);
ordenar(arreglo2, indice+1);
}
// SI ES MAYOR QUE 1

else{
    
  if (arreglo.length==1) {
    ordenado.push(arreglo[0]);
     numeros.splice(numeros.indexOf(arreglo[0]),1);
     
     verificar();
  }else{
    return;
  }
}


}