/*Calculadora básica con switch: 
Crea una función que reciba dos números y un operador (+, -, *, /). 
Devuelva el resultado de la operación. Si el operador no es válido, mostrar error.*/

function calculadoraBasica(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                resultado = num1 / num2;
            } else {
                return "Error: División por cero";
            }
            break;
        default:
            return "Error: Operador no válido";
    }

    return resultado;
}


let numero1 = parseFloat(prompt("Ingrese el primer número:"));
let numero2 = parseFloat(prompt("Ingrese el segundo número:"));
let operador = prompt("Ingrese el operador (+, -, *, /):");

console.log("Resultado:", calculadoraBasica(numero1, numero2, operador));