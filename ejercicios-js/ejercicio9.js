 const numeros = [25, 10, 80, 5, 42, 100, 15, 30];
function encontrarMayorMenor(arr) {
    if (arr.length === 0) {
        return { mayor: undefined, menor: undefined, mensaje: "El array está vacío." };
    }

    let mayor = arr[0];
    let menor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > mayor) {
            mayor = arr[i];
        }
        if (arr[i] < menor) {
            menor = arr[i];
        }
    }
    return { mayor: mayor, menor: menor };
}

 
const resultado = encontrarMayorMenor(numeros);

 
if (resultado.mensaje) {
    console.log(resultado.mensaje);
} else {
    console.log(`El array de números es: [${numeros.join(', ')}]`);
    console.log(`El número mayor es: ${resultado.mayor}`);
    console.log(`El número menor es: ${resultado.menor}`);
}


 