const http = require("http");
http.createServer(router).listen(3000)


function router(require,response) {
    console.log("Nueva petición");
    console.log(require.url);

    switch (require.url) {
        case "/hola":
            response.write("Hola que tal");
            response.end();
            break
        default:
            response.write("No sé lo que que quieres");
            response.end();
            
    }
    // response.writeHead(200, {
    //     "Content-type": "text/plain"
    // })
    // response.write("Hola, este soy yo respondiendote desde el servidor");

    // response.end()
}
console.log("Esuchando en puerto 3000") // buena practica especificar en que puerto estamos escuchando