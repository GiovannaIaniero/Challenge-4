/*Mostrar la primera letra de un texto: 
Crea una función que reciba un texto y devuelva su primera letra con .charAt().*/

function primeraLetra(texto) {
    return texto.charAt(0);

}

let textoUsuario = prompt("Ingrese un texto:");
console.log("La primera letra del texto es:" + primeraLetra(textoUsuario));
