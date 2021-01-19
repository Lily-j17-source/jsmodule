// dado el layout homework.html
/**
 * Cuando el usuario ponga cualquier ciudad en el input de busqueda
 * de la lista de ciudades, filtrar solo las que coincidan con la busqueda
 */

 let search = $('#busqueda')
 let listCity = $('ul li')

 
$(search).keyup(function(){//si se presiono una tecla hacemos la funcion
 let term = $(this).val()
 $('#ciudades li').hide()
 let ciudades = $("#ciudades li")
 for(item of ciudades){
     console.log(item)
     if(item.innerText.toLowerCase().search(term.toLowerCase()) != -1){
         $(item).show()
     }
 }
 
    
})
