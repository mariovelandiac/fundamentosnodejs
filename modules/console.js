console.log("Algo");
console.info("Algo")
console.error("Ojoconeso");
console.warn("Pegriloso mi fafa")
let lista = [
    {
        a: 1,
        b: "Mario"
    },
    {
        a: 2,
        b: "Velandia"
    }
]
console.table(lista)


//

function saludo(name) {
    console.group("Saludo")
    console.log(`Hola ${name}, bienvenido`)
    console.log("Estás a punto de entrar a otro sitio")
    newSite(name);
    console.log("Nos alegra que estés de vuelta")
    console.groupEnd("Saludo")
}

function newSite(name) {
    console.group("Sitio nuevo")
    console.log(`Hola ${name}, ahora estás en otro sitio`)
    console.log("Pero esta no es tu para final, te enviamos a otro sitio");
    anotherSite(name);
    console.log("Te enviamos de regreso de donde viniste")
    console.groupEnd("Sitio nuevo")
}

function anotherSite(name) {
    console.group("Acá tendrás lo que necesitas")
    console.log(`Te quiero mucho ${name} ❤`)
    console.groupEnd()
}

saludo("Mario")