function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
function generarContrasena(longitud) {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contrasena = "";
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = getRandomInt(0, caracteres.length - 1);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    return contrasena;
}

 
const longitudContrasena = getRandomInt(16, 40);

 
const contrasenaGenerada = generarContrasena(longitudContrasena);

 
console.log(`Longitud de la contraseña: ${longitudContrasena}`);
console.log(`Contraseña generada: ${contrasenaGenerada}`);