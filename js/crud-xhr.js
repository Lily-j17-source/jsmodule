// Create user
const createNewUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    
    let nameValue = document.querySelector('#name').value;
            let lastNameValue = document.querySelector('#lastname').value
            let photoValue= document.querySelector('#url_photo').value
    //console.log(nameValue,lastNameValue,photoValue)


    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('POST', 'https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json')
    xhttp.send(
        JSON.stringify({
            name: nameValue,
            lastname: lastNameValue,
            urlPhoto: photoValue
        })
    )

    console.log("DONE")
}
// Read user
const   readUser  = () => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json')
    // xhttp.open('GET', 'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/-MQnTbsClYPUsYDcBS-R.json')
    xhttp.send()
}

// Update and replace
const updateAndReplaceUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }

    xhttp.open('PUT', `https://koders1gpython-default-rtdb.firebaseio.com/lily/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge",
        lastname: "Camarillo",
        urlPhoto: "https://loremflickr.com/320/240/person"
      })
    )
}

// Update and modify 
const updateAndModifyUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
      } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
      }
    }
    xhttp.open('PATCH', `https://koders1gpython-default-rtdb.firebaseio.com/lily/users/${idUser}.json`)
    xhttp.send(
      JSON.stringify({
        name: "Jorge Luis"
      })
    )
}

// Delete 
const deleteUser  = (idUser) => {
    // https://koders1gpython-default-rtdb.firebaseio.com/jorge
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
        console.log(JSON.parse(this.response))
        } else if (this.readyState === 4 && this.status === 404) {
        console.error(JSON.parse(this.response))
        return false
        }
    }
    xhttp.open('DELETE', `https://koders1gpython-default-rtdb.firebaseio.com/lily/users/${idUser}.json`)
    xhttp.send()
    
}


// function request all methods
const requestAjax = (url, callback, method = 'GET', data = {}) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            callback(JSON.parse(this.response))
            return true
        } else if (this.readyState === 4 && this.status === 404) {
            console.error(JSON.parse(this.response))
            return false
        }
    }
    xhttp.open(method, url)
    if (method === 'GET' || method === 'DELETE') {
        xhttp.send()
    } else {
        // put, patch, post
        xhttp.send(JSON.stringify(data))
    }
}
//llamada a este metodo seria:
/*
requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/jorge/users/.json',
    showResponse,
    'POST', 
    {
        lastname: "Paez",
        name: "Ale",
        urlPhoto: "https://loremflickr.com/320/240/person"
    }
)

*/

// put y post
const showUsers = (response) => {
    let user = response
    let usersList = ''
    for(user in response ) {
        let dataUsuario = response[user]
        usersList += `
            <li>${dataUsuario.name} ${dataUsuario.lastname} <a href="user.html?id=${user}">Ver usuario</a></li>
        `
    }
    document.querySelector('.list__users').innerHTML = usersList
}


if(window.location.pathname === '/' || window.location.pathname === '/index.html'){
    // estoy en home
    requestAjax(
    'https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json',
    showUsers,
    'GET')

}

const printUser = (arrData) => {  
    console.log(arrData)
    document.querySelector('.list__users').innerHTML = `
    <img src="${arrData.urlPhoto}">
    <h5 class="card-title name__user">${arrData.name}</h5>
    <p class="card-text email__user">${arrData.lastname}</p>
    `
}

if(window.location.pathname === '/user.html'){
    let url = new URLSearchParams(location.search)
    let id = url.get('id')
    // estoy en home
    requestAjax(
    `https://koders1gpython-default-rtdb.firebaseio.com/lily/users/${id}.json`,
    printUser,
    'GET')
}
/////homework------save new user
/**/
const saveFunction = ()=>{
    
    let nameValue = document.querySelector('#name').value;
            let lastNameValue = document.querySelector('#lastname').value
            let photoValue= document.querySelector('#url_photo').value
    console.log(nameValue,lastNameValue,photoValue)
/*
    requestAjax(
        'https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json',
        showResponse,
        'POST', 
        {
            lastname: nameValue,
            name: lastNameValue,
            urlPhoto: photoValue
        }
    )
    */
        console.log("se guardo")

}
//save new user 2.0
