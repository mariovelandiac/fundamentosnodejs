// El proceso es un modulo como tal, global

// para hacer algo cuando el proceso termine
process.on("exit", () => console.log("El proceso terminó"));

// para hacer algo justo cuando el proceso esté a punto de terminar
process.on("beforeExit", () => console.log("El proceso va a terminar"));


// uando hay excepciones o promesas rechazadas sin capturar con un try/catch 

process.on("uncaughtException", (err, orign) => {
    console.error("Vaya, se nos ha olvidado capturar un error");
    console.error(err.message);
    console.error(orign)
})


console.log("Esto no debería salir")
