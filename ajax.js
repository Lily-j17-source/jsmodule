/*console.log("esto es ajax");
$(document).ready(()=>{
    console.log("si se abrio el documento de jQuery")

$(function(){
    // GET
    $.ajax({
        url: "https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json",
        method: 'GET'
    }).done(function(response) {
        console.log('todo ok')
        console.log(response)
        let usersList ="";


    }).fail(function(){
        console.log('todo mal')
    })
})




})
*/
$(function(){
    // GET

    const paintUsers = (users)  => {
        console.log(users)
        let usersHtml = ''
        for(item in users) {
            usersHtml += `
                <tr>
                    <td>${users[item].name}</td>
                    <td>${users[item].lastname}</td>
                    <td><a href="${users[item].urlPhoto}">Photo</a></td>
                    <td>
                        <a href="show-user.html?id=${item}">Ver</a>
                        <a href="update-user.html?id=${item}">Actualizar</a>
                        <button class="delete delete__user" data-id="${item}">Eliminar</button>
                    </td>
                </tr>
            `
        }
        
        $('.users .table tbody').html(usersHtml)

    }
    if($('.users').length > 0){
        $.ajax({
            url: "https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json",
            method: 'GET'
        }).done(function(response) {
            paintUsers(response)
            
        }).fail(function(err){
            console.log(err)
            console.log(err.status)
            console.log(err.statusText)
            console.log('todo mal')
        })
    }


    if($('#form-new-user').length > 0){
        $('.send__form').click(function(){
            // create user object
            let userObject = {
                lastname: $('#name__input').val(),
                name: $('#lastname__input').val(),
                urlPhoto: $('#url__photo').val()
            }
            $.ajax({
                url: "https://koders1gpython-default-rtdb.firebaseio.com/lily/users/.json",
                method: 'POST',
                data: JSON.stringify(userObject)
            }).done(function(response) {
                console.log(response)
                $('#alert__form').css('display','block!important')
            }).fail(function(err){
                console.log(err)
                console.log(err.status)
                console.log(err.statusText)
                console.log('todo mal')
            })
        })
    }

    // listado
    // new user

    // TODO
    // update user
    // UPDATE

    // delete User
    // DELETE
    $('.users').on('click','.delete__user', function(){
        let idUser = $(this).data('id')//aqui obtenemos el id del usuario que se quiere eliminar
        console.log(idUser);
        //ahora sigue borrar
        //le enviamos el idUSer en el url,
        //le ponemos el metodo

        //luego tenemos qe borrar el renglon

        //falta mostrar un modal, para preguntar si si quiere eliminar
    })
   
   
    

})
