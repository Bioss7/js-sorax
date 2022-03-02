let greet = function(){
    return "Hi! My name is " + this.name;
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
// Указываем на какой объект должно быть вызвано ключевое слово this
console.log(anotherPerson.greet.call(person));
