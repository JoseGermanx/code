// recibir un valor

// compara ese valor con 7 y 8 verificando si es divisible entre ellos

// valor divisible entre 7 verdadero
// valor divisible entre 8 verdadero

// Si es verdadero ==> console.log( "Verdadero");
// caso contrario console.log( "Falso");

function ayudaMario(valor) {
  if (valor % 7 === 0 && valor % 8 === 0) {
    console.log("Verdadero");
  } else {
    console.log("Falso");
  }
}

ayudaMario(56);
ayudaMario(7);
ayudaMario(8); 
ayudaMario(0);
ayudaMario(224);
ayudaMario(73);
