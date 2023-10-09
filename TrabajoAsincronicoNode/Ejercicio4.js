// En este ejercicio, exploraremos cómo funciona el trabajo asincrónico en Node.js.

// Crea una función llamada buscarEnBD que simule una búsqueda en una base de datos. Esta función debería tomar un tiempo simulado (por ejemplo, 2 segundos) antes de devolver un resultado.

// Llama a buscarEnBD("Usuario123") y observa cómo se comporta la pila de llamadas mientras espera la respuesta.

// Ahora, utiliza una función de devolución de llamada (callback) para manejar el resultado de buscarEnBD. La función de devolución de llamada debería imprimir el resultado en la consola.

// Llama a buscarEnBD("Usuario456", callback) y observa cómo se maneja la respuesta asincrónica.
function buscarEnBD(usuario, callback) {
    setTimeout(() => {
        const resultado = `Datos del usuario ${usuario}`;
        callback(null, resultado);
    }, 2000)
}

function miCallback(error, resultado) {
    if (error) {
      console.error('Error:', error);
    } else {
      console.log('Resultado de la búsqueda:', resultado);
    }
}

buscarEnBD("Usuario123", miCallback);