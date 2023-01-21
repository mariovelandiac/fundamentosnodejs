const fs = require("fs");

function leer (ruta,cb) {
    fs.readFile(ruta, (err, data) => {
        cb(data.toString());
    })
}


function escribir (ruta, contenido, cb) {
    fs.writeFile(ruta, contenido, function (err, data){
        if (err) {
            console.error("No he podido escribirlo", err)
        } else {
            console.log("Se ha escrito correctamente")
        }
    })
}4

function borrar(ruta, cb) {
    fs.unlink(ruta, cb)
}

const rutaarchivo = `${__dirname}/archivonuevo.txt`

let data = "Hola soy un nuevo archivo"
console.log("inicio");
escribir(`${__dirname}/archivonuevo.txt`, data, console.log)
leer(rutaarchivo, console.log);
borrar(rutaarchivo, console.log)
console.log("final")