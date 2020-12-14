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
 */
let radioCirculo = parseInt(prompt("Escribe el radio de la circunferencia") )
function calcGeometry(radioCirculo){
    const PI = 3.1416
 let area= PI * radioCirculo * radioCirculo
 let perimetro = 2 * PI * radioCirculo
 console.log(`El área del circulo es: ${area} y la circunferencia es: ${perimetro}`)
}

calcGeometry(radioCirculo)



/**
 * Crear una función que convierta los grados celsius en fahrenheit y viceversa
 * debe recibir la temparatura y si la temperatura esta en Celsius o Fahrenheit
 * temperatureConverter(100,"C")
 * -> 100º Celsius equivalen a 212º fahrenheit
 */
/*
 * Escribir una funcion que calcule el factorial de un número
 * getFactorial(10)
 * -> 3628800
 */