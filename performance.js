const array = new Array(1000000);

function badPerfomance() {
  console.time("badPerfomance");
  for (let i = 0; i < array.length; i++) {
    array[i] = "hola";
  }
  console.timeEnd("badPerfomance");
}

function goodPerformance() {
  console.time("goodPerformance");
  let otroArray = array.length;
  for (let i = 0; i < otroArray; i++) {
    array[i] = "hola";
  }
  console.timeEnd("goodPerformance");
}

badPerfomance();
goodPerformance();
