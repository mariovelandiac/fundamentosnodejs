let buffer = Buffer.alloc(10); // crea n espacios vacios en un buffer

// para crearlos desde un array
const array = [1,2,3,4,5,6]
buffer = Buffer.from(array);

// Para colocar texto plano
buffer = Buffer.from("Hola aja tu que")

// console.log(buffer)


// --

let abc = Buffer.alloc(26);

for (let i = 0; i < 26; i++) {
    abc[i] = i + 97;
}


console.log(abc);
console.log(abc.toString())
