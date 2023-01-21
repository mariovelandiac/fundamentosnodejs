async function hola(ajaca) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Hola 🍕, soy ${ajaca}`)
            resolve(ajaca);
        }, 1600)})
}

async function adios(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log(`Adios, ${nombre} 😭`);
            resolve(nombre);
            }, 1000)
    })
}

async function hablar(nombre) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
        console.log("bla bla bla bla")
        resolve(nombre);
        },1000)
    })
}


async function main () {
    let nombre = await hola("Mario");
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre)
}

console.log("Iniciamos procesos")
main();
console.log("Prueba de que asincrono")