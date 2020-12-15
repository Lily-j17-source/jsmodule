/**
 * Escribir una función que calcule la edad de un perro en años caninos.
 * La función debe recibir el nombre y la edad del perro en años humanos
 * convertirlo a años caninos, e imprimir en consola 
 * calculateDogAge(2)
 * -> Poppy tiene 14 años caninos
 
let pideNameDog = prompt("Escribe el nombre de tu perrito")
let pideAge = parseInt(prompt("Escribe la edad de tu perro en años humanos") ) 
function calculateDogAge(nameDog,ageDog){
   let calculaEdad = ageDog * 7
   console.log(`${nameDog} tiene ${calculaEdad} años caninos`)
}
calculateDogAge(pideNameDog,pideAge)
*/


/**
 * Crear una función que calcule el area y la circunferencia de un circulo
 * Tomar como parametro del radio del circulo 
 * calcGeometry(4)
 * -> l area del circulo es NN y la circunferencia es de NN
 
let radioCirculo = parseInt(prompt("Escribe el radio de la circunferencia") )
function calcGeometry(radioCirculo){
    const PI = 3.1416
 let area= PI * radioCirculo * radioCirculo
 let perimetro = 2 * PI * radioCirculo
 console.log(`El área del circulo es: ${area} y la circunferencia es: ${perimetro}`)
}

calcGeometry(radioCirculo)
*/


/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temperatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 
let temp = prompt("Escribe la temperatura ")
let op = prompt("Ingresa F-si esta en grados Farenheir o C-si esta engrados centrigrados")
function temperatureConverter(valor, letra){
 let converter
 if(letra === "C"){
    converter = (valor * 9/5) + 32
    console.log("La temperatura en grados Farenheit son: ", converter)
 }
 else if(letra === "F"){
     converter = (valor - 32 ) * 5/9
     console.log("la temperatura en grados Celsius es: ", converter)
 }
 else
    console.log("la opcion no es valida")
}
temperatureConverter(temp, op)
*/


/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */
let numero = prompt("Escribe un numero para calcular su factorial")

function getFactorial(unNumero){
    let resultado = 1
    for (let index = 2; index <=unNumero; index ++) {
        resultado = resultado * index
    }console.log(resultado)
}

getFactorial(numero)