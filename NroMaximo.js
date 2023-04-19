const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

console.log("Ingresa los números separados por línea. Ingresa 0 para finalizar la entrada.");

rl.prompt();

rl.on('line', (input) => {
    const number = parseInt(input);
    if (number === 0) {
        rl.close();
    } else {
        numbers.push(number);
    }
});

rl.on('close', () => {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) { // Cambiar la logica para encontrar el minimo
            max = numbers[i]; // Cambiar max por min para encontrar el minimo
        }
    }
    console.log(`El máximo es ${max}`); // mostrar S{min} para mostrar el minimo
});