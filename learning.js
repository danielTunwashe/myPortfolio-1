//count = 0
constNumb = 2;
// while(count < 10){
//     count++
//     console.log(`Hello world... ${count}`)
// }

console.log("Hello world")

// do{
//     count++
//     console.log(`Hello do while...${count}`)
// }while(count < 10)

// for(count = 0; count < 1000; count++){
//     console.log(`2 x ${count + 1} =  ${2*(count + 1)}`)
// }

//From function declearation ---> function expression ----> arrow function

function multiplication(num){
    if(num < 2){
        console.log("We can only help with num greater than 2")
        return
    }
    for(count = 1; count <= 50; count++){
        showAnyThing(num,count);
    }
}

let showAnyThing =(constNumber, iterarorNumb)=>{
    console.log(`${constNumber} x ${iterarorNumb} = ${constNumber * iterarorNumb}`)
}

for(i=2; i<=20; i++){
    multiplication(i)
    console.log("-----------------------------------")
}



