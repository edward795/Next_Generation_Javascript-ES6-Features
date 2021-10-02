//ordinary function 
const display=function printName(name,age){
    console.log("Name:",name,"\nAge:",age)
}


//Arrow Functions 

const displayName=name=>{
    console.log('Name:',name)
}

const displayDetails=(name,age)=>{
    console.log("Name:",name,"\nAge:",age)
}

display("Max",24)
displayName("Kevin")
displayDetails("James",25)