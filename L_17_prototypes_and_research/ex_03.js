let Person = {
    constructor: function(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        return this;
    },
    greet: function(){
        console.log("Hi, my name is " + this.name);
    }
};

let person, anotherPerson, thirdPerson;

person = Object.create(Person).constructor("John", 35, "male");
anotherPerson = Object.create(Person).constructor("Jessica", 23, "female");
thirdPerson = Object.create(Person).constructor("Bruce", 23, "male");

console.log(person.name);
console.log(anotherPerson.name);
console.log(thirdPerson.name);

person.greet();
anotherPerson.greet();
thirdPerson.greet();

// Проверить является ли прототипом
console.log(Person.isPrototypeOf(person)); // true