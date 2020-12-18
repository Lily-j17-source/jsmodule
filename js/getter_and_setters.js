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


    setBootcamp: function(newBootcamp){
    this.bootcamp = newBootcamp
    }
}

console.log(koder.getNombreAndGeneracion())

console.log(koder.setBootcamp('JS'))

//El get me regresa valores
//el set me puede modificar valores,