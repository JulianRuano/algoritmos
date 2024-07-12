/*
Array.prototype.filter()
El método filter() crea un nuevo array con todos los elementos que cumplan 
la condición implementada por la función dada.    
*/

// *** Primer ejemplo ***
const numbers = [1, 2, 3, 4, 5];

// Filtrar números pares
const evenNumbers = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers); // [2, 4]

// *** Segundo ejemplo ***
const users = [
    { id: 'A1', name: 'Juan' },
    { id: 'A2', name: 'Pedro' },
    { id: null, name: 'Luis' },
];

function idValid(user) {
    return user.id !== null;
}

const validUsers = users.filter(idValid);

console.log(validUsers); // [{ id: 'A1', name: 'Juan' }, { id: 'A2', name: 'Pedro' }]