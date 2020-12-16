const myArray = [1,4,7]

for(let i = 0; i < myArray.length; i++){
    //sentencias
    for( let j=1; j <= 10; j++){
        console.log(`${myArray[i]} X ${j} = `, myArray[i]*j)
    }

}