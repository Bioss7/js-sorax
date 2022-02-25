console.log("Some string"); // Нету разницы
console.log('Another string');

console.log('Some "long" string');
console.log("Some 'long' string");

// Другое решение экранирование Escaping
// Строка последовательность символов, каждый их которых занимает 2 байта 
// Нету типа данных для хранения 1 символа
console.log("Hello there".length); 

// В ECMAScript 3 строки записывались только на одной строчке
// В ECMAScript 5 одну строку можем записать на нескольких строчках
// После символа \ не должно быть пробела
console.log("Another \
very long \
string");
// Перенос строки Escape Sequence
console.log("Another \n\tvery long \n\tstring");
// Экранирование Escaping, управляющая последовательность
console.log("Another \"very long\" string");
console.log("Another \"very \\ long\" string");

// Конкатенация строк (сложение строк) + 
var string  = "Hello";
console.log(string + " world");


