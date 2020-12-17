 const arrReduce = [1,2,3,4,5,10,20]
arrReduce.reduce((accumulator, currentValue) =>{
let suma = accumulator + currentValue
console.log(accumulator, currentValue)
return suma

}, 0)


//['a','b','c','c','b']
//searchOcurrence(Array, 'caracter')
//searchOcurrence(['a','b','c','c','b'],'c')
//->2
//mio
const  arrLetters= ['a','b','c','c','b']
const letra = 'b'
const searchOcurrence = arrLetters.reduce((contadorLetra, letra) =>{

    //contadorLetra[letra] ? contadorLetra[letra] +1 : contadorLetra[letra] +0
    contadorLetra[letra] = (contadorLetra[letra] || 0) + 1;
   return contadorLetra;

}, {});

console.log(searchOcurrence);
//jorge
//copiar funcion desde paint



//arreglo con varias strings que se una en uno solo
const manyString = ['en','algun','lugar','de','la','mancha']
manyString.reduce((accumulator, currentValue) =>{
let suma = accumulator + currentValue + ' '
//console.log(accumulator, currentValue)
console.log(suma)
return suma

}, '')