var myVariable; // Инструкция объявления Declaration Statement
var variable, _var, $var; // Пример 

// JS чувствителен к регистру Case-sensitive 
// Данные бывают простые primitive (5 штук: числа, строки, логические значения, null, undefined) и object

// JS: CamelCase; PHP: underscore 
// Простые типы 
var myNumber = 2525,
    myString = "Some string",
    myBool = true,
    myNull = null, 
    myUndef = undefined; 
    anotherVar = 345; // CamelCase
    another_var = 234; // underscore 

// Определения типа 
console.log(typeof typeof myNumber); // string
console.log(typeof myNumber);
console.log(typeof myString);
console.log(typeof myBool);
console.log(typeof myNull);
console.log(typeof myUndef);
console.log(typeof anotherVar);
console.log(typeof another_var);

console.log("Sorax".toUpperCase());

// Объекты 
var obj = {name: "sorax"},
    array = [1,2,3],
    regexp = /w+/g,
    func = function(){};

console.log("");
console.log("obj", typeof obj);
console.log("array", typeof array);
console.log("regexp", typeof regexp);
console.log("func", typeof func);

// Типы изменяемые mutable и неизменяемые immutable

// mutable
obj.name = "passive star";
array[1] = 777; // Изменили массив

// immutable
console.log(myString.toUpperCase()); // Строка остается неизменной, а возвращается другая строка SOME STRING
console.log(myString); // Строка остается неизменной Some string

// Оператор присваивания, с побочным эффектом, его побочным эффектом является запись переменной какого либо значения 
var a, b, c, d;
a = b = c = d = 5; // слево направо


