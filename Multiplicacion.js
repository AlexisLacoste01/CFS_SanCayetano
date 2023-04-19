const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
     
    readline.question('Ingrese el número para la tabla de multiplicación: ', num => {
    readline.question('Ingrese el número máximo de la tabla: ', max => {
        for (let i = 1; i <= max; i++) {
        console.log(`${num} x ${i} = ${num*i}`);
        }
        
        readline.close();
    });
    });