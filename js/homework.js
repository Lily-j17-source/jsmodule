// Ejercicio 1
// dado el siguiente array de objetos
let users = [
    { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
    { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
    { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
    { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
    { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
    { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
    { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];
// obtener un nuevo objeto con esta estructura
//-> {
//   'Bradley Bouley': 'Full Stack Resident',
//   'Chloe Alnaji': 'Full Stack Resident',
//   'Jonathan Baughn': 'Enterprise Instructor',
//   'Michael Herman': 'Lead Instructor',
//   'Robert Hajek': 'Full Stack Resident',
//   'Wes Reid': 'Instructor',
//   'Zach Klabunde': 'Instructor'
//   }

let newUSer = users.filter((cv) =>{
    if(cv.role === "Full Stack Resident" || cv.role === "Instructor" || cv.role === "Lead Instructor"
    || cv.role === "Enterprise Instructor"){
    
       return (`${cv.firstName}` + `${cv.lastName}` + ":" + `${cv.role}`) 
    }
    
}
)

console.log(newUSer)
//  tomando el array users,
//  hacer una funcion que reciba 2 parametros (arrayUsers, role)
//  y retorne un array con los usuarios que cumplan con el role

let usersRole = users.map((users,role) =>{
    if( users.role === "Instructor"){
        return users
    }
});
console.log(usersRole)



// ejercicio 3
// tomando el siguiente array de objetos
let persons = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
// obtener lo siguiente
// 1. Cantidad de personas que votaron
let votes = persons.reduce((acc,cv) => {
        if(cv.voted === true){
            return acc +1
        }else{
            return acc +0
        }
},0);
console.log(votes)

/************************************************ */
// 2. Cual es el promedio de Edad de los votantes
/*
console.log(votedNumber)

let averageAgePersons = persons.reduce((acc,cv) =>{
    return acc + cv.age
},0)/persons.length
console.log(averageAgePersons)
*/