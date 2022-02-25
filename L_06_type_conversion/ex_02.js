// Явное преобразование Explicit Conversions
// Конструктор 
console.log(Number("555"));
console.log(typeof(Number("555")));
console.log(String(4433));
console.log(typeof(String(4433)));
console.log(Boolean(1));
console.log(typeof(Boolean(1)));

// Преобразование в логический тип
console.log(!!5); // true
console.log(!!0); // false
// Преобразование в строку
console.log(typeof(345 + ""));
// Преобразование в число
console.log(typeof(+"454"));

var number = 22;
console.log(typeof number.toString());
number = 45;
console.log(number.toString(3)); // преобразование в систему счисления
number = 5;
console.log(number.toString(2)); 

console.log(typeof false.toString());
