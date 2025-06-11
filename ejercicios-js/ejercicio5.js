function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function esPrimo(numero) {
     
    if (numero <= 1) {
        return false;
    }
     
    if (numero === 2) {
        return true;
    }
    
    if (numero % 2 === 0) {
        return false;
    }
     
    for (let i = 3; i * i <= numero; i += 2) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}
const numeroAleatorio = getRandomInt(1, 100);
if (esPrimo(numeroAleatorio)) {
    console.log(`El número ${numeroAleatorio} es primo.`);
} else {
    console.log(`El número ${numeroAleatorio} no es primo.`);
}