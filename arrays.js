//let array = [1, 2, 3];

let frutas =[ "manzanas", "peras", "bananas", "manzanas1"];

let elementosAlAzar = [2, true, "nombre", "hola", undefined];

frutas.splice(2,0,"elemento agregado")
console.log(frutas);

elementosAlAzar[1];
let primeraFruta = frutas[0]; 
let segundaFruta = frutas[1];

let posicion = frutas.indexOf("kiwis");    

frutas.push("naranjas"); 
console.log(frutas.indexOf("naranjas"));    
frutas.shift();
console.log("--------------------");
console.log(frutas);



