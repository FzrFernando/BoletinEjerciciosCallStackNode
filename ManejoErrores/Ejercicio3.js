// En este ejercicio, vamos a tratar con errores en la pila de llamadas.

// Crea una función llamada dividir que tome dos números como argumentos y devuelva su división.

// Llama a dividir(10, 0) y observa qué sucede. Deberías obtener un error de división por cero. ¿Cómo se maneja este error en la pila de llamadas?

// Modifica la función dividir para manejar el caso de división por cero y lanzar una excepción personalizada.

// Llama a dividir(10, 0) nuevamente y observa cómo se maneja ahora el error.

function dividir(a, b){
    if (b === 0) {
        throw new Error('No se puede dividir por cero');
    }
    return a / b;
}

try {
    const resultado = dividir(10,0);
    console.log('Resultado:', resultado)
} catch (error) {
    console.error('Error:', error.message)
}