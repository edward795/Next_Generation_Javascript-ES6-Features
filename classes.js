class Human{
    constructor(){
        this.gender='male';
    }
    printGender(){
        console.log("Gender:",this.gender) 
    }
}

class Person extends Human{
    constructor(){
        super()
        this.name='Max'; 
        this.gender='female';
    }

    printName(){
        console.log("Name:",this.name)
    }
}

const person=new Person() 
person.printName()
person.printGender()