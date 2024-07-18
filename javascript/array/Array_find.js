/*
Array.prototype.find()
El método find() devuelve el primer elemento de un array que cumpla con la condición
dada por la función de prueba. En caso contrario devuelve undefined.
*/

const numbers = [1, 2, 3, 4, 5];

// Encontrar el primer número par
const firstEvenNumber = numbers.find(number => number % 2 === 0);

console.log(firstEvenNumber); // 2
