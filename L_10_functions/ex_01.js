// function declaration statement инстркукция объявления функции
function greet(name) {
    return "Hello " + name;
}

console.log(greet("Tom").toUpperCase());

// function definition expression функцию можно определить, если присвоить какой то переменной выражение определения функции 
// Анонимная функция
let hello = function(name) {
    console.log(arguments); // объект массив аргументов 
    console.log(arguments.length);
    return "Hello " + name;
}; 

console.log(hello("Tom", 1, 2, 3));

