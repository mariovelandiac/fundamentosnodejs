function hola(ajaca, miCallback) {
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

console.log("Iniciando proceso");
hola("Mario", (nombre) => {
    comoestas(nombre , () => {
        comoestas(nombre , () => {
            adios(nombre, () => {
                console.log("Terminamos proceso")  // CALLBACK HELL
            }) 
        })
    })
});


// let nombre = hola("Mario", (nombre) =>{})
// comoestas(nombre, () =>{})
// adios(nombre, () =>{})