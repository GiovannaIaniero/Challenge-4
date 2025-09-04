/*Extraer una parte de un array: 
Crea una función que reciba un array y devuelva una parte usando .slice().*/


function extraerpartedearray(array, inicio, fin) {
    return array.slice(inicio, fin);
}


let vocales = ['a', 'e', 'i', 'o', 'u'];
let parteVocales = extraerpartedearray(vocales, 0, 3);
document.writeln(parteVocales);