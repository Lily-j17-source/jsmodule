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
   // console.log(arrData)
    let listData = ''
    let nameUSer = ''

let strUser = window.location.href;
let tamCad = strUser.indexOf("=")
let idUSer = strUser.substr(tamCad+1,1);//numero de id
console.log(idUSer)//numero de id

    arrData.forEach(user => {
        console.log("a",user.id)
        if(idUSer ===user.id){
            console.log("entr")
            listData += `<tr><th>${user.name} ${user.email}</th></tr>`
        }else{
            console.log("no")
        }
        
    });
    

    document.querySelector(selector).innerHTML = listData
}




window.addEventListener('load',function(){
    getData('https://jsonplaceholder.typicode.com/users',printUsers,'.table')
})




