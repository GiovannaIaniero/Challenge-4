/*Eliminar el primer elemento de un array: 
Crea una función que reciba un array y elimine su primer elemento usando .shift().*/

function primerElemento(Array){
    Array.shift(primerElemento);
    console.log(Array);


    let vehiculos = ['auto', 'moto', 'camión','bici'];
    primerElemento(vehiculos);
}