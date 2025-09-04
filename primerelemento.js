/*Eliminar el primer elemento de un array: 
Crea una función que reciba un array y elimine su primer elemento usando .shift().*/

function primerElemento(array) {
    array.shift();
    console.log(array);

}

let vehiculos = ['auto', 'moto', 'camión', 'bici'];
primerElemento(vehiculos);