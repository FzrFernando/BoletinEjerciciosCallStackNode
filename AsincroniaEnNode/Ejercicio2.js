// En este ejercicio, exploraremos la asincronía en Node.js y cómo afecta a la pila de llamadas.

// Crea una función llamada imprimirMensaje que tome un mensaje como argumento y lo imprima en la consola.

// Llama a imprimirMensaje("Hola, Mundo") y observa el resultado.

// Ahora, utiliza setTimeout para hacer que imprimirMensaje se llame después de 2 segundos con el mismo mensaje. ¿Cómo cambia la ejecución?

// Escribe el flujo de ejecución de las llamadas y observa cómo las funciones se agregan y eliminan de la pila de llamadas.

function imprimirMensaje(mensaje){
    return mensaje;
}

console.log(imprimirMensaje("Hola, Mundo"));

setTimeout(() => {
    imprimirMensaje("Hola con setTimeout");
}, 2000);

setTimeout(() => {
    console.log("Final");
}, 3000);