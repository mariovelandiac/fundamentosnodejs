function hola(ajaca) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola 🍕, soy ${ajaca}`)
            resolve(ajaca);
        }, 1600)})
}

function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Adios, ${nombre} 😭`);
            resolve(nombre);
            }, 1000)
    })
}

function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
        console.log("bla bla bla bla")
        // resolve(nombre);
        reject("Ha habido un error")
        },1000)
    })
}


console.log("Iniciando proceso");
hola("Mario")
.then(hablar) // las promesas se pueden anidar
.then(hablar)
.then(hablar)
.then(hablar)
.then(hablar)
.then(adios)
.then(() => {   // la promesa recibe como argumento una función con dos funciones al interior, si no modificamos esas funciones, entonces no metemos argumentos
    console.log("Terminando el proceso");
})
.catch((e) => console.error(e)) // el catch va a detener el código evitando que haya una propagación del error
console.log("prueba")


