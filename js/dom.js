console.log("dom")

let title = document.createElement("h1")//crear elemento
let texto = document.createTextNode("soy un titulo desde JS")//crear texto del elemento
title.appendChild(texto)//al elemento h1, le agregamos el texto
document.getElementById('caja2').appendChild(title)//al elemento que sea caja2, le asignamos el elemento h1

let parrafo = document.createElement('p')
let textoParrafo = document.createTextNode('soy un parrafo desde JS')
parrafo.appendChild(textoParrafo)

console.log(parrafo)
document.getElementById('caja2').appendChild(parrafo)



let unList = document.createElement('ul')
let listItem1 = document.createElement('li')
let listItem2 = document.createElement('li')
let anc1 = document.createElement('a')
let anc2 = document.createElement('a')
let href1 = document.createAttribute("href")


let textAnc1 = document.createTextNode('item 1')
anc1.appendChild(textAnc1)
//anc1.appendChild(href1)
listItem1.appendChild(anc1)
unList.appendChild(listItem1)

let textAnc2 = document.createTextNode('Item 2')
anc2.appendChild(textAnc2)
listItem2.appendChild(anc2)
unList.appendChild(listItem2)

console.log(unList)


/*INNERHTML */
let listUl = document.getElementById("ulist")
listUl.innerHTML="<li>Item1 usando Inner</li>"+"<li>Item2 usando Inner</li>"

/**
 * document.getElementById("caja2").innerHTML`<ul><li><a href=""`>item1</a></li></ul>
 */


//funcion que nos pide el selector y el numero de elemnts
const Koders=['ale','oscar','ruben','Andre','alex','brian','carlos','charlie','elvira']

const addElements = (selector,numberElements,arrNames) =>{
    /*
    let addSelector = document.querySelector(selector)
    let addNumberElements = ''
    if(numberElements < arrNames.lenght){
      for( let count=0; i<20;i++){
        addNumberElements += `<li> ${i + 1} ; ${arrNames[i]}</li>`
        }  
        addSelector.innerHTML = addNumberElements
    }*/
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(''+selector).innerHTML = listKoders
}

const filterKoders = (letter) =>{
    let filtrados = koders.filter((koders) =>{
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#listak',filtrados.length,filtrados)


}
//tarea.. 
/*
Investigar el evento onchange()
crear un afuncion que use un metodo
usar el innerhtml
lo tiene que disparar el selector

*/

