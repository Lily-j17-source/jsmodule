/*************ARRAY METHODS********************************* */
//Tabla de multiplicar 
//[1,2.3,4]
//usando foreach
/*
let tablas=[1,2,3,4]
tablas.forEach(currentElement => {
    for(let j= 1; j<=10; j++){
        console.log(`${currentElement} X ${j} = `,j* currentElement)
    }
})
*/

//function
//[1,2,3]
//->[2,4,6]
//foreach
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






//function
//[1,2,3,4]
//solo los pares
//foreach
/*
const arrB = [1,2,3,4]
arrB.forEach(currentElement,index => {
    const onlyPair  = []
    if(index %2===0){
        onlyPair.push(currentElement)
    }
    console.log(onlyPair)
});


*/

//function
//['hola','mundo']
//->['ha','mo']
//foreach

/********************************* */
