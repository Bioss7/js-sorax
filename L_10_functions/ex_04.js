// Выражение вызова 
// self-invoking anonymous function Функция которая вызывается после определения называется анонимной самовызывающиеся функцией 
let greeting = (function(name) {
    return "Hello " + name;
}("Tom"));

console.log(greeting);