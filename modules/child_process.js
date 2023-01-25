const {exec ,spawn} = require("child_process");

// let cb = function(err, stdout, sterr) {
//     if (err) {
//         console.error(err)
//         return false
//     }
//     console.log(stdout);
// }
// exec("ls -la", cb)



let proceso = spawn('pwd', [])

console.log("In");

proceso.stdout.on("data", (dato) => { // este proceso es asíncrono
    console.log(dato.toString())
})

console.log("Out")


