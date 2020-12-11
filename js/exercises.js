//imprimir la tabla del 8 en reversa
for(let i=8; i>0;i--)
{
console.log(`8 * ${i} = `, 8 * i)
}

//imprimir los numeros pares entre 1 y 100
for(let i =1; i<100;i++)
{
 if(i % 2 === 0)
 {
     console.log(i)
 }
}

//dado un string
//"reverse"
//invertir el ordern e imprimir en sonsola
let str = "reverse"
for(let i = str.length -1; i>0; i--)
{
    console.log(str[i])
}

//imprimir en consola el sig patron
//el acuario tiene 9 peces
//el acuario tiene 8 peces
//el acuario tiene 7 peces
//... el acuario tiene 1 pez
for(let i = 8;i>0;i--)
{ if(i === 1)
    {
        console.log(`el acuario tiene ${i} pez`)
    }
    else
    console.log(`el acuario tiene ${i} peces`)
    
}

//tabla del 7 con while
let counter = 1
while( counter <= 10)
{
    console.log( `7 x ${counter} = `,7* counter)
    counter ++
}
//ejercicio usando do-while
//tabla del 7
let counterDo=1
do{
    //sentencia
    console.log( `7 x ${counter} = `,7* counter)
    counterDo ++
}while(counterDo < 10)
//imprimir los numeros pares entre 1 y100 usando el ciclo
//do- o do-while
let numero = 1
while(numero <=100){
    if( numero % 2 === 0)
    {
        console.log(numero)
    }
    numero++
}



//Usando ciclo while o do-while
//dado un string
//"reverse"
//invertir el orden e imprimir en consola
/*
let fraseReversa = "reverse"
let strReversa = ''
let count = fraseReversa.length - 1
console.log(count)

while( count >= 0)
{
    strReversa += fraseReversa[count]
    counter --
}
console.log(strReversa)
*/