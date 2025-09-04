/*Agregar un elemento al final del array:
Crea una función que reciba un array y un elemento, y lo agregue al final usando .push().*/

function agregaralfinal(Array, elemento) {
    Array.push(elemento);
    console.log(Array);

}
let letras = ['a', 'b', 'c'];
let nuevaletra = prompt("Ingrese una letra para agregar al final del array:");
agregaralfinal(letras, nuevaletra);
