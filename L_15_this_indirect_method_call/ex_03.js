let greet = function(greeting){
    return greeting + "! My name is " + this.name;
}

let person = {
    name: "John",
    greet: greet
};

let anotherPerson = {
    name: "Tom",
    greet: greet
};

console.log(person.greet("Hi"));
// Указываем на какой объект должно быть вызвано ключевое слово this
console.log(anotherPerson.greet.call(person, "Bonjour"));
// Разница между call и apply, в том что аргументы передаются массивом
console.log(anotherPerson.greet.apply(person, ["Bonjour"]));

// bind не вызывает функцию, а связывает с объектом, метод bind не изменяет исходную функцию, а возвращает новую функцию
let bound = greet.bind(anotherPerson);
// При вызове ключевое слово this указывает на тот объект с которым она была связана
console.log(bound("Hello there"));