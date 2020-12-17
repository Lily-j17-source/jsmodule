/*
let obj = {
    key: value,
    key: value,
    key: value
}
*/

let person ={
    nombre: 'Lilian',
    isKoder: true,
    age: 25,
    location:{
        street: 'Libertad',
        cp: '78430'
    }
}

for(item in person){
    console.log(person[item])
    if(item === 'location'){
        for(item2 in person[item]){
           console.log(`${item}: ${person[item][item2]}`) 
        }
        
    }

}