// Преобразование типов (автоматическая конвертация типа)
console.log(5 + "5"); // 55
console.log(typeof(5 + "5")); // string
console.log(("5" * "4")); // 20
console.log(typeof("5" * "4")); // number
console.log(typeof("5" * "hi")); // number (NaN)

console.log("5" == 5); // true
console.log("0" == false); // true
console.log(Boolean("0")); // true