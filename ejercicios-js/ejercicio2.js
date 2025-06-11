 function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

 
const numero = getRandomInt(1, 100);  

 
if (numero % 2 === 0) {
  console.log("El número " + numero + " es PAR.");  
} else {
  console.log("El número " + numero + " es IMPAR.");  
}