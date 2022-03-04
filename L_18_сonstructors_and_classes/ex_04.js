// Атрибут класса объекта
console.log({}.toString()); // 2 слово класс объекта
// Класс Object нельзя изменить
console.log(Object.prototype.toString.call([]));
console.log(Object.prototype.toString.call(/\w/));
console.log(Object.prototype.toString.call(function(){}));

// Можно использовать вместо оператора typeof
console.log(Object.prototype.toString.call("hi"));
console.log(Object.prototype.toString.call(345));
console.log(Object.prototype.toString.call(true));

// Функция возвращающая класс объекта 
let classof = function(object){
    return Object.prototype.toString.call(object).slice(8, -1);
};

console.log(classof("")); // String
console.log(classof([])); // Array
console.log(classof({})); // Object
console.log(classof(function(){})); // Function
console.log(classof(777)); // Number
console.log(classof(true)); // Boolean
console.log(classof(/\d/)); // RegExp
