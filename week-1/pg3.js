
function Person(name, age) {
    this.name = name;
    this.age = age; 
   this.greet=function(){
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    this.isAdult = function () {
        return this.age >= 18;
    };
}

const person1 = new Person("Sridhar", 20);
person1.greet();

if (person1.isAdult()) {
    console.log(`${person1.name} is an adult.`);
} else {
    console.log(`${person1.name} is not an adult.`);
}

const person2 = new Person("Bob", 15);
person2.greet();
console.log(`${person2.name} is ${person2.isAdult() ? "an adult" : "not an adult"}.`);
