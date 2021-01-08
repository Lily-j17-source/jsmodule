let showAll = document.getElementById("showAll")
showAll.addEventListener("click",function(){
    console.log("muestra lista con eventListener")
    addElements("#lista",5,kodersArr)
})


/****************BOM************* */
/*********Browser Object Model********* */
//event resize
//resize
//resolucion <= 767
//aparecer contenido mobile

//desaparecer contenido desktop
//sino
//desaparecer contenido mobile y 
//aparecer contenido desktop
//window.innerWidth
window.addEventListener('resize',showContent);
function showContent(){
    let h = window.outerHeight;
    let w = window.outerWidth;
    if(w <= 767){
        document.getElementById("mobile").innerHTML = "contenido mobile"
        document.getElementById("desktop").innerHTML=''
        //otra forma
        //document.getElementById("mobile").setAttribute('style','display:block')
    }else if(w >=767){
        document.getElementById("desktop").innerHTML = "contenido de desktop"
        document.getElementById("mobile").innerHTML = ''
    }
}


//cookie
//function
//document.cookie
//logged= true
//si existe la cookie looged
//mensaje: bienvenido
//si no existe
//Mensaje: user is offline
//loguearlo (setear cookie)


const isLogged =() =>{
    if(document.cookie.includes("logged=true"))
   {
       document.getElementById("mensaje").innerHTML="Bienvenido"
   }
   else{
       document.getElementById("mensaje").innerHTML= "user is offline"
       console.log("no")
   }
}

window.addEventListener('load',isLogged)