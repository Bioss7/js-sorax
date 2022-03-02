let greet = function(){
    return "Hi! My name is " + this;
}

let person = {
    name: "John",
    greet: greet
};

let anotherPerson = {
    name: "Tom",
    greet: greet
};

console.log(person.greet());
console.log(anotherPerson.greet());
console.log(greet()); // глобальный объект, если оставить только this в функции
console.log(this); // глобальный объект