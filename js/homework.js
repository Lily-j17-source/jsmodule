//onchange() lo tiene que disparar el selector
//get value option selected 
// document.getElementById('orden').value
// 1 función
// 1 metodo
// usar innerHTML
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
 

let ulArr = ['Ale', 'Lily', 'alejandra','oscar','ruben', 'MArio']

 const ascendent = (arr) =>{
     let x = document.getElementById("orden").value;
     if( x === "a"){
         console.log("funcion ascendent",x)
         
         arr.sort((a,b) =>
         a.toLowerCase() > b.toLowerCase() ? 1:
         a.toLowerCase() < b.toLowerCase() ? -1:
         0);
         //console.log(arr)
        let listOrder = ''
        arr.forEach((arr) => {
                listOrder += `<li> ${arr}</li>`
            
        })
         document.getElementById("lista").innerHTML = listOrder
 }
 else{
     console.log("funcion descendente",x)
     arr.sort((a,b) =>
         a.toLowerCase() > b.toLowerCase() ? 1:
         a.toLowerCase() < b.toLowerCase() ? -1:
         0);
        let reversed = arr.reverse();

        let listOrder = ''
        arr.forEach((reversed) => {
                listOrder += `<li> ${reversed}</li>`
            
        })
         document.getElementById("lista").innerHTML = listOrder
 }
}
