function serompeclaroquesi(cb) {
    funcionAsincrona(cb);
}

function funcionAsincrona(cb) {
    setTimeout(() => {
        try {
        return 3 +z}
        catch (e) {
            cb(e)
        };
    }, 1000)
}

// mejor lo manejamos con trycatch
try {
    serompeclaroquesi((e) => {
        console.log("Vaya, algo se ha roto")
        console.error(e.message)
    })
} catch (e) {
    console.log("Vaya, algo ha salido mal")
    console.log(e.message)
}

console.log("Esto sigue funcionando")