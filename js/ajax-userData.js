const getData = (url,funcionAMostrar,selector,method ='GET') => {
    const request = new XMLHttpRequest()
   
    request.addEventListener('readystatechange', () => {
        if(request.readyState !== 4) {
            return 
        } else {
            if(request.status >= 200 && request.status <= 299){
                const response  = request
                console.log(response)
                const objectResponse = JSON.parse(response.responseText)
                //objectResponse contiene el arreglo de datos del request

                //funcion a Mostrar cambia deacuerdo al tipo de datos que hay en el documento
                //y que queremos mostrar
                funcionAMostrar(selector,objectResponse)

            } else {
                console.log('No se pudo ejecutar')
            }
        } 
    })
    request.open(method,url)
    request.send()
}

const printUsers = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `
            <li>${user.name} ${user.phone} <a href="user.html?id=${user.id}">Ver usuario</a></li>
        `
    });
    document.querySelector(selector).innerHTML = listData
}
const printPosts = (selector, arrData) => {
    let listData =  ''
    arrData.forEach(user => {
        listData += `<li>${user.id}. ${user.title} ${user.body} </li>`
    });
    document.querySelector(selector).innerHTML = listData
}

// load post
/*
const getposts = document.getElementById('getposts')
if(getusers){
    getposts.addEventListener('click', function(){
        getData('https://jsonplaceholder.typicode.com/posts', printPosts, '.list__posts')
    })
}
*/


const printUser = (selector, arrData) => {
    document.querySelector(selector).innerHTML = `
    <h5>${arrData.name}</h5>
    <p>${arrData.email}</p>
    <a href="${arrData.website}>Ver perfil</a>`

}

const userLocation = window.location;
if(userLocation.pathname === '/user.html'){
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    if(id >=1 && id <11){
        getData(`https://jsonplaceholder.typicode.com/users/${id}`,printUser,'.card')
    }else {
        document.querySelector('.card').innerHTML = `
        <p class="card-text email__user">El usuario no existe</p>        
        `
    }
}

/*
window.addEventListener('load',function(){
    getData('https://jsonplaceholder.t',printUsers,'.listaUsers')
})

*/


