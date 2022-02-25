// Методы для работы со строкой 
var string = "Sometimes the same is different"; // Иногда одно и то же отличается
// Zero-based indexing первый индекс 0 
console.log(string.charAt(0)); // Возвращает символ под определенным индексом 
console.log(string.length);
console.log(string.charAt(string.length - 1)); // Последний символ
console.log(string.substring(10)); // Возвращает подстроку исходной строки the same is different
console.log(string.substring(10, 21)); // the same is
console.log(string.substring(10, string.length - 1)); // the same is differen

console.log(string.slice(-10)); // берем последние 10 символов  different

// Берем начальный символ и количество сколько надо взять
console.log(string.substr(14, 4)); // same

// Когда используем методы, строки неизменяемый тип immutable type (не изменяют исходную строку, а возвращают новую строку)
console.log(string);

// Для поиска подстроки в строке
console.log(string.indexOf("i")); // 5
console.log(string.lastIndexOf("i")); // 23

// Заменить подстроку в исходной строке
console.log(string.replace("is", "is not"));

// Чтобы изменить исходную строку 
string = string.replace("is", "is not");
console.log(string);

// Разбиваем строку на массив по разделителю
console.log(string.split(" "));

console.log(string.toUpperCase());
console.log(string.toLowerCase());

// В ECMAScript 5 
console.log(string[5]);