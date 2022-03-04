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

// Переопределим метод toString
Person.prototype.toString = function(){
    return this.name;
};

Person.prototype.valueOf = function(){
    return 100;
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

// Родные методы объектов
// Конструктор Object
// console.log(new Object());
// Все объекты js наследуют свойство от объекта 
// Object.prototype
// Поэтому у нашего developer есть методы:
console.log(developer.toString); // метод используется во всех случаях, когда мы преобразоваем объект в строку 
// Например
console.log("" + developer);
console.log(developer.valueOf);

// Переопределенный метод toString
console.log("The name is: " + developer);
// Многие стандартные классы в js так же перезаписывают этот метод
console.log([1,2,3, [4, 5, 6], {x:5}].toString());

// Функции в js являются объектами 
let func = function(arg){
    return arg + 10;
};

console.log(func.toString()); // получим код функции

// Преобразование объекта в число valueOf
console.log(+developer); // NaN