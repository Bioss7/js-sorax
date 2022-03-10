// Переменные объявленные вне каких либо функций, становятся свойствами глобального объекта window
let myVar, doSomething;

doSomething = function() {
    alert("You typed: " + myVar);
}