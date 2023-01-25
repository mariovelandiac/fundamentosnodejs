const os = require("os");

// Para ver el tipo de arquitectura
// console.log(os.arch())

// para ver la plataforma sobre la cual corre el servidor o la app
// console.log(os.platform()) 

// para ver el número de nucleos en la cpu y detallar
// console.log(os.cpus())

// para ver únicamente el número de cpus
// console.log(os.cpus().length);

// para ver las variables del sistema
// console.log(os.constants);

// para ver la memoria ram disponible
function gb(bytes) {
    return bytes/(1024**3);
}
// console.log(gb(os.freemem())); // para saber la memoria ram disponible que tenemos
// console.log(gb(os.totalmem())); // para saber la memoria ram total disponible que tenemos;


// para saber dirección del home
// console.log(os.homedir());

// para saber dirección de los archivos temporales
// console.log(os.tmpdir())

// para saber el nombre de la maquina
// console.log(os.hostname());

// para saber las interfaces de red
// console.log(os.networkInterfaces())
