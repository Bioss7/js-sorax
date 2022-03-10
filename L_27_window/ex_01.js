// Объект Window является глобальным и стоит на вершине иерархии всех объектов доступных браузера
// Глобальные переменные это переменные объявленные вне каких либо функций 
var globalVariable = "value";
// Все глобальные переменные становятся свойствами глобального объекта window
console.log(window);
// Интерпретатор на самом деле ищет свойство с таким именем на объекте window
console.log(globalVariable);
console.log(window.globalVariable);

// Добавить свойство на объект window
window.myVar = 500;
console.log(myVar);

// Тоже самое глобальные функции
console.log(parseInt("1000px", 10));
console.log(window.parseInt("1000px", 10));

// Конструкторы на объекте window
var array = new window.Array(10, 20, 30);
console.log(window.array);
window.console.log(window.array);

// Рекурсия
console.log(window.window.array);
console.log(window.window.window.array);
console.log(window);