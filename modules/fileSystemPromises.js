const fs = require("fs").promises;

async function leer (ruta) {
    try {
        const readed = await fs.readFile(ruta)
        return readed.toString();
    } catch (e) {
        console.log(e);
    }
} 

async function escribir(ruta, data) {
    try {
        await fs.writeFile(ruta, data)
    } catch (e) {
        console.log(e);
    }
}


async function borrar(ruta) {
    try {
        await fs.unlink(ruta);
    } catch (e) {
        console.log(e);
    }
}

async function main() {
    const rutaarchivo = `${__dirname}/archivonuevo.txt`
    let data = "Hola soy un nuevo archivo"
    await escribir(`${__dirname}/archivonuevo.txt`, data, console.log)
    let archivoLeido = await leer(`${__dirname}/archivo.txt`);
    console.log(archivoLeido)
    // await borrar(rutaarchivo)
}

console.log("inicio");
main();
console.log("final")