const readline = require('readline');

// Creamos una interfaz readline con la entrada estándar y la salida estándar
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Creamos un array vacío donde almacenaremos los datos de los alumnos
let alumnos = [];

// Función que recibe el nombre y las notas de un alumno y calcula la nota final
function calcularNotaFinal(nombre, notaPractica, notaProblemas, notaTeorica) { 
  let notaFinal = notaPractica * 0.1 + notaProblemas * 0.5 + notaTeorica * 0.4;// Calculamos la nota final según los porcentajes indicados
        notaFinal = Math.round(notaFinal * 10) / 10; // redondear la nota final
        console.log(`La nota final de ${nombre} es: ${notaFinal}`); // Imprimimos en consola la nota final del alumno
        alumnos.push({ nombre: nombre, notaFinal: notaFinal }); // Almacenamos los datos del alumno (nombre y nota final) en el array de alumnos
}


function pedirNotas() {// Función que pide al usuario el nombre y las notas de un alumno
    rl.question('Ingrese el nombre del alumno (o cadena vacía para terminar): ', function(nombre) { // Preguntamos por consola el nombre del alumno
    if (nombre === '') { // Si el nombre es una cadena vacía, mostramos las notas finales y cerramos la interfaz readline
        mostrarNotas();
        rl.close();
        return;
    }
        rl.question('Ingrese la nota práctica: ', function(notaPractica) {// Preguntamos por consola la nota práctica del alumno
        rl.question('Ingrese la nota de problemas: ', function(notaProblemas) {// Preguntamos por consola la nota de problemas del alumno
        rl.question('Ingrese la nota teórica: ', function(notaTeorica) {// Preguntamos por consola la nota teórica del alumno
        notaPractica = parseInt(notaPractica); // Convertimos las notas ingresadas a números enteros
        notaProblemas = parseInt(notaProblemas);// Convertimos las notas ingresadas a números enteros
        notaTeorica = parseInt(notaTeorica);// Convertimos las notas ingresadas a números enteros
            if (isNaN(notaPractica) || isNaN(notaProblemas) || isNaN(notaTeorica)) {
                console.log('Las notas ingresadas deben ser números enteros.');// Si alguna nota no es un número entero, mostramos un mensaje de error y volvemos a pedir las notas
                pedirNotas();
            return;
        }
            if (notaPractica < 0 || notaPractica > 10 || notaProblemas < 0 || notaProblemas > 10 || notaTeorica < 0 || notaTeorica > 10) {
                console.log('Las notas deben estar entre 0 y 10.');// Si alguna nota está fuera del rango permitido, mostramos un mensaje de error y volvemos a pedir las notas
                pedirNotas();
            return;
            }
                calcularNotaFinal(nombre, notaPractica, notaProblemas, notaTeorica);// Calculamos la nota final del alumno y pedimos las notas del siguiente alumno
                pedirNotas();
            });
        });
    });
});
}

function mostrarNotas() {
        console.log('Notas finales:');
    for (let i = 0; i < alumnos.length; i++) {
        console.log(`${alumnos[i].nombre}: ${alumnos[i].notaFinal}`);
    }
}

pedirNotas();