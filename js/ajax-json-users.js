/**
 * Funcion que hace un request de tipo htmlRequest
 * primero hace la peticion de todos los datos que va a traer
 * en donde los va a mostrar
 * hace el .open para indicarle la direccion de archivo
 * y envia la peticion
 */
const loadUSers = () => {
    const request = new XMLHttpRequest()
   
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                console.log(response)
               // console.log("recupero")
                const objectUsers = JSON.parse(response.responseText)
                let listUsers =  ''
                objectUsers.forEach(user => {
                   listUsers += `<li>${user.name} ${user.phone} <a href="${user.website}">Ir a sitio web</a></li>`
                   // listPosts += `<li>${user.userId} ${user.id} ${user.title} ${user.body}</li>`
                });
               
                document.querySelector('.list__users').innerHTML = listUsers
            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    })
    request.open("GET",'https://jsonplaceholder.typicode.com/users')
    request.send()
}
//loadUsers()
document.getElementById('getusers').addEventListener('click', loadUSers)
//window.addEventListener('load',loadUSers)