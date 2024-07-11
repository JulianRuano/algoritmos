//Array.prototype.map()
/*
El método map() crea un nuevo array con los resultados de la llamada a la función 
indicada aplicados a cada uno de sus elementos.
*/

// *** Primer ejemplo ***

const numbers = [1, 2, 3, 4, 5];

// Duplicar cada número
const doubledNumbers = numbers.map(number => number * 2);

console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// *** Segundo ejemplo ***
const transactions = [
    { userId: 1, type: 'income', amount: 100 },
    { userId: 1, type: 'expense', amount: 50 },
    { userId: 2, type: 'income', amount: 200 },
    { userId: 2, type: 'expense', amount: 70 },
    { userId: 1, type: 'income', amount: 150 },
    { userId: 2, type: 'expense', amount: 30 },
];

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
];

// Resumir transacciones por usuario
const userSummaries = users.map(user => {
    // Usamos filter para obtener las transacciones de un usuario
    const userTransactions = transactions.filter(tx => tx.userId === user.id);
    const totalIncome = userTransactions
        .filter(tx => tx.type === 'income')
        .reduce((sum, tx) => sum + tx.amount, 0);
    const totalExpenses = userTransactions
        .filter(tx => tx.type === 'expense')
        .reduce((sum, tx) => sum + tx.amount, 0);
    const balance = totalIncome - totalExpenses;

    return {
        userId: user.id,
        userName: user.name,
        totalIncome,
        totalExpenses,
        balance,
    };
});

console.log(userSummaries);

/* Output
[
    {
      userId: 1,
      userName: 'Alice',
      totalIncome: 250,
      totalExpenses: 50,
      balance: 200
    },
    {
      userId: 2,
      userName: 'Bob',
      totalIncome: 200,
      totalExpenses: 100,
      balance: 100
    }
  ]
*/