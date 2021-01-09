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
       document.getElementById("session").innerHTML="Bienvenido"
   }
   else{
       document.getElementById("session").innerHTML= "user is offline"
       console.log("no")
       document.cookie= 'logged=true'
   }
}

window.addEventListener('load',isLogged)