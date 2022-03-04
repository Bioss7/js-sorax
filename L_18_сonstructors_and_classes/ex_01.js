// Класс это множество всех объектов которые наследуют свои свойства от одного прототипа
// Каждая функция является конструктором 
let Person, person, anotherPerson;

// Конструкторы принято называть с большой буквы
Person = function(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

// Создаем новый объект
person = new Person("Jack");
console.log(person.name);
person.greet();

// Всем объектам созданном на основе конструктора присваивается свойство constructor
// console.log(person.constructor);
// console.log(Person.prototype.constructor);

anotherPerson = new Person("Bruce");
console.log(anotherPerson.name);
anotherPerson.greet();

// Каждая функция имеет свойство prototype
// console.log(Person.prototype);

// Бинарный оператор, проверить объект на принадлженость к классу
console.log(anotherPerson instanceof Person); // true
console.log(Person.prototype.isPrototypeOf(anotherPerson)); // true

// Получение прототипа объекта, разная поддержка лучше не использовать 
console.log(anotherPerson.__proto__);

// prototype есть только у функций, и она хранит прототип, от которого будут наследовать свои свойства все объекты, которые будут
// создаваться этой функцией при помоще ключегово слово new 