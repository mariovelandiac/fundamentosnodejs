let nombre = process.env.NOMBRE || "Sin nombre";
let web = process.env.WEB || "no tengo web"

console.log(`Hola ${nombre} tu tipo de dato es ${typeof nombre}`);
console.log(`Mi web es ${web} aja tu que`)