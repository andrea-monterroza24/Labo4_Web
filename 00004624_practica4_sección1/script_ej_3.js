//Dado un array de números enteros positivos desordenados, devolver otro array con los números
//ordenados

function ordenar(arr) {
  const nuevoArray = [...arr];
  for (let i = 0; i < nuevoArray.length; i++) {
    for (let j = 0; j < nuevoArray.length - i - 1; j++) {
      if (nuevoArray[j] > nuevoArray[j + 1]) {
        let temporal = nuevoArray[j];
        nuevoArray[j] = nuevoArray[j + 1];
        nuevoArray[j + 1] = temporal;
      }
    }
  }

  return nuevoArray;
}

console.log(ordenar([14, 23, 99, 874, 93, 12])); // [12, 14, 23, 93, 99, 874]

//Crear una función que reciba un número entero positivo y devuelva true si dicho número es par o false en
//caso contrario.

function esPar(numero) {
  return numero % 2 === 0;
}
console.log(esPar(7)); // false
console.log(esPar(10)); // true
console.log(esPar(0)); // true (cero se considera par)

/*
Cada día una planta crece en metros según su velocidadCrecimiento. Cada noche, dicha planta decrece en
metros en base a su velocidadDecrecimiento debido a la falta de sol. Cuando nace, mide exactamente 0
metros. Queremos saber los días que tardará una planta en alcanzar cierta alturaDeseada. Crear una
función que reciba velocidadCrecimiento, velocidadDecrecimiento y alturaDeseada como números
enteros positivos y devuelva el número de días que tardará la planta en medir la alturaDeseada.
*/

function calcularDiasCrecimiento(
  velocidadCrecimiento,
  velocidadDecrecimiento,
  alturaDeseada
) {
  let altura = 0;
  let dias = 0;
  while (altura < alturaDeseada) {
    altura += velocidadCrecimiento;
    dias++;
    if (altura >= alturaDeseada) {
      return dias;
    }
    altura -= velocidadDecrecimiento;
  }
  return dias;
}

// Caso 1: la planta crece 3 por día, baja 1 en la noche, quiere llegar a 10
console.log(calcularDiasCrecimiento(3, 1, 10));
// Día 1: altura 3-1=2
// Día 2: altura 5-1=4
// Día 3: altura 7-1=6
// Día 4: altura 9-1=8
// Día 5: altura 12 >= 10 => Esperado: 5
