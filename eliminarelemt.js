/*Eliminar un elemento de un array según su posición: 
Crea una función que reciba un array y una posición, y elimine el elemento con .splice().*/

function eliminarElemento(array, posicion) {
    array.splice(posicion, 1);
    console.log(array);

}
