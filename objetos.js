const objPersona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 25,
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    }
}
for (let key in objPersona) {
    console.log(key,":", objPersona[key]);
}
console.log("Calle:", objPersona.direccion.calle);
console.log("Número de casa:", objPersona.direccion.numero);