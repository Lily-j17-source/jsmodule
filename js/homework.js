// Ejercicio 1 .forEach()
// Dado un array con solo números
// obtener el valor mas alto
// input: [1,4,3,2,5]
// output: -> [5]
/*
const doubleValues = arrNumbers =>{
    let arrayToFill=[]

    arrNumbers.forEach(currentValue =>{
        arrayToFill.push(currentValue * 2)
    })

    return arrayToFill
}

const arrayToDouble = [1,2,3]
const resultDoubleValues = doubleValues(arrayToDouble)
console.log(resultDoubleValues);
*/
let arrayNumbers = [1,4,3,2,5]


function mayorNumber(arrayNumbers){
    let numMayor = 0
 for(let i=0; i<arrayNumbers.lenght; i++){
    // numMayor += arrayNumbers[i]
     console.log(arrayNumbers)
     // return numMayor
     // console.log(numMayor)
   }//return 5
   //console.log(numMayor)
}
//const result =
 mayorNumber(arrayNumbers)
//console.log(result) 



// ejercicio 2 .map()
// función
// convertir todos los elementos numericos de un array
// a strings
// input: [1,2,3,4,5]
// output -> ['1,','2','3','4','5']


// ejercicio 3 .map()
// función
// capitalizar todos los elementos que sean strings de un array
// input: ['hOlA', 'mundo', 123]
// output -> ['Hola','Mundo','123]


// ejercicio 4 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos que no estan duplicados
// [1,2,4,2,5,4]
// -> [1,5]


// ejercicio 5 .filter()
//  funcion
// dado un array de números, filtre los elementos
// y devuelva un array con los elementos duplicados
// [1,2,4,2,5,4]
// -> [2,4]


// ejercicio 7 .filter()
//  funcion
// dado un array de años, filtre los elementos
// y devuelva un array con los años que son bisiesto
// [1990, 2000, 2001, 2020]
// -> [2000,2020]