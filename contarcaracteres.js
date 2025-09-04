/*Contar caracteres de un texto: 
Crea una función que reciba un texto y muestre cuántos caracteres tiene usando .length.*/

 

function contarCaracteres(texto) {
    let cantidad = texto.length;
    console.log("El texto tiene " + cantidad + " caracteres.");
}
let textoUsuario = prompt("Ingrese un texto:");
contarCaracteres(textoUsuario);

