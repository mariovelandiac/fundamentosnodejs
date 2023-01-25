const fs = require("fs");
const stream = require("stream");
const util = require("util");

let data = "";

let readableStream = fs.createReadStream(`${__dirname}/input.txt`);
readableStream.setEncoding("utf-8")


// readableStream.on("data", (chunk) => {
//     data += chunk;
// })

// readableStream.on("end", () => {
//     console.log(data) 
// })

// STream para escribir
// process.stdout.write("Aja tu que"); 


// Stream de ambos caminos

const Transform = stream.Transform;


class Mayus extends Transform {
    constructor() {
        super();

    }

    _transform(chunk, codif, cb) {
        chunk = chunk.toString().toUpperCase();
        this.push(chunk);
        cb();
    }
}

const mayus = new Mayus();

readableStream.pipe(mayus).pipe(process.stdout)




