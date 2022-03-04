// Класс это множество всех объектов которые наследуют свои свойства от одного прототипа
// Каждая функция является конструктором 
let Person, person, anotherPerson, Developer, developer;

// Конструкторы принято называть с большой буквы
Person = function(name) {
    this.name = name;
}

Person.prototype.greet = function() {
    console.log("Hello, my name is " + this.name);
};

// Создание дочерних классов
Developer = function(name, skills) {
    Person.apply(this, arguments);
    this.skills = skills || [];
};

// Наследоване 
Developer.prototype = Object.create(Person.prototype); 
Developer.prototype.constructor = Developer;

developer = new Developer("John", ["ruby", "ror", "python"]);
console.log(developer.name);
console.log(developer.skills);
developer.greet();

console.log(developer instanceof Developer); // true
console.log(developer instanceof Person); // true