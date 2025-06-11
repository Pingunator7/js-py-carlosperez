function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
const numeroAleatorio = getRandomInt(1, 10);

console.log(`Tabla de multiplicar del ${numeroAleatorio}:`);
console.log("-----------------------");

 
for (let i = 1; i <= 10; i++) {
    const resultado = numeroAleatorio * i;
    console.log(`${numeroAleatorio} x ${i} = ${resultado}`);
}