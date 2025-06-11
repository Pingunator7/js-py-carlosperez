 const palabras = [
    "Aceituna",
    "Murciélago",
    "Educación",
    "Aeropuerto",
    "Otorrinolaringólogo",
    "Euforia",
    "Aceite",
    "Paleontólogo",
    "Arquitectura",
    "Hipopótamo"
];

 
function obtenerPalabraAleatoria(lista) {
    const indiceAleatorio = Math.floor(Math.random() * lista.length);
    return lista[indiceAleatorio];
}

 
function contarVocales(palabra) {
     
    const palabraMinusculas = palabra.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    
    const vocales = "aeiou";
    let contador = 0;
    let vocalesEncontradas = [];  

    for (let i = 0; i < palabraMinusculas.length; i++) {
        const caracter = palabraMinusculas[i];
        if (vocales.includes(caracter)) {
            contador++;
            vocalesEncontradas.push(palabra[i]); 
        }
    }
    return { contador: contador, vocales: vocalesEncontradas.join(', ') };
}

 
const palabraSeleccionada = obtenerPalabraAleatoria(palabras);

 
const resultado = contarVocales(palabraSeleccionada);

 
console.log(`Palabra seleccionada: ${palabraSeleccionada}`);
console.log(`Número total de vocales: ${resultado.contador}`);
console.log(`Vocales encontradas: ${resultado.vocales}`);

 