let koder = {
    name: 'liliana',
    secondName: 'Juarez',
    email: 'liliana.1793@hotmail.com',
    age:'25',
    adress:'av.libertad #103 Soledad,slp, cp78430',
    bootcamp:'python',
    generation: 1,
    module: 'js',
    mentor:'Jorge Luis',
    /*
    getFullname: function(){
        return this.name + '' + this.secondName
    },
    getDirection:function(){
        return this.adress
    },
    getTakeClass: function(){
        return this.module
    },
    getGeneration: function(){
        return this.generation
    },
    getNombreAndGeneracion:function(){
    return this.name + ' esta en el bootcamp' +this.bootcamp+
    ' en la generacion: ' +this.generation
    + ' con el mentor' + this.mentor
    },
    */
    get fullname(){
        return this.name + '' + this.secondName
    },
    get direction(){
        return this.adress
    },
    get takeclass(){
        return this.module
    },
    get generation(){
        return this.generation
    },
    get NombreAndGeneracion(){
        return this.name + ' esta en el bootcamp' +this.bootcamp+
        ' en la generacion: ' +this.generation
        + ' con el mentor' + this.mentor
        },
    setBootcamp: function(newBootcamp){
    this.bootcamp = newBootcamp
    },
    set newDirection(nameDirection){
        this.direction = nameDirection
    },
    set newtakeBootcamp(newbootcamp){
        this.bootcamp = newbootcamp
    }

}

//console.log(koder.getNombreAndGeneracion())

console.log(koder.setBootcamp('JS'))

//El get me regresa valores
//el set me puede modificar valores,


 //////////////////defindeProperty

let dataUSers =[
    {
        name : 'Jorge',
        lastName: 'Camarillo',
        age: 27,
        generation: '1-generation',
        nameBootcamp: 'Python'
        
    },
    {
        name: 'Lily',
        lastname: 'Juarez',
        age:25,
        generation: '1-generation',
        nameBootcamp: 'Python'
    },
    {
        name: 'Ruben',
        lastname: 'Flores',
        age:28,
        generation: '1-generation',
        nameBootcamp: 'Python'
    },
    {
        name: 'Nayely',
        lastname: 'JGutierrez',
        age:24,
        generation: '1-generation',
        nameBootcamp: 'Python'
    }


]
//usamos esto para agregar una nueva propiedad
Object.defineProperty(koder,'fullname',{
     get : function(){
         return this.name + ' ' + this.lastname
     }
 })
 
/*
//PAra definir una propiedad  para varios objetos
dataUSers.foreach ((element, index) =>{
    Object.defineProperty (element, 'fullName',{
        get : function(){
            return this.name + ' ' + this.lastName
        }
    })
})

//console.log(dataUSers.propertyNewUSer);
*/
//para definir varias propiedades al mismo objeto
  //con foreach
 dataUSers.forEach((element)=>{
     Object.defineProperties(element,{
         "uper" :{
             get : function () {
                 return this.name.toUpperCase() + ' ' + this.lastName.toUpperCase()
             }
         },

        "DatosBootcamp":{
             get : function () {
                 return this.generation + this.nameBootcamp
             }
         },
         
         "newname" : {
             set: function (nuevoNombre) {
                 this.name = nuevoNombre
             }
         },
         


     })

     
 })

