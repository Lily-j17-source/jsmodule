

console.log('is largest')

const NUMBER_ONE = parseInt(prompt('Dame un numero: ')) 
const NUMBER_TWO = parseInt(prompt('Dame otro numero')) 

if(NUMBER_ONE > NUMBER_TWO){
 console.log(`El ${NUMBER_ONE} es el mayor`)
}else if(NUMBER_ONE === NUMBER_TWO){
    console.log(`El ${NUMBER_ONE} es igual al ${NUMBER_TWO}`)
}
else{
    console.log(`El ${NUMBER_TWO} es el mayor`)
}