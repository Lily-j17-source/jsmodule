/* Ejercicios
Del listado "#vacations"
1.  Seleccionar elementos de tipo 'h2' y cambiar el color
5.  Selecciona aquellos ítems que tenga la clase .america y modificar el color
2.  Modificar el precio de todos los vuelos para que ahora sea $199.99
3.  Modifica todos los títulos de las vacaciones (h2), 
    su nuevo valor será "Titulo de tu agrado".
*/

 $('h2').css('color','aquamarine').text('Titulo cool')
 $('.america').css('color','#024da1')
$('.details').text('$199.99')


/*
Del listado sorting
1. Cuando le den click al link de America, Europe o Asia
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe o Asia
    y ocultar los demás
2. Si le dan click a todos
    Filtrar del listado "#vacations" filtrar los li con la clase America, Europe y Asia
*/

$('.sorting a').click(function(){
    let continent = $(this).text()
    if(continent === 'Todos') {
        $('#vacations .vacation').show()
    } else {
        $('#vacations .vacation').hide()
        $(`#vacations .${continent.toLowerCase()}`).show()
    }
})



 /**
 * Del listado Faq
 * 1. Al cargar la pagina, mostrar la pregunta 1
 * 2. Al dar click en head__faq aparecer la descripcion de la pregunta
 *      y desaparecer las descripciones que esten mostradas
 */
$('.desc__faq').hide()
$('.desc__faq:first').show()

$('.head__faq').click(function(event){
    event.preventDefault()
    $('.desc__faq').hide()
    $(this).next().show()
    //recordar que el this nos regresa el evento al que le dimos click
//con this.next nos regresa el selector siguiente de al que le dimos click

})