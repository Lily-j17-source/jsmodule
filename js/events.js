const kodersArr = ['Ale','Lily', 'alejandra','oscar','AlePaez','ruben', 'MArio','Carlos','Zaira','Gil','Elvira','Nayeli']

// Exercise
const addElements = (selector,numberElements, arrNames) => {
    let listKoders = ''
    arrNames.forEach((koder, index) => {
        if(index < numberElements ) {
            listKoders += `<li>Koder ${index + 1}: ${koder}</li>`
        }
    })
    document.querySelector(selector).innerHTML = listKoders
}

// Exercise filter
const filterKoders = (letter) => {
    let filtrados = kodersArr.filter((koder)=> {
        return koder.toLowerCase().startsWith(letter.toLowerCase())
    })
    addElements('#lista', filtrados.length , filtrados)   
}

//homework
function searchKoder(){
//document.getElementById("list").innerHTML = 'aqui la cadena qe queremos meter en el ul';
let valor = document.getElementById("search").value;
let tamWord = valor.length;
console.log(valor)
console.log(tamWord)
let addListSearch = ''
 let listName = ''
for(indice in kodersArr){
   let name = kodersArr[indice];
   let str = name.substring(0,tamWord)
  
    if(valor.length <= name.length && valor.length !=0 && name.length !=0){
        if(valor.toLowerCase() == str.toLowerCase()){
           /* let liKoder = document.createElement("li");
            let textKoder = document.createTextNode(kodersArr[indice]);
            liKoder.appendChild(textKoder);*/
           // document.getElementById("lista2").appendChild(liKoder);
            //
            console.log(name)
           
           listName += `<li> ${name} </li>`
           // 
        }
    }
    
}document.getElementById("lista2").innerHTML= listName


}

