// Escribe una función llamada sumar que tome dos números como argumentos y devuelva su suma.

// Llama a la función sumar(5, 3) y observa cómo se comporta la pila de llamadas. Escribe los pasos en papel o en un editor de texto.

// Luego, modifica la función sumar para que llame a otra función llamada restar que tome dos números y devuelva su resta.

// Llama a sumar(8, 4) y observa cómo se comporta la pila de llamadas nuevamente. Anota los pasos.

function sumar(num1,num2) {
    return num1+num2
}

console.log(sumar(5,3));

function sumar(num1,num2){
    return restar(num1,num2)
}

function restar(num1,num2) {
    return num1-num2
}

console.log(sumar(8,4));