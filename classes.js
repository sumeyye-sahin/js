class Person {
    constructor(firstName, lastName, age, country, city) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }

    getFullName (){
        return this.firstName +' '+ this.lastName
    }

    saySomething() {
        console.log('I am a person class')
      }
}

const person1 = new Person('sumeyye','sahin',23,'Turkiye','Ankara')
const person2 = new Person('eda','sahin',26,'Turkiye','İzmir')
const person3 = new Person('ali','sahin',12,'Turkiye','Adana')


console.log(person1.getFullName(),person2,person3)

//inheritance
class Staff extends Person{
   //departmant, works, salary
   departmant(){
    return 'manner'
   }

}

const staff = new Staff('asya','kumsal','32','Turkiye','İstanbul')
console.log(staff.getFullName())
console.log(staff.departmant())
console.log(staff.saySomething())

//Overriding methods
class Student extends Person {
    constructor(firstName, lastName, age, country, city, gender) {
      super(firstName, lastName, age, country, city)
      this.gender = gender
    }

    saySomething() {
        console.log('I am a child of the person class')
      }
}

let student = new Student('ayse','gunes',25,'Tr','corum','female')
console.log(student.saySomething())