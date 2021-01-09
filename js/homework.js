// HomeWork
// 1.
// si el usuario no tiene la cookie sessionuser
// Redireccionarlo al /login.html
// si tiene la cookie sessionuser
// redireccionarlo a /user.html
const isSessionUser =() =>{
    if(document.cookie.includes("sessionuser=true"))
   {
       document.getElementById("session").innerHTML="User->"
   }
   else{
       
       window.location.href = "login.html"
   }
}

window.addEventListener('load',isSessionUser)



// 2.
// Crear un div con un mensaje de
// “Este sitio se ve mejor en desktop”
// si el viewportWidth es <= 767
// aparecer el mensaje
// sino
// desaparecer el mensaje
// utilizar css
// no usar inline styles
const showMensaje = () => {
    console.log('me ejecuto')
    
    if(window.innerWidth <= 767) {
        document.querySelector('.boxMedia').classList.add('d-block')
        
    } else {
       // document.querySelector('.boxMedia').classList.add('d-none')
        
    }
}

window.addEventListener('load',showMensaje)