//Esto agregar a la pantalla el valor del boton de la calculadora que tomemos
function agregar(valor){
    document.getElementById('pantalla').value+=valor
}

function borrar(){
    document.getElementById('pantalla').value=''
}

function calcular(){
    const valorPantalla=document.getElementById('pantalla').value
    const resultado=eval(valorPantalla)
    document.getElementById('pantalla').value=resultado
}
// Obtener el elemento de entrada de la calculadora
var input = document.getElementById('pantalla');

// Agregar un controlador de eventos al elemento de entrada
input.addEventListener("keydown", function(event) {
  // Verificar si se presionó la tecla "Enter"
  if (event.key === "Enter") {
    // Obtener el valor del input
    var inputValue = input.value;

    // Evaluar la expresión matemática
    var result = eval(inputValue);

    // Mostrar el resultado en la calculadora
    input.value = result;

    // Evitar que el formulario se envíe o la página se actualice
    event.preventDefault();
  }
});
