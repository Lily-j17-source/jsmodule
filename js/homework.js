//Tarea de Funciones
//ejercicio---1-----
//Funcion:
//imprimir la tabla del 8 en reversa
function imprimirTablaReves( )
{
   for(let i=8; i>0;i--)
{
console.log(`8 * ${i} = `, 8 * i)
} 
}
 imprimirTablaReves()

//Ejercicio---2------
//Funcion para
//imprimir los numeros pares entre 1 y 100
function numPar(){
  for(let i =1; i<=100;i++)
{
 if(i % 2 === 0)
 {
     console.log(i)
 }
}  
}
numPar()

//Ejercicio----3---
//Funcion para imprimir
//tabla del 7 
function muestraTabla(){
    let counter = 1
while( counter <= 10)
{
    console.log( `7 x ${counter} = `,7* counter)
    counter ++
}
}
muestraTabla()

//Ejercicio---4----
//
// //Funcion para
// 1. Asignar un string a una variable 
// 2. Verificar cuantos caracteres tiene ese string
// 3. Imprimirlo en consola
function countString()
{
   let str = "hola mundo helloo";
console.log(str.length);
 
}
countString()

// Ejercicio---- 5-------
//funcion que 
// concatena dos cadenas
let var1 = prompt("Escribe la primera cadena")
let var2 = prompt("Escribe la segunda cadena");
function concatenaCadena(var1, var2){
    res = var1.concat(var2);
    console.log(res);
}
concatenaCadena(var1, var2)
/*
*/


//Ejercicio ---------6------
//imprimir en consola los múltiplos de 3 y 7  que se encuentran entre el 1 y el 100
//3,6,7,9,12,14,15....
function multiplo()
{
    for(let i=1; i <= 100; i++){
    if(i % 3 === 0 || i % 7 === 0)
    console.log(i)
}
}
multiplo()

//Ejercicio--------- 7-------
//imprimir en consola la cantidad de espacios que se encuentran en una cadena de texto
//"en un lugar de la mancha” -> 5
let srt = prompt("Escribe una cadena de mas de dos palabras")
function countSpace(srt)
{
   let countS = 0
for(let i=0; i < srt.length; i++){
    if(srt[i]  === ' '){
        countS ++
        
    }
   
}console.log(countS) 
}
countSpace(srt)

//Ejercicio ------8--------
/*
imprimir en consola la cantidad de vocales que se encuentran en una cadena de texto
“Hola mundo” -> 4
*/
function cuentaVocales()
{
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
}
cuentaVocales()
// Ejercicio------9-------------
// * Declarar un string con un correo electrónico
// * Enmascarar con "*" el bloque del usuario
// * "jorgec@kodemia.mx"
// * "*****@kodemia.mx"
function conviertePass(){
   str = "sdadfwxzad@gmail.com";
res = str.indexOf("@");
let nuevo_string = str.slice(0,res);
let asteriscos = "*";
let asteriscos_2 = asteriscos.repeat(res - 1);
let string_modificado = str.replace(nuevo_string, asteriscos_2);
console.log(string_modificado); 
}
conviertePass()

//Ejercicio------10-----------
//imprimir en consola el sig patron
//el acuario tiene 9 peces
//el acuario tiene 8 peces
//el acuario tiene 7 peces
//... el acuario tiene 1 pez
function peces(){
    for(let i = 8;i>0;i--)
{ if(i === 1)
    {
        console.log(`el acuario tiene ${i} pez`)
    }
    else
    console.log(`el acuario tiene ${i} peces`)
    
}
}
