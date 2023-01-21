function hola(ajaca, miCallback) {
    console.log("Iniciando proceso");
    setTimeout(() => {
        console.log(`Hola 🍕, soy ${ajaca}`)
        miCallback(ajaca);
    }, 1600)
}

function adios(nombre, otroCallback) {
    setTimeout(() => {
    console.log(`Adios, ${nombre} 😭`);
    otroCallback();
    }, 400)
}


function comoestas(nombre, otravezCallback) {
    setTimeout(() => {
        console.log(`Cuentame ${nombre}, cómo estás, qué has hecho?`)
        otravezCallback();
    }, 1500)
}

function hablar(callbackHablar) {
    setTimeout(() => {
        console.log("bla bla bla bla")
        callbackHablar();
    })
}
// Para evitar el callback hell hacemos funciones intermedias que hagan lo que queramos

function conversacion(nombre, veces, callback) {
    if (veces > 0) {
        hablar(function () {
            conversacion(nombre, --veces, callback)
        })
    } else {
        adios(nombre, callback);
    }
}

hola("Mario", function (nombre) {
    conversacion(nombre,3, function () {
        console.log("Proceso terminado")
    })
})

// hola("Mario", (nombre) => {
//     comoestas(nombre , () => {
//         comoestas(nombre , () => {
//             adios(nombre, () => {
//                 console.log("Terminamos proceso")  // CALLBACK HELL
//             }) 
//         })
//     })
// });