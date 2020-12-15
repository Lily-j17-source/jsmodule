/*-----------ARROW FUNCTION----------------------*/
/*const result = add(2,3)

function add(a,b){
    return a + b
}

const addArrow = (a,b) =>{
    //sentencias
    return a + b
}

let pideNameDog = prompt("Escribe el nombre de tu perrito")
let pideAge = parseInt(prompt("Escribe la edad de tu perro en años humanos") ) 

const edadPerrito = (pideNameDog,pideAge) => {
    const dogYEar = 7* pideAge
  return  dogYEar
}
 console.log(edadPerrito(pideNameDog,pideAge))
*/
//Ejercicio 2
/*
let radioCirculo = parseInt(prompt("Escribe el radio de la circunferencia") )
const calcArea = (radioCirculo) =>{
const PI = 3.1416
 let area= PI * radioCirculo * radioCirculo
    return area

}
console.log(calcArea(radioCirculo))

const calCircunference = (radioCirculo) =>{
   const PI = 3.1416
    let perimetro = 2 * PI * radioCirculo
    return perimetro 
}
console.log(calCircunference(radioCirculo))
*/

/*
let temp = prompt("Escribe la temperatura ")
let op = prompt("Ingresa F-si esta en grados Farenheir o C-si esta engrados centrigrados")

const temperatureConverter = (valor, letra) =>{
    let converter
    if(letra === "C"){
       converter = (valor * 9/5) + 32
       //console.log("La temperatura en grados Farenheit son: ", converter)
       return converter
    }
    else if(letra === "F"){
        converter = (valor - 32 ) * 5/9
       // console.log("la temperatura en grados Celsius es: ", converter)
        return converter
    }
    else
       console.log("la opcion no es valida")
}
console.log(temperatureConverter(temp, op))
  */ 
   
   
   
   //resultado
   

   let numero = prompt("Escribe un numero para calcular su factorial")
const getFactorial = (unNumero) =>{
    let resultado = 1
    for (let index = 2; index <=unNumero; index ++) {
        resultado = resultado * index
    } return resultado
}
console.log(getFactorial(numero))