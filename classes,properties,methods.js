class Human{
    gender='male'
    printGender=()=>{
        console.log("Gender:",this.gender) 
    }
}

class Person extends Human{
        name='Max'; 
        gender='female';
  

    printName=()=>{
        console.log("Name:",this.name)
    }
}

const person=new Person() 
person.printName()
person.printGender()