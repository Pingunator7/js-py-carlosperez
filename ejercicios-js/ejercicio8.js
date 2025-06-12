const numeros = [10, 5, 8, 12, 3, 7, 20, 1];  

 
function sumarArray(arr) {
    let suma = 0;
    for (let i = 0; i < arr.length; i++) {
        suma += arr[i];
    }
    return suma;
}

 
const sumaTotal = sumarArray(numeros);

 
console.log(`El array de números es: [${numeros.join(', ')}]`);
console.log(`La sumatoria de los elementos del array es: ${sumaTotal}`);