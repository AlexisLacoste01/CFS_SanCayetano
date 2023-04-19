// Función para calcular el área de un triángulo
function calcularAreaTriangulo(base, altura) {
    return 0.5 * base * altura;
    } 
    
    // Pares de base-altura
    const paresBaseAltura = [
    [1, 2],
    [2, 4],
    [3, 6],
    [4, 8],
    [5, 10],
    [6, 12],
    [7, 14]
    ];
  
  // Calcular y mostrar el área de cada triángulo
    paresBaseAltura.forEach(par => {
        const base = par[0];
        const altura = par[1];
        const area = calcularAreaTriangulo(base, altura);
    console.log(`El área del triángulo con base ${base} y altura ${altura} es ${area}`);
    });