 function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
function calcularFactorial(numero) {
    if (numero < 0) {
        return "El factorial no está definido para números negativos.";
    }
    if (numero === 0 || numero === 1) {
        return 1;
    }
    let resultado = 1;
    for (let i = 2; i <= numero; i++) {
        resultado *= i;
    }
    return resultado;
}

 
const numeroAleatorio = getRandomInt(1, 15);

 
const factorial = calcularFactorial(numeroAleatorio);

 
console.log(`El número aleatorio es: ${numeroAleatorio}`);
console.log(`El factorial de ${numeroAleatorio}! es: ${factorial}`);