/*Contar cuántas veces aparece una letra en un texto: 
Crea una función que reciba un texto y una letra, y cuente cuántas veces aparece usando un for.*/

function contarLetras(texto, Letra) {
    let contador = 0;

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === Letra) {
            contador++;
        }
    }
    console.log(`La letra "${Letra}" aparece ${contador} veces en el texto`);
    return contador;


}
let texto = prompt("Ingrese un texto:");
let Letra = prompt("Ingrese una letra para buscar en el texto:");
contarLetras(texto, Letra)

