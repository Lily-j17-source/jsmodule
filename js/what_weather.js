let day = prompt('Como esta el clima hoy?, 1-soleado, 2-lluvioso, 3-Nevado, 4-Nublado, 5-otro')
 let weather= parseInt(day)
 
if(weather === 1)
{
    console.log(`El dia esta Soleado`)
} 
if(weather === 2){
    console.log(`El dia esta Lluvioso`)
}
if(weather === 3){
    console.log(`El dia esta Nevando`)
} 
if(weather === 4){
    console.log(`El dia esta Nublado`)
}else if(weather === 5){
    let description = prompt('Escribe una descipcion de como esta el dia')
        console.log(description)
}

/*

 switch(weather)
 {
     case 1:console.log(`El dia esta ${Soleado}`)
     break;
     case 1:console.log(`El dia esta ${Lluvioso}`)
     break;
     case 1:console.log(`El dia esta ${Nevando}`)
     break;
     case 1:console.log(`El dia esta ${Nublado}`)
     break;
     default: let description = prompt('Escribe una descipcion de como esta el dia')
        console.log(description)
        break;
 }
*/