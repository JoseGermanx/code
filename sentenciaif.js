function sentenceIf(anioActual, anioPersona) {

  // guardo en una variable el resultado de la resta
  const resultado = anioActual - anioPersona;
  //verificar mediante un if si la persona es mayor de edad
  if (resultado < 10) {
    console.log("La persona tiene menos de 10 años");
  } else if (resultado >= 10 && resultado < 20) {
    console.log("La persona es mayor de 10 años y menor a 20 años");
  } else if (resultado >= 20) {
    console.log("La persona es mayor de 20 años");
  }
}

sentenceIf(2023,2018);
