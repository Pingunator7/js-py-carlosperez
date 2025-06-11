const palabras = [
    "programacion",
    "javascript",
    "python",
    "computadora",
    "desarrollo",
    "algoritmo",
    "internet",
    "github",
    "acciones",
    "añoña"
];

 
function obtenerPalabraAleatoria(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

 
function invertirCadena(cadena) {
     
    return cadena.split('').reverse().join('');
}

 
const palabraOriginal = obtenerPalabraAleatoria(palabras);

 
const palabraInvertida = invertirCadena(palabraOriginal);
 
console.log(`Palabra original: "${palabraOriginal}"`);
console.log(`Palabra invertida: "${palabraInvertida}"`);
