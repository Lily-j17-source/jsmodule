//Escribir una funcion que a partir del string
//-> "987"
//imprimir las tablas de multiplicar en ese orden
//tabla del 9
//tabla dek 8
//tabla del 7
/*
let str_comp = prompt("Escribe un numero")
function multiplica_Orden(lacadena){
    for(let i=0; i< lacadena.length; i++){
        for(let j=1; j<=10;j++)
        {
            console.log(`${lacadena[i]} x ${j} = `,i * j)
        }

    }
}
multiplica_Orden(str_comp)
*/

//Escribir una funcion que dado un string como parametro
//-> "anita lava la tina"
//verifique si es o no palindromo
//->anita lava la tina"
//ispalindrome("anita lava la tina")
//anita lava la tina es un palindromo
function isPalindrome(stringPalindrome){
    const word = stringPalindrome.replace(/ /g,'')
    let wordReversed = ''
    console.log(stringPalindrome )
    for(let i = word.length-1; i>=0;i--){
        wordReversed += word[i]
    }
    //console.log(wordReversed)
    if(word === wordReversed){
        console.log('És un palindromo')
    }else{
        console.log('no es palindromo')
    }
}

isPalindrome("oso")


//remplazar el caracter espacio por nada con
//.replace(' ','')
//comparar las palabras


//escribir una funcion que dados 2 parametros
//me imprima en consola los tipos de datos que son
//getDataType(1, "2")
//-> numbre, string
//typeof
function getDataType(primerParametro,segundoParametro){
    
    for(let i=1;i<arguments.length;i++)
    {
        let esType = typeof primerParametro
        console.log(`${esType}`)
    }
}

getDataType(3)