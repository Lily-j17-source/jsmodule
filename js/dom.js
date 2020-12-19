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

