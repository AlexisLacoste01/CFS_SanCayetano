const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
    });
    
    readline.question('Ingrese la cantidad de dados a lanzar: ', numDados => {
    const probabilidad = (1/6) ** numDados;
    const probabilidadPorcentaje = probabilidad * 100;
    console.log(`La probabilidad de sacar ${numDados} dados 6 al lanzar ${numDados} dados es del ${probabilidadPorcentaje}%`);
    
    readline.close();
    });