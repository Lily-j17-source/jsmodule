//homework

//exercise 1-
//Imprimir en consola la tabla del 7
//7 x 1 = 7
/*
for(let i=1; i <= 10; i++){
    console.log(`7 * ${i} =  `, 7 *i)
}
*/
//exercise 2-
//imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
//3,6,7,9,12,14,15....
for(let i=1; i <= 100; i++){
    if(i % 3 === 0 || i % 7 === 0)
    console.log(i)
}
//exercise 4-------
//imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
//"en un lugar de la mancha” -> 5
let srt = "en un lugar de la mancha"
let countS = 0
for(let i=0; i < srt.length; i++){
    if(srt[i]  === ' '){
        countS ++
        
    }
   
}console.log(countS)

//exercise5--------
/*
imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4
*/
let str = "Hola mundo"
let count = 0
for(let i=0; i < str.length; i++){
    if(str[i] === 'a'){
      
     count ++
    }else if(str[i] === 'e' ){
        count ++
    }else if(str[i] === 'i'){
        count ++
    }else if(str[i] === 'o' ){
        count ++
    }else if(str[i] === 'u'){
        count ++
    }
       
}console.log(count)